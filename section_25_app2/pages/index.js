import { MongoClient } from "mongodb";
import MeetupList from "../components/meetups/MeetupList";
import Head from "next/head";

const HomePage = (props) => {
  return (
    <>
      <Head>
        <title>React Meetups</title>
        <meta
          name="description"
          content="Browse a huge list of highly active React meetups!"
        />
      </Head>
      <MeetupList meetups={props.meetups} />
    </>
  );
};

// export async function getServerSideProps(context) {
//   //saniyede 1-2 istek geliyor sıklıkla data değişiyor veya auth gibi kontroller için bu yöntem daha mantıklı
//   const req = context.req;
//   const res = context.res;
//   //fetch data from API
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS
//     },
//   };
// };

export async function getStaticProps() {
  //sık sık data değişikliği yok veya res,req özellikleri vesaire kullanılması gerekmiyor ise bu yöntem daha iyi.
  //revalidate ile belirtilen saniye aralığında datanın güncellenmesi sağlanabiliyor. Revalidate olmadan, sayfa yalnızca production build aşamasında renderlanır.

  const client = await MongoClient.connect(
    "mongodb+srv://burakdunal:7FxmUr8z94RnLowz@cluster0.ngixxhp.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find().toArray();
  client.close();
  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1,
  };
}

export default HomePage;