import React, { useState } from "react";

const Form = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [highlight, setHighlight] = useState("");
  const [SEOTags, setSEOTags] = useState([
    "Metaverse",
    "Blockchain",
    "Decentraland",
    "Sandbox",
  ]);
  const [font, setFont] = useState(1);
  const [CollaboratorIds, setCollaboratorId] = useState([
    "670f7179e447a1308a99089a",
  ]);
  const [customUrl, setCustomUrl] = useState("https://decentraland.org/");
  const [categories, setCategories] = useState([]);
  const [featureImageUrl, setFeaturedImageUrl] = useState();
  const [featureImageCaption, setFeaturedImageCaption] = useState();
  const [extraImages, setExtraImages] = useState([
    {
      imageURL:
        "https://images.unsplash.com/photo-1729002125469-b5304d64de55?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      imageCaption: "images of blockchain",
    },
  ]);
  const baseURL = import.meta.env.VITE_BASE_URL;
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const featuredImage = {
      imageURL: featureImageUrl,
      imageCaption: featureImageCaption,
    };
    const request = {
      title,
      body,
      highlight,
      SEOTags,
      font,
      CollaboratorIds,
      customUrl,
      categories,
      featuredImage,
      extraImages,
    };

    const data = await fetch(baseURL + "/article/addArticle", {
      method: "POST",
      // credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(request),
    });
    
    if (data.status != 200) {
      throw new Error("Error in login");
    }
    console.log(data);
    return data.json();
  };
  const onCategoryChange = (event) => {
    const value = event.target.value;
    if (value != "select" && !categories.includes(value)) {
      const arr = categories.map((el) => el);
      arr.push(value);
      setCategories(arr);
    }
  };
  const removeCategories = (value) => {
    const arr = categories.filter((el) => el != value);
    setCategories(arr);
  };

  console.log(categories);
  return (
    <div className="">
      <div className="font-bold text-3xl text-center">Create A Post</div>
      <form
        onSubmit={(e) => onSubmitHandler(e)}
        className="flex flex-col items-start justify-start gap-10 px-10 py-5"
      >
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            onChange={(e) => setTitle(e.target.value)}
            onClick={() => setTitle(" ")}
            className="border-2 border-black p-2 m-2"
          />
        </div>
        <div className="w-full flex items-start">
          <label htmlFor="body">Body</label>
          <textarea
            type="text"
            name="body"
            id="body"
            onChange={(e) => setBody(e.target.value)}
            onClick={() => setBody(" ")}
            className="border-2 border-black px-2 mx-2 w-1/2 h-60"
          />
        </div>
        <div className="w-full flex items-start">
          <label htmlFor="body">Highlight</label>
          <textarea
            type="text"
            name="highlight"
            id="highlight"
            onChange={(e) => setHighlight(e.target.value)}
            onClick={() => setHighlight(" ")}
            className="border-2 border-black px-2 mx-2 w-1/2"
          />
        </div>
        <div className="flex items-start gap-3">
          <label htmlFor="categories">Select Categories</label>
          <select
            name="categories"
            id="categories"
            onChange={onCategoryChange}
            className="mx-3 p-2 border-2"
          >
            <option value="select">Select Option</option>
            <option value="metaverse">Metavers</option>
            <option value="sandbox">sandbox</option>
            <option value="upland">upland</option>
            <option value="web3">web3</option>
          </select>
          {categories
            ? categories.map((el) => (
                <div
                  onClick={() => removeCategories(el)}
                  className="border-2 border-black p-1 rounded-lg"
                >
                  X {el}
                </div>
              ))
            : null}
        </div>
        <div>
          <label htmlFor="imageUrl">Image URL</label>
          <input
            type="text"
            name="imageUrl"
            id="imageUrl"
            onChange={(e) => setFeaturedImageUrl(e.target.value)}
            className="border-2"
          />
        </div>
        <div>
          <label htmlFor="imageUrl">Image Caption</label>
          <input
            type="text"
            name="imageUrl"
            id="imageUrl"
            onChange={(e) => setFeaturedImageCaption(e.target.value)}
            className="border-2"
          />
        </div>
        <button className="border-2 px-4 py-2 rounded-md m-auto">Submit</button>
      </form>
    </div>
  );
};

export default Form;
