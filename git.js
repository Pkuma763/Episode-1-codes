/*<div id="parent">
    <div id="child">

        <h1> I am a h1 Tag
        </h1>

    </div>
</div>*/
/*const parent = React.createElement("div", {id:"parent"},
React.createElement("div",{id :"child"}, 
React.createElement("h1",{}, "I am an h1 tag")));

const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(parent);

console.log(parent); */




/* Lets try to code when we want a sibling of h1 tag which is h2
<div id="parent">
    <div id="child">

        <h1> I am a h1 tag</h1>
        <h2> I am a h2 tag </h2

    </div>
</div>*/


/*const parent = React.createElement("div", {id:"parent"},
React.createElement("div",{id :"child"}, 
[React.createElement("h1",{}, "I am an h1 tag"), React.createElement("h2", {}, "I am an h2 tag")]));

const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(parent);

console.log(parent);*/


/* Lets try to code when we want the below structure
<div id="parent">
    <div id="child1">

        <h1> I am a h1 tag</h1>
        <h2> I am a h2 tag </h2

    </div>
    <div id="child2">

       <h1> I am h1 tag</h1>
       <h2> I am h2 tag></h2>

   </div>


</div>*/

const parent = React.createElement("div", {id:"parent"},[
 React.createElement("div",{id :"child1"}, [
 React.createElement("h1",{}, "I am an h1 tag"),
 React.createElement("h2", {}, "I am an h2 tag"),
 ]),
React.createElement("div",{id:"child2"},[
React.createElement("h1", {},"I am an h1 tag"),
React.createElement("h2", {}, "I am an h2 tag"),
 ]),

]);

const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(parent);

console.log(parent);


