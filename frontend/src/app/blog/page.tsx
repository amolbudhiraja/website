'use client'; 

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import { getFavorites, getCategories, getArticle, Article, Category, Favorite } from "./api";
import { textColorDarkMode } from "../components/ColorMode";
import Image from "next/image";

export default function Blog() {
    const [favoriteArticles, setFavoriteArticles] = useState<JSX.Element[]>([]); 
    const [categoryArticles, setCategoryArticles] = useState<JSX.Element[]>([]); 

    useEffect(() => {
      getFavorites().then((response: any) => {
        const localFavorite: Favorite = response.data; 
        const localFavoriteArticles: JSX.Element[] = []
        const localFavoriteKeys: string[] = Object.keys(localFavorite);
        localFavoriteKeys.forEach((articleID) => {
          getArticle(articleID).then((res: any) => {
            const articleData: Article = res.data;
            localFavoriteArticles.push(<ArticleItem title={articleData.title} image={articleData.image} url={articleData.url} category={articleData.category} summary={articleData.summary} />)
            setFavoriteArticles(localFavoriteArticles); 
          })
        })
      }).catch((error: Error) => {
        console.error('Error fetching favorites:', error);
      });
    }, []);
    
    useEffect(() => {
      getCategories().then((response: any) => {
        const localCategory: Category = response.data;
        const localCategoryArticles: JSX.Element[] = []; 
        const localCategoryKeys: string[] = Object.keys(localCategory)
        localCategoryKeys.forEach((key) => {
          localCategoryArticles.push(<p>{key}</p>)
        })
        setCategoryArticles(localCategoryArticles); 
      }).catch((error: Error) => {
        console.error('Error fetching categories:', error);
      });
    })

  return (
    <>
      <NavBar />
      <div className="px-10 lg:px-20">
        <h1 className={`${textColorDarkMode} text-4xl font-bold`}>Recent Articles</h1>
        <div className="flex flex-col">
          {favoriteArticles}
        </div>
        <h1 className={`${textColorDarkMode} text-4xl font-bold`}>All Categories</h1>
          {categoryArticles}
      </div>
      <Footer />

    </>
  );
}

let ArticleItem = ({title, image, url, category, summary}: {title: string, image: string, url: string, category: string, summary: string}) => {
  return (
    <a href={`/blog/${url}`}>
      <div className="flex flex-row p-5 items-start">
        <div className="w-1/3 flex-none">
          <Image
            className="rounded-2xl object-cover w-full"
            width={500}
            height={300}
            alt={`${title} - Article Image`}
            src={image}
          />
        </div>
        <div className="flex flex-col pl-5">
          <p className="text-sm uppercase mb-2">
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </p>
          <h2 className="font-bold text-xl mb-4">
            {title}
          </h2>
          <p className="lg:hidden">
            {summary.substring(0, 250) + "..."}
          </p>
          <p className="hidden lg:block">
            {summary.substring(0, 400)}
          </p>
        </div>
      </div>
    </a>
  );
};
