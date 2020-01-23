![mainlogo](https://user-images.githubusercontent.com/45651369/73010420-fb1e8100-3e44-11ea-802f-4e63d2582de3.png)

![Language](https://img.shields.io/badge/Language-JS-blue.svg)

![PageDesigner](https://img.shields.io/badge/PageDesigner-^18.0.0-blue.svg)
![Bootstrap](https://img.shields.io/badge/Bootstrap-^4.0.0-blue.svg)
![Angular](https://img.shields.io/badge/Angular-^1.5.8-blue.svg)

Pagination using Javascript, Angular, HTML for **Page Designer**. 

Function allow developers to add pagination to data.
They are designed to be simple to use, create and compose. The next version of **PA-Pagination** will also feature enhanced capabilities and improved.

## Features

- Set record per page.
- Set starter page.
- Prev and Next button .
- Page numbers button.
- Can be used with DATA that has nested objects

## Supported Platforms

- Browser
- Android
- iOS

## Requirements

- Bootstrap
- Angular


## Live Demo

[Demo](https://www.google.co.th)


## Quickstart

1. Clone or download [zip](https://github.com/N04A/pa-pagination/archive/master.zip) the project.
```
git clone https://github.com/name/name.git
```

2. Run the project with **Apache**

## Usage

Attribute		      | Type	        | Description
---				      | ---			    | ---
`loadPage()`		  | *Function*	    | Load data, call function loadParam(param).
`param`		          | *Object*		| Data to display.
`record_per_page`	  | *Number*	    | Set number of records per page.
`current_page`	      | *Number*	    | Set starter page, call function changePage(number, default)


## Example : Call Function

**1) In case the DATA is one object.**
```js
funtion paginationPAGE_NAME(){
    loadPage(window.myScope.Store["STORE_NAME"].OBJECT_NAME)
}
```

**2) In case the DATA is an object in object.**
```js
funtion paginationPAGE_NAME(){
    loadPage(window.myScope.Store["STORE_NAME"].OBJECT_NAME.OBJECT_NAME)
}
```

## Work with MicroFlow

Connect MicroFlow(List Data) to **Component**

After Call **MicroFlow** , call function **loadPage(PARAM)**

## Example : Button Previous and Next 

```html
<ul class="pagination justify-content-center">
    <li id="pagination" class="page-item" onclick="prevPage()">
        <a class="page-link" aria-disabled="true" href="#" tabindex="-1">Previous</a>
    </li>
    <li class="page-item indicator" pg-is-list="true" pg-store="Store['allButton']">
        <a class="page-link" onclick="changePage(this)" href="#">{{$index+1}}</a></li>
    <li class="page-item">
        <a onclick="nextPage()" href="#" class="page-link">Next</a>
    </li>
</ul>
```

## History

Check [Releases]() for detailed changelog.


