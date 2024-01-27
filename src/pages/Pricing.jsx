// Uses the same styles as Product
import styles from "./Product.module.css";
import PageNav from "../components/PageNav";

export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav />
      <section>
        <div>
          <h2>
            Simple pricing.
            <br />
            Just $9/month.
          </h2>
          <p>
            Embark on a visual journey of your lifes adventures with MapMarker,
            a user-friendly web application designed to help you effortlessly
            document every city you have ever visited. Whether you are a
            globetrotter, a weekend wanderer, or a business traveler, this
            platform transforms your travel memories into an interactive map,
            allowing you to relive and share your experiences in a whole new
            way.
          </p>
        </div>
        <img src="img-2.jpg" alt="overview of a large city with skyscrapers" />
      </section>
    </main>
  );
}
