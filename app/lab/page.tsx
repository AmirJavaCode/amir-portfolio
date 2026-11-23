import { CollectionPage, collections } from "@/components/CollectionPage";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata(
  collections.lab.title,
  collections.lab.description,
  "/lab/",
);
export default function Lab() {
  return <CollectionPage collection="lab" />;
}
