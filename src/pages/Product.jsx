import styles from "./Product.module.css";
import PageNav from "../components/PageNav";

export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav />
      <section>
        <img
          src="img-1.jpg"
          alt="person with dog overlooking mountain with sunset"
        />
        <div>
          <h2>About MapMarker.</h2>
          <p>
            <h3>Seamless Registration:</h3>
            <p>
              Sign up in seconds and create your personalized account to start
              mapping out your travel history.
            </p>
            <h3>Intuitive Map Interface:</h3>
            <p>
              Explore the world through an intuitive map interface. Easily
              navigate and zoom in on different regions to pinpoint the exact
              locations you have visited.{" "}
            </p>
            <h3>Precise Geolocation:</h3>
            <p>
              Simply click on any location on the map, and the application will
              automatically fetch and store the city details.
            </p>
            <h3>Rich City Profiles:</h3>
            <p>
              Each city you add comes to life with rich details, including its
              name, country, and any additional notes you want to attach.
            </p>
          </p>
        </div>
      </section>
    </main>
  );
}
