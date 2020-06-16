# Creating/updating an element in the database 

## Creating an element

Every element in the JSON database is made of a key and a value.

You can create a new element in the database by using `Jsoning#set`.

```js
database.set("myname", "khalby786");
```

Here, `myname` is the key and `khalby786` is the value. An element is referred to using the key.

## Updating an element

You can update an element by providing a new value for an already existing key.

```js
database.set("value", "something"); // value = something

// updating the value
database.set("value", "something2"); // value = something2
```

Read more about `Jsoning#set` at [https://khalby786.github.io/jsoning/#set](https://khalby786.github.io/jsoning/#set).
