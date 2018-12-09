# PrivateRoute

## About
By default, React Router doesn't provide a protected routing. Hence a use cases for a protected path wrapper was important.
However, developers tend to implement authintication in different ways. Hence a customization to the wrapper is needed.


## How to use
`<ProtectedPath condition={this.condition} path='/posts/:post_Id' component={Post} />`

You pass a callback condition to the path that resolves to boolean.
Usually you pass a callback or anonymous function that checks if the
user is logged in. If it resolves to true then user can proceed.
