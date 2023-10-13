// our-domain.com/aboutus

import Link from "next/link";
import { Fragment } from "react";

const details = [
  { id: 1, name: "Yash", role: "Senior Developer" },
  { id: 2, name: "Vaibhav", role: "Backend Developer" },
  { id: 3, name: "Suresh", role: "Frontend Developer" },
];

function AboutUs() {
  return (
    <Fragment>
      <h1>The About Us page</h1>
      <ul>
        {details.map((devName) => (
          <li key={devName.id} id={devName.id}>
            <Link href={`/aboutus/${devName.id}`}>{devName.name}</Link>
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default AboutUs;
