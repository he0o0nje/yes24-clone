// main2
// main2 가운데
$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: { query: "미래의 책" },
  headers: { Authorization: "KakaoAK 34c497c35774425c1c37314d61072948" },
}).done(function (data) {
  $(".todayBUnit").each(function (i) {
    const bookData = data.documents[i];
    let imageUrl = bookData.thumbnail;
    let temp_html = `${bookData.authors} 저
                    <em class="divi">|</em>
                    ${bookData.publisher}`;

    $(".tBThumb img").eq(i).attr("src", imageUrl);
    $(".tB_img img").eq(i).attr("src", imageUrl);
    $(".tB_readTit a").eq(i).text(bookData.title);
    $(".tB_readCon a").eq(i).text(bookData.contents);
    $(".tB_name a").eq(i).text(bookData.title);
    $(".tB_pub").eq(i).append(temp_html);
    $(".yes_b").eq(i).text(bookData.sale_price);
  });
});

//main2 오른쪽
$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: { query: "제이쿼리" },
  headers: { Authorization: "KakaoAK 34c497c35774425c1c37314d61072948" },
}).done(function (data) {
  $(".tp02").each(function (i) {
    const bestData = data.documents[i];
    let imageUrl = bestData.thumbnail;

    $(".rnk_img img").eq(i).attr("src", imageUrl);
    $(".rnk_info strong").eq(i).text(bestData.title);
    $(".rnk_info em")
      .eq(i)
      .text(bestData.authors + " 저");
  });
});

//main3
$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: { query: "리액트" },
  headers: { Authorization: "KakaoAK 34c497c35774425c1c37314d61072948" },
}).done(function (data) {
  $(".nowBookLi").each(function (i, element) {
    const NBData = data.documents[i];
    if (NBData) {
      let imageUrl = NBData.thumbnail;
      let temp_html = `<span class="goods_auth">${NBData.authors} 저</span>
                      <em class="divi">|</em>
                      <span class="goods_pub">${NBData.publisher}</span>`;

      $(element).find(".imgbox a img").attr("src", imageUrl);
      $(element).find(".goods_info .goods_name a").text(NBData.title);
      $(element).find(".goods_info .goods_pubGrp").append(temp_html);
      $(element).find(".goods_info .yes_b").text(NBData.price);
    }
  });
});

/// main5
$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: { query: "플러터" },
  headers: { Authorization: "KakaoAK 34c497c35774425c1c37314d61072948" },
}).done(function (data) {
  $(".bookClubLi").each(function (i, element) {
    const BCData = data.documents[i];
    if (BCData) {
      let imageUrl = BCData.thumbnail;
      let temp_html = `<span class="goods_auth">${BCData.authors} 저</span>
                      <em class="divi">|</em>
                      <span class="goods_pub">${BCData.publisher}</span>`;

      $(element).find(".imgbox a img").attr("src", imageUrl);
      $(element).find(".goods_info .goods_name a").text(BCData.title);
      $(element).find(".goods_info .goods_pubGrp").append(temp_html);
      $(element).find(".goods_info .yes_b").text(BCData.price);
    }
  });
});

// main6
$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: { query: "웹개발" },
  headers: { Authorization: "KakaoAK 34c497c35774425c1c37314d61072948" },
}).done(function (data) {
  $(".bookLi").each(function (i) {
    const MultiData = data.documents[i];
    let imageUrl = MultiData.thumbnail;
    $(".bookBigCon .book_img a img").eq(i).attr("src", imageUrl);
    $(".bookBigCon .book_info .book_name a").eq(i).text(MultiData.title);
    $(".bookBigCon .book_info .book_pubGrp .goods_auth")
      .eq(i)
      .text(MultiData.authors);
    $(".bookBigCon .book_info .yes_b").eq(i).text(MultiData.price);
  });
});
