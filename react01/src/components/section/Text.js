import React from "react";

function Text({ attr }) {
  return (
    <section
      id="textType"
      className={`text__wrap scroll ${attr[0]} ${attr[1]}`}
    >
      <span>My Tip</span>
      <h2 className="mb70">๐๋๋ง์ ๋ค์ด์ด๋ฆฌ ๊พธ๋ฏธ๊ธฐ ํ!๐</h2>
      <div className={`text__inner ${attr[2]}`}>
        <div className="text t1">
          <h3 className="text__title">Only Text</h3>
          <p className="text__desc">
            ๋ฌธ์๋ง์ ๋งค๋ ฅ์ด ์์ง์. ์ด๋ ํ ๊ธฐ๊ต๋, ์ฅ์๋ ์๋ ํ์คํธ๋ง์ ๋งค๋ ฅ์
            ๋ฏธ๋๋ฉ๋ฆฌ์ฆ์ ์๋ฆ๋ค์์ ์ฐ์ํฉ๋๋ค.
          </p>
          <a href="/" className="text__btn">
            ๋๋ณด๊ธฐ
          </a>
        </div>
        <div className="text t2">
          <h3 className="text__title">Handwriting</h3>
          <p className="text__desc">
            ๊ธ์๋ง์ผ๋ก  ๋๋ฌด ๋ฐ๋ฐํ์ ๊ฐ์? ๊ทธ๋ ๋ค๋ฉด ๊ธ์จ์ ์์ ์ ์ธ ๊ฐ๊ฐ์
            ๋ํด๋ณด๋ฉด ์ด๋จ๊น์? ํฌ์ธํธ๊ฐ ๋  ๊ฑฐ์์!
          </p>
          <a href="/" className="text__btn">
            ๋๋ณด๊ธฐ
          </a>
        </div>
        <div className="text t3">
          <h3 className="text__title">Color</h3>
          <p className="text__desc">
            ๋ฌด์ฑ์์ ๋ค์ด์ด๋ฆฌ๋ ๋ฉ์ง์ง๋ง ๋น์ ์ ๊ธฐ์ต์ ์์ ์น ํด๋ณด๋๊ฑด ์ด๋ ์ธ์?
            ๋น์ ์ ๊ฐ์ ์ ์๊น๋ก ํํํด๋ณด์ธ์!
          </p>
          <a href="/" className="text__btn">
            ๋๋ณด๊ธฐ
          </a>
        </div>
        <div className="text t4">
          <h3 className="text__title">Hand Drawing</h3>
          <p className="text__desc">
            ๊ธ๋ง์ผ๋ก๋ ํํํ๊ธฐ ์ด๋ ค์ธ ๋, ๊ทธ๋ฆผ์ ๋ํด๋ณด์ธ์! ๋น์ ๋ ์ ๋
            ๋ฌด์์ธ์ง ์ดํดํ๊ธฐ ์ฌ์์! ๋ฌผ๋ก , ์ดํดํ๊ธฐ ์ด๋ ค์ด ๊ทธ๋ฆผ๋ ๋งค๋ ฅ์ ์ด์ฃ !
          </p>
          <a href="/" className="text__btn">
            ๋๋ณด๊ธฐ
          </a>
        </div>
        <div className="text t5">
          <h3 className="text__title">Sticker</h3>
          <p className="text__desc">
            ๊ทธ๋ฆผ์ ์์ ์ด ์๋ค๋ฉด ์ด๋ฏธ ๋ง๋ค์ด์ง ๊ทธ๋ฆผ์ ํ์ฉํด๋ด์. ๊ทธ๋์, ๋ฐ๋ก
            ์คํฐ์ปค๋ฅผ ์ด์ฉํด๋ณด์ธ์!
          </p>
          <a href="/" className="text__btn">
            ๋๋ณด๊ธฐ
          </a>
        </div>
        <div className="text t6">
          <h3 className="text__title">Just WRITING!</h3>
          <p className="text__desc">
            ์์ ํ์ ๋ชจ๋ ์์ด๋ฒ๋ฆฌ์ธ์! ์์ ๋ค์ด ๋ค์ด์ด๋ฆฌ๋ฅผ ์ํ์๋์? ๊ทธ๋ผ
            ๊ฒ๋จน์ง ๋ง๊ณ  ์ผ๋จ "์ฐ์ธ์!"
          </p>
          <a href="/" className="text__btn">
            ๋๋ณด๊ธฐ
          </a>
        </div>
      </div>
    </section>
  );
}

export default Text;
