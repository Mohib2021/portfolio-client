import React from "react";
import { Container } from "react-bootstrap";

function Blogs() {
	return (
		<div className="my-5">
			<Container>
				<h3>CRUD operation explained</h3>
				<p>
					CRUD means create, read, update and delete. Those are the operations
					that we do for performing different types of actions with databases.
					For example, we have our front-end and we need to send, get, update,
					delete data that is directly connected to the back-end. At that time
					we need to use CRUD operation. Let's take a closer look:-
				</p>
				<p>
					<strong>Create:</strong> It is an operation that means creating a new
					database collection for the data that is posted. At the time of
					sending data to the defined collection, it will automatically create
					the collection to the database and store the data to the collection.
					The method that we use for creating database collection and posting
					data to that collection is <strong>POST</strong>. <br />
					<strong>Example:</strong>
				</p>
				<div>
					<img
						src="https://i.ibb.co/7gr4wcY/Screenshot-2021-12-23-224058.png"
						alt="code-img"
						className="img-fluid"
					/>
				</div>
				<p className="mt-3">
					<strong>Read:</strong> Read is an operation that means getting data
					from database collection. We can get all of the data from defined
					collection or we can get specific data by filtering with conditions.
					The main fundamental concept of reading is getting data from the
					collection. The method that we use for performing this action is{" "}
					<strong>GET</strong>. <br /> <strong>Example:</strong>
				</p>
				<div>
					<img
						src="https://i.ibb.co/VvKkGx6/Screenshot-2021-12-23-230454.png"
						alt="code-img"
						className="img-fluid"
					/>
				</div>
				<p className="mt-3">
					<strong>Update:</strong> It's an operation that simply means updating
					existing data or the database collection. This is an operation that is
					a little bit confusing but interesting. To perform this operation, we
					need to filter first which data of the collection we want to update.
					At first, we need to pass the updating data from our front-end then
					from the back-end we need to parse the data and also need to filter
					the exact data that we want to update. Then we have to add new data to
					that existing data. One interesting thing about it is if we have the
					new data in our database collection, we can have logic that will deny
					adding the same data again and again. The method that we follow to do
					this kind of action is <strong>PUT</strong>. <br />{" "}
					<strong>Example:</strong>
				</p>
				<div>
					<img
						src="https://i.ibb.co/BqMNvYc/Screenshot-2021-12-23-231220.png"
						alt="code-img"
						className="img-fluid"
					/>
				</div>
				<p className="mt-3">
					<strong>Delete:</strong> The keyword delete shows us that the action
					that it performs is about the delete action. So, how the delete action
					works is simple. We pass the specific ID of the deleting item from the
					font-end and we get the ID from the back-end. Then we filter the
					specific product from our collection and delete the product. The
					method we use for deleting is <strong>delete.</strong> <br />
					<strong>Example:</strong>
				</p>
				<div>
					<img
						src="https://i.ibb.co/qgD91bR/Screenshot-2021-12-23-231731.png"
						alt="code-img"
						className="img-fluid"
					/>
				</div>
			</Container>
		</div>
	);
}

export default Blogs;
