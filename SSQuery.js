var app = (function () {
    var astatKey = "1dlNVXI0mnQLAqXRZOyend8RhRtKU087G82PsRl64DlI",
        mauKey = "1fQ1FBBQemaYknfBWpJj_fay6G4DBo4FtJI1FLeP6-Ok",
        baseURL = "https://docs.google.com/spreadsheets/d/",
        textTarget = document.getElementById("textTarget"),
        pLinks = document.getElementById("pLinks"),
        divCounter = 0,
        query, textQuery, textCols, textTarget, href1, href2;
    //creates link to table with query results
    var goingPlaces = function (baseURL, astatKey, queryText){
          //query pulls results from col a where col b contains...
          acctSearchQuery = "SELECT A WHERE B CONTAINS ";
          acctSearchQuery2 = "SELECT A, B WHERE B CONTAINS ";
          //to eval D:  "SELECT A, B WHERE D CONTAINS ";
          //adds quote to search term
          queryPostConcat = encodeURIComponent(acctSearchQuery) + "%27" + queryText + "%27";
          queryPostConcat2 = encodeURIComponent(acctSearchQuery2) + "%27" + queryText + "%27";
          //gid is google id for page 4, full account list
          href1 = baseURL + astatKey + "/gviz/tq?tqx=out:html&tq=" + queryPostConcat + "&gid=1539278930";
          href2 = baseURL + astatKey + "/gviz/tq?tqx=out:html&tq=" + queryPostConcat2 + "&gid=1539278930";
          console.log(href1);
          console.log(href2);
          divCounter ++;
          divPlaceHolder = 'div_'+divCounter;
          //creates div to append link to a new line
          divPlaceHolder = document.createElement("div");
          pLinks.appendChild(divPlaceHolder);
          accountLink = document.createElement("a");
          accountLink2 = document.createElement("a");
          accountLink.href = href1;
          accountLink2.href = href2;
          accountLink.innerText = "Account list for search term "+queryText;
          accountLink2.innerText = "(w/ col B)"+queryText;
          divPlaceHolder.appendChild(accountLink);
          accountLink.appendChild(accountLink2);
   };
    //event on enter key press on input field
    textTarget.onkeyup = function (event){
        var queryText = textTarget.value.toUpperCase();
        //if not undefined or one space, proceeds on enter key
        if (undefined === queryText || queryText === "" || queryText === " ") {
            return false;
            };
            if (event.which === 13) {
                goingPlaces(baseURL, astatKey, queryText);
            };
        };
} ());
