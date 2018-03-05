import React from "react"
import {BrowserRouter, Route, Link} from "react-router-dom"
import createBrowserHistory from "history/createBrowserHistory"
import './style.css';

import americana from './americana.jpg';
import pepperone from './pepperone.jpg';
import caesar from './caesar.jpg';
import olivier from './olivier.jpg';
import mackerel from './mackerel.jpg';
import salmon from './salmon.jpg';
import meatloaf from './meatloaf.jpg';
import steak from './steak.jpg';
import cheesecake from './cheesecake.jpg';
import cookies from './cookies.jpg';


const history = createBrowserHistory();

const Pizza = () => (
    <div className="PageProducts">
        <div id="box">
            <section id="single-product">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="single-product-img">
                                <img src={americana}/>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="block">
                                <div className="product-des">
                                    <h1>Americana</h1>
                                    <p className="price">$10</p>
                                    <p>
                                        <b>Ingredients:</b>
                                            <ol>
                                                <li>Pepperoni </li>
                                                <li>Mushrooms</li>
                                                <li>Mozzarella</li>
                                                <li>Bread flour</li>
                                                <li>Olive oil</li>
                                                <li>Tomato sauce</li>
                                            </ol>
                                    </p>
                                </div>
                                <div>
                                    <p>
                                        1) For crusts: Combine 2 cups of flour with the dry yeast, sugar and salt. Add the water and oil and mix until well blended (about 1 minute). Gradually add enough remaining flour slowly, until a soft, sticky dough ball is formed. <br/>
                                        2) Knead for about 4 minutes, on a floured surface, until dough is smooth and elastic. Add more flour, if needed. (If using RapidRise(R) Yeast, let dough rest, covered, for 10 minutes.)<br/>
                                        3) Divide dough in half. Pat each half (with floured hands) into a 12-inch greased pizza pan OR roll dough to fit pans.<br/>
                                        4) For pizzas: Preheat oven to 425 degrees F. Top crusts with sauce, pepperoni and cheese.<br/>
                                        5) Bake for 18 to 20 minutes until crusts are browned and cheese is bubbly. For best results, rotate pizza pans between top and bottom oven racks halfway through baking.
                                    </p>
                                    <ul className="link"><li><b><Link to='order'>Order this dish</Link></b></li></ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

        <div id="box">
        <section id="single-product">
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <div className="single-product-img">
                            <img src={pepperone}/>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="block">
                            <div className="product-des">
                                <h1>Pepperone</h1>
                                <p className="price">$10</p>
                                <p>
                                    <b>Ingredients:</b>
                                    <ol>
                                        <li>Pepperoni </li>
                                        <li>Bread flour</li>
                                        <li>Olive oil</li>
                                        <li>Tomato sauce</li>
                                        <li>Firm mozzarella cheese</li>
                                        <li>Parmesan cheese</li>
                                        <li>Ham</li>
                                        <li>Onions</li>
                                        <li>Chopped fresh basil</li>
                                        <li>Mushrooms</li>
                                    </ol>
                                </p>
                            </div>
                            <div>
                                <p>
                                    1.For crusts: Combine 2 cups of flour with the dry yeast, sugar and salt. Add the water and oil and mix until well blended (about 1 minute). Gradually add enough remaining flour slowly, until a soft, sticky dough ball is formed.<br/>
                                    2.Knead for about 4 minutes, on a floured surface, until dough is smooth and elastic. Add more flour, if needed. (If using RapidRise(R) Yeast, let dough rest, covered, for 10 minutes.)<br/>
                                    3.Divide dough in half. Pat each half (with floured hands) into a 12-inch greased pizza pan OR roll dough to fit pans.<br/>
                                    4.For pizzas: Preheat oven to 425 degrees F. Top crusts with sauce, pepperoni and cheese.<br/>
                                    5.Bake for 18 to 20 minutes until crusts are browned and cheese is bubbly. For best results, rotate pizza pans between top and bottom oven racks halfway through baking.
                                </p>
                                <ul className="link"><li><b><Link to='order'>Order this dish</Link></b></li></ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
    </div>
)

const Salad = () => (
    <div className="PageProducts">
        <div id="box">
        <section id="single-product">
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <div className="single-product-img">
                            <img src={caesar}/>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="block">
                            <div className="product-des">
                                <h1>Caesar</h1>
                                <p className="price">$10</p>
                                <p>
                                    <b>Ingredients:</b>
                                    <ol>
                                        <li>German rye bread </li>
                                        <li>Garlic clove</li>
                                        <li>Olive oil</li>
                                        <li>Gem lettuces</li>
                                        <li>Caesar salad dressing</li>
                                    </ol>
                                </p>
                            </div>
                            <div>
                                <p>
                                    1.Before your friends arrive, make the croutons for the salad. Preheat the oven to 200°C/fan 180°C/gas 6. Cut the crusts off the bread, then cut the bread into pieces. Put into a roasting tin, sprinkle with the garlic, olive oil and a little sea salt, and mix together. Cook for 10 minutes. Cool and put into a sealed container until you need them.<br/>
                                    2.Put the lettuce into a colander and rinse under cold running water. Shake dry, then put into a sealed container and chill until needed.<br/>
                                    3.Take a bowl and put in a handful of lettuce leaves (tearing any large leaves). Sprinkle with the croutons.<br/>
                                    4.Drag a vegetable peeler over the Parmesan and let a few shavings fall into your salad. Drizzle over some caesar salad dressing and eat.
                                </p>
                                <ul className="link"><li><b><Link to='order'>Order this dish</Link></b></li></ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>

        <div id="box">
        <section id="single-product">
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <div className="single-product-img">
                            <img src={olivier}/>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="block">
                            <div className="product-des">
                                <h1>Olivier</h1>
                                <p className="price">$10</p>
                                <p>
                                    <b>Ingredients:</b>
                                    <ol>
                                        <li>Golden potatoes </li>
                                        <li>Carrots</li>
                                        <li>Frozen peas</li>
                                        <li>Hardboiled eggs</li>
                                        <li>Dill pickles</li>
                                        <li>Olive oil mayonnaise</li>
                                        <li>Diced smoked ham</li>
                                    </ol>
                                </p>
                            </div>
                            <div>
                                <p>
                                    1.The first step is to cook your potatoes and carrots. I used a steamer, but you can always go the traditional route and boil them. In either case, peel the carrots but not the potatoes. If you are steaming (or nuking in the microwave to streamline the process), make sure to prick the potatoes with a fork. I'm not sure that they would actually explode in a steamer, but given that you want to end up with neatly diced potato cubes, better safe than sorry. And did I mention that stabbing potatoes with a fork does wonders for relieving stress?<br/>
                                    2.Steam the potatoes for 30 minutes to start with, and then add the peeled carrots. Continue steaming for 10-15 more minutes, or until the potatoes and carrots are firm but tender when poked.<br/>
                                    3.Meanwhile, cook your frozen peas according to package directions. I use the kind that can be steamed in the package in the microwave. When they are done, set them aside to cool.<br/>
                                    4.Note: there are traditionalists who will argue that nothing but canned peas will do in this salad, but I beg to differ. The faded, dull color and taste of canned peas just cannot compare to fresh or frozen steamed peas.<br/>
                                    5.When the potatoes and carrots are done, allow them to cool to the point that you can handle them easily.<br/>
                                    6.Peel the potatoes. Using your fingers or the back of a knife, gently scrape the thin layer of skin off of the potatoes. Dice them into ½-inch cube-ish shapes and put them into a medium serving bowl.<br/>
                                    7.Next, dice your carrots. I've heard it said that a Soviet housewife could be judged on her housekeeping skills by how finely she could dice vegetables for her soups and salads. I, however, won't judge you. In fact, if you chop your potatoes and carrots a little larger, I would probably even thank you. I happen to like chunky salads.<br/>
                                    8.Toss the carrots and a cup of steamed peas into the bowl with the potatoes.<br/>
                                    9.Peel and dice your hardboiled eggs. Again, I know some like to have their salads with finely diced ingredients, but I don't. So dice them however you like.<br/>
                                    10.Chop pickles finely. I used small snacking dill pickles, so I needed to use six of them. If you have larger pickles, try using three and see if that is enough for you.<br/>
                                    11.Add the ham if using and mix everything together gently before you add the mayonnaise.<br/>
                                    12.Stir in one cup of mayo to start with, and add more if you think that the salad needs more binding together.<br/>
                                    13.Cover the salad and chill for at least one hour or overnight to allow the flavors to come together. And of course, garnish with dill. This is a Russian salad, after all.
                                </p>
                                <ul className="link"><li><b><Link to='order'>Order this dish</Link></b></li></ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
    </div>
)

const Fish = () => (
    <div className="PageProducts">
        <div id="box">
            <section id="single-product">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="single-product-img">
                                <img src={mackerel}/>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="block">
                                <div className="product-des">
                                    <h1>Mackerel</h1>
                                    <p className="price">$20</p>
                                    <p>
                                        <b>Ingredients:</b>
                                        <ol>
                                            <li>Large pasta shells</li>
                                            <li>Broccoli</li>
                                            <li>Oil</li>
                                            <li>Red onions</li>
                                            <li>Garlic</li>
                                            <li>Tomato purée</li>
                                            <li>Red wine</li>
                                            <li>Chopped tomatoes</li>
                                            <li>Basil</li>
                                            <li>Peppered smoked mackerel fillets</li>
                                            <li>Light crème fraîche</li>
                                            <li>Cheddar</li>
                                        </ol>
                                    </p>
                                </div>
                                <div>
                                    <p>
                                        1.Heat the oven to 200°C/180°C fan/gas 6. Bring a large pan of water to the boil and cook the pasta shells for 2 minutes less than the pack instructions. Add the head of broccoli, sliced into florets, for the last 2 minutes of the cooking time, then drain and set aside.<br/>
                                        2.Meanwhile, in a large sauté pan, heat a glug of oil and fry the red onions for 5 minutes. Add the garlic and tomato purée, fry for a few minutes, then add the red wine. Bubble for 2 minutes, then add the chopped tomatoes and basil. Cook for 10 minutes, then season.<br/>
                                        3.Remove the skin from a the mackerel fillets and break up into bite-size pieces. Stir into the pan with the remaining basil and light crème fraîche. Spoon into a 2 litre baking dish (or keep in the pan if it’s ovenproof) and top with grated mature cheddar. Cook in the oven for 20-25 minutes until golden and piping hot throughout.
                                    </p>
                                    <ul className="link"><li><b><Link to='order'>Order this dish</Link></b></li></ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

        <div id="box">
        <section id="single-product">
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <div className="single-product-img">
                            <img src={salmon}/>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="block">
                            <div className="product-des">
                                <h1>Salmon</h1>
                                <p className="price">$20</p>
                                <p>
                                    <b>Ingredients:</b>
                                    <ol>
                                        <li>Red onions</li>
                                        <li>Red pepper</li>
                                        <li>Yellow pepper</li>
                                        <li>Courgette</li>
                                        <li>Garlic bulb</li>
                                        <li>Tomatoes</li>
                                        <li>Olive oil</li>
                                        <li>Cherry tomatoes on the vine</li>
                                        <li>Sustainable salmon fillets</li>
                                        <li>Lemon juice</li>
                                        <li>Basil</li>
                                    </ol>
                                </p>
                            </div>
                            <div>
                                <p>
                                    1.Preheat the oven to 200°C/fan180°C/gas 6. Tumble the onions, peppers, courgette, garlic and medium tomatoes into a shallow roasting tray. Pour over 3 tbsp olive oil, season with sea salt and ground black pepper, then gently toss to coat. Roast for 20 minutes.<br/>
                                    2.Add the vine tomatoes to the tray and lay the salmon fillets on top. Season, then drizzle with a little more oil and a squeeze of lemon juice. Return to the oven for 10-12 minutes until the salmon is just cooked through and the vegetables are tender. Scatter with fresh basil leaves to serve.
                                </p>
                                <ul className="link"><li><b><Link to='order'>Order this dish</Link></b></li></ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
    </div>
)

const Meat = () => (
    <div className="PageProducts">
        <div id="box">
        <section id="single-product">
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <div className="single-product-img">
                            <img src={meatloaf}/>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="block">
                            <div className="product-des">
                                <h1>Meatloaf</h1>
                                <p className="price">$20</p>
                                <p>
                                    <b>Ingredients:</b>
                                    <ol>
                                        <li>Bacon lardons</li>
                                        <li>White breadcrumbs</li>
                                        <li>Free-range egg</li>
                                        <li>Milk</li>
                                        <li>Dijon mustard</li>
                                        <li>Dried thyme</li>
                                        <li>Basil</li>
                                        <li>Ground nutmeg</li>
                                        <li>Onion</li>
                                        <li>Celery</li>
                                        <li>Parsley</li>
                                        <li>Finely</li>
                                        <li>Minced beef</li>
                                        <li>Minced pork</li>
                                    </ol>
                                </p>
                            </div>
                            <div>
                                <p>
                                    1.Cook the lardons in a dry frying pan over a medium heat until well browned and crispy. Remove from the pan with a slotted spoon, drain on kitchen paper and set aside. Put the breadcrumbs in a large bowl. Beat the egg and milk together in a jug, then pour over the breadcrumbs. Leave to stand for 10 minutes.<br/>
                                    2.Stir in the mustard, dried herbs, nutmeg, onion, celery, parsley and cooked lardons. Add the minced meats, season and mix well. Pack the mixture into a 2kg loaf tin. Cover the whole tin with foil and chill for at least 4 hours or overnight to firm up.<br/>
                                    3.Preheat the oven to 180°C/fan160°C/gas 4. Take the loaf tin out of the fridge, uncover and press down firmly. Re-cover and cook in the oven for 45-50 minutes.<br/>
                                    4.Meanwhile, make the sauce. Fry the onions, stirring, for about 5 minutes or until soft and golden. Sprinkle over the sugar and cook for 5 minutes, stirring constantly. Add the garlic and tomato purée and cook for a further 5 minutes. Add the stock and ale, bring to the boil and bubble for about 6-7 minutes to reduce by a third. Finally, mix in the cornflour paste and simmer for 1 minute, stirring until thickened. Season to taste, then set aside and keep warm.<br/>
                                    5.Take the meatloaf out of the oven and leave to stand for 10 minutes before turning out of the tin and slicing. Serve with a good dollop of mash and some steamed greens, and the sauce poured over the top.
                                </p>
                                <ul className="link"><li><b><Link to='order'>Order this dish</Link></b></li></ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>

        <div id="box">
        <section id="single-product">
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <div className="single-product-img">
                            <img src={steak}/>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="block">
                            <div className="product-des">
                                <h1>Steak</h1>
                                <p className="price">$20</p>
                                <p>
                                    <b>Ingredients:</b>
                                    <ol>
                                        <li>Bag jersey royals</li>
                                        <li>Olive oil</li>
                                        <li>Oregano</li>
                                        <li>British free-range rump steak</li>
                                        <li>Garlic clove</li>
                                        <li>Red wine vinegar</li>
                                        <li>Beef tomatoes</li>
                                        <li>Rocket</li>
                                        <li>Parmesan</li>
                                    </ol>
                                </p>
                            </div>
                            <div>
                                <p>
                                    1.Put the potatoes in a large pan of cold water, bring to the boil and cook on a medium heat for 15-20 minutes until tender. Drain well, then lightly crush with a fork. Toss with 1 tbsp of the oil and 1 tbsp of the chopped oregano and season with salt and pepper.<br/>
                                    2.Heat a non-stick frying pan. Brush the steaks with oil and season well. Sear for 3-4 minutes each side (or until cooked to your liking), then set aside on a plate to rest. When rested, slice across the grain into 2cm thick strips.<br/>
                                    3.Warm the remaining oil and the garlic in the frying pan for 2-3 minutes, then add the vinegar and season with salt and pepper to make a warm dressing. After a minute, stir in the remaining oregano.<br/>
                                    4.Arrange the sliced tomatoes on 4 plates. Top with the rocket, sliced steak, dressing and parmesan shavings. Serve with the potatoes.
                                </p>
                                <ul className="link"><li><b><Link to='order'>Order this dish</Link></b></li></ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
    </div>
)

const Dessert = () => (
    <div className="PageProducts">
        <div id="box">

        <section id="single-product">
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <div className="single-product-img">
                            <img src={cheesecake}/>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="block">
                            <div className="product-des">
                                <h1>Cheesecake</h1>
                                <p className="price">$10</p>
                                <p>
                                    <b>Ingredients:</b>
                                    <ol>
                                        <li>Graham cracker crumbs</li>
                                        <li>Confectioners' sugar</li>
                                        <li>Butter</li>
                                        <li>Salt</li>
                                        <li>Cream cheese</li>
                                        <li>Eggs</li>
                                        <li>Raspberries</li>
                                        <li>Ground cinnamon</li>
                                    </ol>
                                </p>
                            </div>
                            <div>
                                <p>
                                    1.Select a pie pan whose inside top dimension is at least 9", and whose height is at least 1 1/4". Preheat the oven to 350°F.<br/>
                                    2.Make the crust by stirring together all of the crust ingredients, mixing until thoroughly combined.<br/>
                                    3.Press the crumbs into the bottom and up the sides of the pie pan, making a thicker layer on the bottom than on the sides.<br/>
                                    4.Make the filling by mixing together the room-temperature cream cheese and sugar until smooth. Mix in the eggs and vanilla, again mixing until smooth. To avoid beating too much air into the batter, use a mixer set at low-medium speed. To avoid lumps, make sure the cream cheese is softened, and/or at room temperature.<br/>
                                    5.Set the pie pan onto a baking sheet, if desired; this makes it easier to transport in and out of the oven, and also protects the bottom of the crust from any potential scorching. Pour the filling into the crust.<br/>
                                    6.Place the cheesecake in the oven. Bake it for 20 minutes, then add a crust shield; or shield the crust with strips of aluminum foil. Bake for an additional 10 minutes (for a total of about 30 minutes). An instant-read thermometer inserted into the crust 1" from the edge should read between 165°F and 170°F; the filling won't look entirely set in the center.<br/>
                                    7.Remove the cheesecake from the oven, and set it on a rack to cool while you make the topping. Once the cake is cool, refrigerate it, covered, until you're ready to serve it.<br/>
                                    8.To make the topping, place the frozen raspberries in a bowl to thaw. You can hasten the process with a quick trip through the microwave, but don't let the berries cook.<br/>
                                    9.Add 1 tablespoon Pie Filling Enhancer, and stir until well combined. Is the topping as thick as you like? If not, stir in another tablespoon Pie Filling Enhancer.<br/>
                                    10.Add 1 to 2 tablespoons granulated sugar, to taste. Stir in a pinch of ground cinnamon, if desired.<br/>
                                    11.Spoon the topping over the cheesecake, and cut slices to serve. Alternatively, cut slices, and top each with a dollop of topping.
                                </p>
                                <ul className="link"><li><b><Link to='order'>Order this dish</Link></b></li></ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>

        <div id="box">
        <section id="single-product">
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <div className="single-product-img">
                            <img src={cookies}/>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="block">
                            <div className="product-des">
                                <h1>Cookies</h1>
                                <p className="price">$10</p>
                                <p>
                                    <b>Ingredients:</b>
                                    <ol>
                                        <li>Granulated sugar</li>
                                        <li>Brown sugar</li>
                                        <li>Butter</li>
                                        <li>Vanilla</li>
                                        <li>Egg</li>
                                        <li>Flour</li>
                                        <li>Baking soda</li>
                                        <li>Salt</li>
                                        <li>Coarsely chopped nuts</li>
                                        <li>Chocolate chips</li>

                                    </ol>
                                </p>
                            </div>
                            <div>
                                <p>
                                    1.Heat oven to 375ºF.<br/>
                                    2.Mix sugars, butter, vanilla and egg in large bowl. Stir in flour, baking soda and salt (dough will be stiff). Stir in nuts and chocolate chips.<br/>
                                    3.Drop dough by rounded tablespoonfuls about 2 inches apart onto ungreased cookie sheet.<br/>
                                    4.Bake 8 to 10 minutes or until light brown (centers will be soft). Cool slightly; remove from cookie sheet. Cool on wire rack.
                                </p>
                                <ul className="link"><li><b><Link to='order'>Order this dish</Link></b></li></ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
    </div>
)

const Order = () => (
    <div className="PageOrder">
        <section id="topic-header">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h1>Order</h1>
                    </div>
                </div>
            </div>
        </section>

        <div id="box">
        <section id="blog">
            <div className="container">
                <div className="row">
                    <div className="col-md-9 clearfix">
                        <div className="leave-comment">
                            <form className="form-horizontal" role="form">
                                <div className="form-group">
                                    <label className="col-sm-2 control-label">Number of servings</label>
                                    <div className="col-sm-10">
                                        <input type="text" className="form-control" id="inputnumber" placeholder="Number of servings"/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-sm-2 control-label">Contact Name</label>
                                    <div className="col-sm-10">
                                        <input type="text" className="form-control" id="inputname" placeholder="Contact Name"/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-sm-2 control-label">Region</label>
                                    <div className="col-sm-10">
                                        <input type="region" className="form-control" id="inputRegion" placeholder="State/Province/Region"/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-sm-2 control-label">City</label>
                                    <div className="col-sm-10">
                                        <input type="text" className="form-control" id="inputCity" placeholder="City"/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-sm-2 control-label">Address</label>
                                    <div className="col-sm-10">
                                        <input type="text" className="form-control" id="inputAddress" placeholder="Street Address"/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-sm-2 control-label">Mobile</label>
                                    <div className="col-sm-10">
                                        <input type="text" className="form-control" id="inputMobile" placeholder="Mobile"/>
                                    </div>
                                </div>

                                <div>
                                    <ul className="link"><li><b><Link to='thanks'>Order this dish</Link></b></li></ul>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
    </div>
)

const Thanks = () => (
    <div className="PageOrder">
        <section id="topic-header">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h1>Thanks for your order!</h1>
                    </div>
                </div>
            </div>
        </section>
    </div>
)

class Navigation extends React.Component {
    render() {
        return (
            <BrowserRouter history={{history}}>
                <div>
                    <ul className="list">
                        <li><b><Link to="/pizza">Pizza</Link></b></li>
                        <li><b><Link to="/salad">Salad</Link></b></li>
                        <li><b><Link to="/fish">Fish</Link></b></li>
                        <li><b><Link to="/meat">Meat</Link></b></li>
                        <li><b><Link to="/dessert">Dessert</Link></b></li>
                    </ul>

                    <hr/>

                    <Route exact path="/pizza" component={Pizza}/>
                    <Route exact path="/salad" component={Salad}/>
                    <Route exact path="/fish" component={Fish}/>
                    <Route exact path="/meat" component={Meat}/>
                    <Route exact path="/dessert" component={Dessert}/>
                    <Route exact path="/order" component={Order}/>
                    <Route exact path="/thanks" component={Thanks}/>

                </div>
            </BrowserRouter>
        )
    }
}
export default Navigation;

