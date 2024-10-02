import Link from "next/link";
import { Fragment, Suspense } from "react";

import MealsGrid from "@/components/meals/MealsGrid";
import MealsLoading from "./MealsLoading";

import { getAllMeals } from "@/lib/meals";

import styles from "./page.module.css";

export const metadata = {
  title: "All Meals",
  description: "Browse the delicious meals shared by our vibrant community.",
};

async function Meals() {
  const meals = await getAllMeals();
  return <MealsGrid meals={meals} />;
}

export default function MealsPage() {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={styles.highlight}>by you</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself. It is easy and fun!
        </p>
        <p className={styles.cta}>
          <Link href="/meals/share">Share Your Favorite Recipe</Link>
        </p>
      </header>
      <main className={styles.main}>
        <Suspense fallback={<MealsLoading />}>
          <Meals />
        </Suspense>
      </main>
    </Fragment>
  );
}
