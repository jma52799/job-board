import { Suspense } from "react";
import Loading from "../loading";

export default function Saved() {
    return (
        <Suspense fallback={<Loading />}>
            <main>
                L
            </main>
        </Suspense>
    );
  }