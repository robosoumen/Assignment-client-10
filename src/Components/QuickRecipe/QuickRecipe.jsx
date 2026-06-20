import React from "react";

const QuickRecipe = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 space-y-3">
      {/* card */}
      <div>
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure className="px-10 pt-10">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4ES9Gr7Gctb7ME-XS_5bG6fJl_NhiavtNLpshtPMoGQ&s=10"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Fruit Salad</h2>
            <p>
              A refreshing mix of fresh fruits packed with vitamins, minerals,
              and natural sweetness. Perfect as a healthy snack or a light
              dessert for any time of the day.
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure className="px-10 pt-10">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf8JzyMlZAG7H3KS5GCTociEjN5au1Oi1weGLPX59dXA&s=10"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Noodles</h2>
            <p>
              A fast and delicious meal made with noodles, vegetables, and
              savory seasonings. Ideal for busy days when you want something
              tasty in just a few minutes.
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure className="px-10 pt-10">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDIs5PURbiOKxtJJNCEEx2-yxKp0zwoWostmKqrNU-CQ&s=10"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Corn Chaat</h2>
            <p>
              A spicy and tangy Indian street-style snack made with sweet corn,
              fresh vegetables, and flavorful spices. It's quick to prepare and
              bursting with taste and nutrition.
            </p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickRecipe;
