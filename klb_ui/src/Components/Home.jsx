import React from "react";
import axios from "axios";
import Post from "./Post.jsx";
import Group from "./Group.jsx";
import styled from "styled-components";

const Content = styled.div`
   background-color: #F9F9F9;
	padding: 50px;
`;

console.log("home");

class Home extends React.Component {
   constructor() {
      super();
      this.state = { post: "" };
   }

   componentDidMount() {
      axios.get(`http://localhost:8001/api/posts`).then(res => {
         const post = res.data;
         this.setState({ post: post });
      });
   }

   render() {
      return (
         <Content>
            <h1>Home</h1>
         </Content>
      );
   }
}

export default Home;