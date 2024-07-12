import Link from "next/link";

export default function Home() {
  return (
    <>
      <div>
        <p>Hello world</p>
        <Link href={"/docker"}>Click to go to docker page </Link>

        <p>Test project for dockerize the next js app</p>
      </div>
    </>
  );
}
