'use client'; 

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { textColorDarkMode } from "../../components/ColorMode";
import { usePathname } from "next/navigation";
import { Article, getArticleFromSlug } from "../api";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function ArticlePage() {
  const urlSlug: string = String(usePathname().split('/').at(-1)); 

  const [article, setArticle] = useState<Article>(); 

  useEffect(() => {
        getArticleFromSlug(urlSlug).then((res: any) => {
          const articleData: Article = res.data;
          setArticle(articleData)
        })
  }, []);

  return (
    <>

      <NavBar />

      <div className="px-10 lg:px-20 flex flex-col justify-center items-center space-y-2">
        <h1 className={`${textColorDarkMode} font-bold text-4xl`}>{article?.title}</h1>
        <div className="flex flex-row space-x-5 border-4 border-white rounded-lg py-2 justify-center items-center w-full">
          <p className={textColorDarkMode}>{article?.category.toUpperCase()}</p>
          <p className={`${textColorDarkMode} hidden lg:block`}>|</p>
          <p className={textColorDarkMode}>{article?.date}</p>
          <p className={textColorDarkMode}>{article?.views}</p>
        </div>
        <div className="flex justify-center rounded-2xl m-5"><Image className="rounded-2xl" objectFit="contain" width={2000} height={500} alt={`${article?.title} Image`} src={article?.image || ""}/></div>
        <div className={textColorDarkMode}>
          <div  dangerouslySetInnerHTML={{__html: article?.body || "Loading..."}} />
        </div>

        <BlogBackItem />

      </div>


      <Footer />

    </>
  );
}

/** Blog Back Button for Article Pages */
let BlogBackItem = () => {
  return (
    <div>
      <a href="/blog">
        <p className={`${textColorDarkMode} font-bold hover:underline`}>Back to the Blog Page ➡️</p>
      </a>
    </div>
  );
}