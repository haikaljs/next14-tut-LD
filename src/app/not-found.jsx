import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div>
      <h2>Not Found</h2>
      <Link href="/">Go back home</Link>
    </div>
  );
};

export default NotFound;
