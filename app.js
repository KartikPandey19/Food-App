//const header = React.createElement("h1", { id: "heading" }, "hello");



const multi = React.createElement("div", { id: "parent" }, 
[React.createElement("div", { id: "child" }, 
[React.createElement("h1", { id: "heading"}, "hello i am from react"),React.createElement("h2", { id: "heading2"}, "hello i am from react h2")]),
React.createElement("div", { id: "child2" }, 
[React.createElement("h1", { id: "heading3"}, "hello i am from react child2"),React.createElement("h2", { id: "heading4"}, "hello i am from react h2 child2")])
]
)

const id = ReactDOM.createRoot(document.getElementById("root"));

id.render(multi);