import { isLoadedState } from "@/atoms/states";
import CardAlbum from "@/components/CardAlbum";
import PageTitle from "@/components/PageTitle";
import SectionTitle from "@/components/SectionTitle";
import { getRecordingByWorkID } from "@/lib/concertmaster";
import { motion } from "framer-motion";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

export default function Recordings({ recs, recTitle }) {
  const router = useRouter();
  const [isLoaded, setIsLoaded] = useRecoilState(isLoadedState);
  const [verifiedRecordings, setVerifiedRecordings] = useState([]);
  const [allOtherRecordings, setAllOtherRecordings] = useState([]);

  useEffect(() => {
    const verified = [];
    const allOther = [];

    recs?.map((recording) => {
      // added this check to make sure that the recording has an album name
      // for some reason, open opus sometimes give recordings without album names
      console.log(recording);
      if (recording.album_name != null) {
        if (recording.verified === "true") {
          verified.push(recording);
        } else {
          allOther.push(recording);
        }
      }
    });
    setVerifiedRecordings(verified);
    setAllOtherRecordings(allOther);
    setIsLoaded(true);
    console.log(recs);
    console.log(verifiedRecordings);
    console.log(allOtherRecordings);
  }, [recs, setIsLoaded]);

  return (
    <>
      <Head>
        <title>{isLoaded ? `${recTitle}` : "Loading"}</title>
      </Head>
      <motion.div
        className="min-h-screen"
        initial={{ y: -6, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 6, opacity: 0 }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20,
        }}
      >
        <div className="flex flex-col">
          {/* <div className="h-96 w-full bg-slate-100 border-b">
          <div className="flex flex-col justify-center h-96 md:mt-0 md:mx-auto md:mb-4 md:max-w-7xl w-full bg-slate-200 ">
            <h1 className="text-4xl font-bold text-slate-900 ">
              Composer Philip
            </h1>
          </div>
        </div> */}
          <div className="w-full px-4 pb-20 md:mx-auto md:mb-4 md:mt-0 md:max-w-7xl ">
            {/* actual inner content starts */}

            <PageTitle title={`Recordings of ${recTitle}`} />

            {!recs && (
              <div className="flex h-96 flex-col items-center justify-center">
                <h1 className="text-lg ">Nothing Found</h1>
              </div>
            )}

            {verifiedRecordings?.length > 0 && (
              <div>
                <SectionTitle text="Verified Recordings" />
                <div className="mb-12 grid gap-4 md:grid-cols-2">
                  {verifiedRecordings.map((album) => (
                    <CardAlbum key={album.spotify_albumid} album={album} />
                  ))}
                </div>
              </div>
            )}

            {allOtherRecordings?.length > 0 && (
              <div>
                <SectionTitle text="All Recordings" />
                <div className="grid gap-4 md:grid-cols-2">
                  {allOtherRecordings.map(
                    (album) => (
                      console.log(album),
                      (<CardAlbum key={album.spotify_albumid} album={album} />)
                    ),
                  )}
                </div>
              </div>
            )}

            {/* actual inner content ends */}
          </div>
        </div>
      </motion.div>
    </>
  );
}

export async function getServerSideProps(context) {
  const { workId } = context.query;
  const recs = await getRecordingByWorkID(parseInt(workId));
  const recTitle = recs.work.title || "";
  const recordings = recs.recordings || null;
  return {
    props: {
      recs: recordings,
      recTitle,
    },
  };
}
