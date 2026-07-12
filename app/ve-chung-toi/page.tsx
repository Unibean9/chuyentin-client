import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { aboutUsSeoImage } from "./components/data";
import { VeChungToiContent } from "./components/ve-chung-toi-content";

export const metadata: Metadata = buildPageMetadata({
  title: "Về chúng tôi — Đội ngũ mentor và câu chuyện Chuyên Tin",
  description:
    "Câu chuyện thành lập, đội ngũ mentor luyện thi chuyên Tin và cách Chuyên Tin theo sát tiến độ học sinh mỗi tuần.",
  path: "/ve-chung-toi",
  ogImage: aboutUsSeoImage,
});

export default function VeChungToiPage() {
  return <VeChungToiContent />;
}
