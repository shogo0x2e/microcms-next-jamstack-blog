import Link from "next/link";
import { client } from "../libs/client";

export default function Home({ blog }) {
  return (
    <div>
      <ul>
        {blog.map((blog) => (
          <li key={blog.id}>
            <Link href={`/blog-test/${blog.id}`}>{blog.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
// ビルド時にサーバ側で呼ばれる！
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog-test" });

  return {
    props: {
      blog: data.contents,
    },
  };
};