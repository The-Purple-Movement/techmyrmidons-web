import styles from "./DomainDetails.module.css";
import { useParams } from "react-router-dom";

import Card from "../../Components/DomainDetails/Card/Card";

import Navbar from "../../Components/Navbar/Navbar";
import { useEffect, useState } from "react";

import Domains from "../../data/home.json";

const DomainDetails = () => {
  let { id } = useParams();
  const [domain, setDomain] = useState(); // holds the domain name from params
  const [years, setYears] = useState(); // holds the years.json file
  const [year, setYear] = useState(); // holds the selected year
  const [localyear, setLocalYear] = useState(); // This is just a copy of the year state variable, and is used to highlight the selected year
  const [tools, setTools] = useState(); // holds the all data of respective {year}.json file
  const [localtools, setLocalTools] = useState(); // holds the filtered data of respective {year}.json file after search

  const [search, setSearch] = useState("");

  const [categories, setCategories] = useState(); // holds the categories.json file
  const [uniquecategories, setUniqueCategories] = useState(); // holds an array of unique categories
  const [category, setCategory] = useState(); // holds the selected category
  const [localcategory, setLocalCategory] = useState(); // This is just a copy of the category state variable, and is used to highlight the selected category
  const [filteredcategory, setFilteredCategory] = useState(); // holds the filtered data of categories.json file

  const [blogs, setBlogs] = useState();
  const [people, setPeople] = useState();

  useEffect(() => {
    setDomain(
      Domains.home.filter(function (domain) {
        return domain.folderName === id;
      })
    );

    import(`../../data/${id}/years.json`).then((response) =>
      setYears(response.years)
    );

    if (id === "ai") {
      import(`../../data/${id}/categories.json`).then((response) => {
        setCategories(response.categories);
        setUniqueCategories([
          ...new Set(response.categories.map((obj) => obj.category)),
        ]);
      });
    }

    if (id !== "uiux" && id !== "creativedesign") {
      import(`../../data/${id}/blog.json`).then((response) => {
        setBlogs(response.blog);
      });
    } else {
      setBlogs([]);
    }

    import(`../../data/${id}/follow.json`).then((response) => {
      setPeople(response.follow);
    });
  }, [id]);

  useEffect(() => {
    let result =
      tools &&
      tools.filter((f) =>
        f.title.toLowerCase().startsWith(search.toLowerCase())
      );

    setLocalTools(result);
  }, [search, tools]);

  useEffect(() => {
    // this code is to set the initial value of year state variable to 2022
    if (years) {
      setYear(years && years[0] && years[0].year);
    }
  }, [years]);

  useEffect(() => {
    setLocalYear(year);
  }, [year]);

  useEffect(() => {
    if (year && id) {
      setSearch("");
      import(`../../data/${id}/${year}.json`).then((response) =>
        setTools(response[year])
      );
      import(`../../data/${id}/${year}.json`).then((response) =>
        setLocalTools(response[year])
      );

      if (id === "uiux") {
        import(`../../data/uiux/uiuxblogs/${year}.json`).then((response) => {
          const items = response && response[year] ? response[year] : [];
          const mapped = items.map((item) => ({ author: item.title, blog: item.url }));
          setBlogs(mapped);
        });
      } else if (id === "creativedesign") {
        import(`../../data/creativedesign/creativedesignblogs/${year}.json`).then((response) => {
          const items = response && response[year] ? response[year] : [];
          const mapped = items.map((item) => ({ author: item.title, blog: item.url }));
          setBlogs(mapped);
        });
      }
    }
  }, [year, id]);

  useEffect(() => {
    if (uniquecategories) {
      setCategory(uniquecategories && uniquecategories[0]);
    }
  }, [uniquecategories]);

  useEffect(() => {
    setLocalCategory(category);
  }, [category]);

  useEffect(() => {
    if (category && id) {
      let filter = categories.filter((obj) => {
        return obj.category === category;
      });
      setFilteredCategory(filter);
    }
  }, [categories, category, id]);

  if (domain) {
    return (
      <>
        <div className={styles.navbar_container}>
          <Navbar />
        </div>
        <header>
          <div className={styles.container}>
          <h1>{domain && domain[0] ? domain[0].technology : "Unknown"} Myrmidon</h1>
            <p className={styles.tagline}>
              The best guide for you to start the next world.
            </p>

            {years && years[0] && (
              <input
                className={styles.search}
                type="text"
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search Now"
              />
            )}
          </div>
        </header>

        <main>
          {years && (
            <section id="topics">
              <div className={styles.container}>
                <div className={styles.years}>
                  {years &&
                    years.map((year) => (
                      <p
                        onClick={() => setYear(year.year)}
                        className={
                          localyear === year.year
                            ? styles.year_active
                            : styles.year
                        }
                      >
                        {year.year}
                      </p>
                    ))}
                </div>
                <div className={styles.cards_wrapper}>
                  {localtools &&
                    localtools.map((tool) => (
                      <Card
                        title={tool.title}
                        desc={tool.description}
                        link={tool.url}
                      />
                    ))}
                </div>
              </div>
            </section>
          )}

          {uniquecategories && (
            <section id="categories">
              <div className={styles.container}>
                <h2 className={styles.section_subtitle}>Categories</h2>
                <div className={styles.categories}>
                  {uniquecategories &&
                    uniquecategories.map((category) => (
                      <p
                        onClick={() => setCategory(category)}
                        className={
                          localcategory === category
                            ? styles.year_active
                            : styles.year
                        }
                      >
                        {category}
                      </p>
                    ))}
                </div>
                <div className={styles.cards_wrapper}>
                  {filteredcategory &&
                    filteredcategory.map((category) => (
                      <Card
                        title={category.title}
                        desc={category.description}
                        link={category.url}
                      />
                    ))}
                </div>
              </div>
            </section>
          )}

          <section id="blogs">
            <div className={styles.container}>
              <h2 className={styles.section_subtitle}>Blogs to follow</h2>
              <div className={styles.cards_wrapper}>
                {blogs &&
                  blogs.map((blog) => (
                    <Card
                      title={blog.author}
                      linkText={blog.link}
                      link={blog.blog}
                    />
                  ))}
              </div>
            </div>
          </section>
          <section id="people">
            <div className={styles.container}>
              <h2 className={styles.section_subtitle}>People to follow</h2>
              <div className={styles.cards_wrapper}>
                {people &&
                  people.map((person) => (
                    <Card
                      id={id}
                      photo={person.photo}
                      linkText={person.name}
                      link={person.followLink}
                    />
                  ))}
              </div>
            </div>
          </section>
        </main>

        <div className={styles.cw_text}>© Copyright 2025 Tech Myrmidons</div>
      </>
    );
  } else {
    return <p>Domain Not Found!</p>;
  }
};

export default DomainDetails;
