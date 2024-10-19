import Image from "next/image";
import Link from "next/link";
import ContactsCard from "../cards/ContactsCard";
import Container from "../containers/Container";
async function Footer({ picture, username, userId }) {
  const year = new Date().getFullYear();
  const contacts = await (
    await fetch(`http://localhost:4000/api/${userId}/contacts`)
  ).json();
  return (
    <footer className="footer">
      <Container className="w-full flex justify-start  flex-wrap  gap-4 items-center">
        <div className="flex  justify-center items-center gap-2 ">
          <Image
            className="rounded-full object-cover border-2 w-10 h-10 overflow-hidden"
            src={
              picture
                ? picture
                : "https://superstarsculture.com/wp-content/uploads/2023/10/unknown-1-3.jpg"
            }
            alt={"profile user picture"}
            width={40}
            height={40}
          />
          <h1 className="text-nowrap mr-10">{username}</h1>
        </div>

        <div className="flex flex-1">
          <ContactsCard contacts={contacts} />
        </div>

        <div className="">
          <span> all &copy; rights are reserved, designed & created by </span>
          <Link
            className="bg-gradient-to-br text-lg from-purple-500 via-sky-600 text-transparent bg-clip-text hover:text-purple-500 duration-150"
            target="_blank"
            href="https://www.linkedin.com/in/ahmed-gaafar-5a3478201/"
          >
            ahmedG3far44
          </Link>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
