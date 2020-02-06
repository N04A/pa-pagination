/* Start Pagination */
var objData;
var records_per_page = 10;
var current_page = 1;
var allPage = [];
var activeIndex;
var lastActiveIndex;
var store;

function loadPage(tempStore, currentPage, recordPerPage) {
    allPage = [];
    if (currentPage == '' || !currentPage || typeof currentPage != 'number') {
        currentPage = current_page;
    }
    if (recordPerPage == '' || !recordPerPage || typeof recordPerPage != 'number') {
        recordPerPage = records_per_page;
    } else {
        records_per_page = recordPerPage;
    }
    store = tempStore;
    objData = JSON.stringify(store);
    objData = JSON.parse(objData);
    outputBO = Object.keys(store)[0];
    //Count Page
    allPage = numPage;
    //Start Page is : 1
    changePage(currentPage, store, recordPerPage);
    //Generate pagination
    allButtonPagin();
}


function allButtonPagin() {
    window.myScope.Store['allButton'] = [];
    if (allPage == 0) {
        allPage = 1;
    }
    for (let i = 0; i < allPage; i++) {
        window.myScope.Store['allButton'].push(i);
    }
}

function changePage(page, fakeStore, recordPerPage) {
    fakeStore = store;
    store = fakeStore;
    recordPerPage = records_per_page;
    if (parseInt(event.target.innerHTML)) {
        page = parseInt(event.target.innerHTML);
        lastActiveIndex = activeIndex;
        activeIndex = page;
    }
    //First ActiveIndex
    activeIndex = page;
    //Current Page for prev and next button
    current_page = page;

    var tempData = []
    for (var i = (page - 1) * recordPerPage; i < (page * recordPerPage) && i < objData[outputBO].length; i++) {
        tempData.push(objData[outputBO][i]);
    }
    store[outputBO] = tempData;
    setTimeout(() => {
        window.myScope.$apply();
    }, 50);

    setTimeout(() => {
        //indicator class for active button
        document.querySelectorAll('.indicator')[activeIndex - 1].classList.add('active');
        if (activeIndex != lastActiveIndex) {
            try {
                document.querySelectorAll('.indicator')[lastActiveIndex - 1].classList.remove('active');
            } catch (e) {
                console.log(e);
            }
        }
    }, 50);


}

function numPage(recordPerPage) {
    let page = (objData[outputBO].length / records_per_page);
    for (let i = 0; i < page; i++) {
        allPage.push(i);
    }
    return allPage.length;
}

function Page() {
    return Math.ceil(objData[outputBO].length / records_per_page);
}

function prevPage() {
    if (current_page > 1) {
        current_page--;
        lastActiveIndex = activeIndex;
        changePage(current_page, store);
    }
}

function nextPage() {
    if (current_page < allPage) {
        current_page++;
        lastActiveIndex = activeIndex;
        changePage(current_page, store);
    }
}
/* End Pagination */
