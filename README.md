# React Gallery App

A project that demonstrates our ability to create single-page web applications (SPA) using the popular [React](https://reactjs.org/) framework.

This application submits the specified search term to Flickr, and displays the first 24 matching images returned by that service. If no images are returned, then a message indicating this is displayed.

## Basic Structure

This app contains the following components:

* _SearchForm_ - an input field for entering a custom search term
* _Nav_ - links to pre-defined search terms ("categories")
* _Gallery_ - the container that displays the matching images (by means of one or more _GalleryItem_ components)
* _PageNotFound_ - rendered when the path entered into the address bar is not recognized/not valid

## Configuration

In order to run this application, you must create a file named `config.json` in the `src` folder. This file must export a single `String` value that is [a valid Flickr API key](https://www.flickr.com/services/api/keys/).

For example:

```js
const key = 'YOUR_API_KEY'
export default key
```

## Launching

Open a command prompt in the same directory as `package.json` and enter `npm start`. This will transpile the code, start a local web server, and launch the SPA in your default web browser.
