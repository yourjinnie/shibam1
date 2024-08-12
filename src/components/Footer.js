import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <section className="footer">
        <div className="gray" />
        <div className="footerWrapper">
          <div className="footerTable">
            <div className="footerLeft">
              <div className="footerLogoBar">
                <div className="footerLogo">
                  <img
                    src="/assets/Sixdlogo-bf5233dd.png"
                    className="footerLogoImg"
                  />
                </div>
                <div className="footerLogobarTitle font-face-futur-BK">
                  <img src="/assets/footer-d8a371a5.png" />
                </div>
              </div>
              <div className="footerNav">
                <div className="footerNavSections">
                  <div className="footerNavSection font-face-futur-LT">
                    <b className="footerListTitle">Case Studies</b> <br />
                    <ul className="footerUl font-face-futur-LT">
                      <Link to="/inner/2">
                        {" "}
                        <li className="footerLi">NTPC</li>{" "}
                      </Link>
                      <Link to="/inner/1">
                        {" "}
                        <li className="footerLi">NMDC</li>{" "}
                      </Link>
                      <Link to="/inner/3">
                        {" "}
                        <li className="footerLi">Reliance</li>{" "}
                      </Link>
                      <Link to="/inner/9">
                        {" "}
                        <li className="footerLi">Tata</li>{" "}
                      </Link>
                      <Link to="/inner/15">
                        {" "}
                        <li className="footerLi">Wipro</li>
                      </Link>
                      <Link to="/inner/10">
                        {" "}
                        <li className="footerLi">Voith</li>
                      </Link>
                      <Link to="/inner/16">
                        {" "}
                        <li className="footerLi">Dalmia</li>
                      </Link>
                      <Link to="/inner/11">
                        {" "}
                        <li className="footerLi">IOCL</li>
                      </Link>
                      <Link to="/inner/4">
                        {" "}
                        <li className="footerLi">Green Energy</li>
                      </Link>
                      <Link to="/inner/5">
                        {" "}
                        <li className="footerLi">Brownfield Facilities</li>
                      </Link>
                    </ul>
                  </div>
                  <div className="footerNavSection font-face-futur-LT">
                    <b className="footerListTitle">Sectors</b> <br />
                    <ul className="footerUl font-face-futur-LT">
                      <Link to="/sectors/oil-gas">
                        {" "}
                        <li className="footerLi">Oil &amp; Gas</li>
                      </Link>
                      <Link to="/sectors/steel">
                        {" "}
                        <li className="footerLi">Steel</li>
                      </Link>
                      <Link to="/sectors/power">
                        {" "}
                        <li className="footerLi">Power</li>
                      </Link>
                      <Link to="/sectors/green-energy">
                        <li className="footerLi">Green Energy</li>
                      </Link>
                      <Link to="/sectors">
                        {" "}
                        <li className="footerLi">Others</li>
                      </Link>
                    </ul>
                  </div>
                  <div className="footerNavSection font-face-futur-LT">
                    <b className="footerListTitle">Services</b> <br />
                    <ul className="footerUl font-face-futur-LT">
                      <Link to="/services/as-built">
                        <li className="footerLi">As-Built</li>
                      </Link>
                      <Link to="/services/dimension-control">
                        <li className="footerLi">Dimension Control Survey</li>
                      </Link>
                      <Link to="/services/owners-engineering">
                        <li className="footerLi">Owner’s Engineering</li>
                      </Link>
                      <Link to="/services/re-engineering-supply">
                        {" "}
                        <li className="footerLi">
                          Re-Engineering &amp; Supply
                        </li>
                      </Link>
                      <Link to="/services/digital-twins">
                        <li className="footerLi">Digital Profile Mapping</li>
                      </Link>
                    </ul>
                  </div>
                  <div
                    className="footerNavSection font-face-futur-LT"
                    style={{ marginLeft: 55 }}
                  >
                    <b className="footerListTitle">Career</b> <br />
                    <ul className="footerUl font-face-futur-LT">
                      <Link to="/career">
                        <li className="footerLi">Life at SixD</li>
                      </Link>
                      <Link to="/career-inner">
                        <li className="footerLi">Job Roles</li>
                      </Link>
                    </ul>
                  </div>
                  <div className="footerNavSection font-face-futur-LT">
                    <div className="footerListTitle">Industry 4.0</div> <br />
                    <Link className="fooList" to="/industry4">
                      {" "}
                      <li style={{cursor:"pointer"}} >AR VR</li>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="footerRight">
              <div className="footerRightNav">
                <div className="icons">
                  <Link to="https://www.linkedin.com/company/sixd-engineering-solutions-pvt-ltd/">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHGSURBVHgBtZU9SEJRFMeP0tJQWWMf8AYjigIXDVuSaKjNDGoKXZpagqDaoqaCICuac20o2woidArCIQmjhkAJHcOywfF0zvXdl+lNfU/7wfF+vOv/f8+9970LUANEdFCsUkQp0vgD12MUIQoNzKILH2DjnDZsRAN9FHk0T5rCVU88iM2R/9OEU8TWwCaayiAtR7zn3vAoGMC9wDRmn1NogZjUteviISoM1/voGbwm7iD3koKrk32wAO+jzzAgtsqfDnomoL2jU9SdVLeI0LRhaVMeKp8WvwqilEYW6W6jn6pd56W52C0lNe5fAI9/EY5D86I96PFCT+8APN5ei0n09A3A7Mqa6FPgYwMNFLPnPWCcbq8oZZvNZXaCBPc9wfr5jcpA4z1wgAlYfHJpGeY2to1Zs6mcQAUOzuADTDA2NQOBzR1R7x8eNZYuS1k43dUHwm7WoL2zy6iXr3ux8KkanmSDOPwfSbvNZkuCySwaFSftjHzRDqH1CM02vRGmCILiyErkce0bGlH28/tQRoZmH/k1EEv3QKvQQAWWrsdmCUEtmjDJ1xUvM+HL59KEeBwtXv4uighFUiHKfWHUv/stQc9MM/OfbymqCHRbejF7AAAAAElFTkSuQmCC" />
                  </Link>
                  <Link to="https://m.facebook.com/sixdengineering">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHaSURBVHgBtVXPSwJBFH4rHvSgLl0lWG8SRX+CSpeOSregXwdvHfQvkA5Rh0IPddZrh2g75UXQS1AdMiwwCBLEjrLUIZFwe2/dsV1d95f2wWPezLz5vp03b2Y5sIAsy3FskmgxNAGNR5PQ6mhPaCLHcVVwCiJGe5ftgeKSdol5tLzsDjk75I/ybCiaCbj98nHkGSenId/FpmiRQbgXL6BRKcP31+dobPOwAAvhxfHQBB2+VzOQsyIvn5+inYBNEF/VQ5769YJZdLfTdkJOoCqMsx1Yltjbw62uH9tKw8rauuIbpIchyQRWwSFi22kz4lGYR3UE+B8IXsyTMG2WKqXTfFb8TvNFN0f97kdb8cPRZfAHgkYUvFKmVLhGs5T3s50NsMLR3es0AWApksAl/IHQVHJEnQnUwCXC0SWz6TpLUQabvFEE1T+hUbmBq+O/u7hfuhxVkUk1pViZlmB48/jxCLbYHwxNjFuUaQufClFJETp0BgcwXyh87AxIpIBNFeaDEvKVdAIqUmgtmA30K82yjk5ATVUC3O9EhOEzLRkKqCJ0OCSyB/Z3Q4RZXJfSkhsKaIQojxFVqPbT7+sWyoMB9a/V+Yh6hpM84AAZgefB5+Oh15MKLcnW7f8FeMSBykdcHk4AAAAASUVORK5CYII=" />
                  </Link>
                  <Link to="https://twitter.com/SixDIndia">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAG7SURBVHgBpZW/S8NAFMcvo4MoToIIHURxc2kHp0L7B1gHRwk6irRuKoh1cVCHQp1ELQ6KU3HrmC4OnToILg4RLW4a26GOz3tpLp6Xu1x+fOCR63H5ft+917sQEgIA5GnUaHRpODDC8X43aKyQJHjCFkTDpmHGET+EZDRoTOrEG5COrtIkReYiFq9reOIZ+rBx/DPok6vtDfL18e4uGBufIJv1azI1MytN7G6/QuayyyRXWuOndwzDqPHZW3wKL51HOCpmYTjo/xuLNI8PoFU/le3C8UtFB0uyFe2bC7jdK/tjFONpnZ8F5gQqzKCmWlFfX3XFxTGKX26ZoMGSlodn2P+Gk1IRPntv/hizxqesZAIOM3gNWyX2o7w47RpGJKM1QPgeyPqR2qD3/ORmLutHFAMrbAWWA2uOJqwfbE5TKkf7LxoJFVxxJOr58Ggzg7xKHAWYuP8W1wM8ZCH9MJUnmYl3mvfSN1Xng8OG0fVDArvALWN9FVfAXwKFrJvEbm6exoLYj2rg0oKQXsTEJiog+ldMKQ58aRQmSXfS1YpzJqaXTRTwaq6SJHhGDxIzFG3TqIDuOxzTMBNX8Bd7MkILZAgYRgAAAABJRU5ErkJggg==" />
                  </Link>
                  <Link to="https://www.instagram.com/sixdindiaeng/">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJ0SURBVHgBpVVNaBNBFH4bvOTQNuQkroU9FLWEYD10QS+tJWBuxgoVAv7jyaoVe+hJ04M/UMWK8VIVthWhFTR60R4Ek4OK8dAgremhkFW73qxmC+Y4fW+yWSbbdHeTfvB22Nm33/f2mzezEriAMdaPQx8GjYoVhAKGjvFGkiQNmgUS92B8YP5QwhhphnyEtYYShuJFfoNtDyWniCRWjsN98aGxvASV9bJrUeFdnRCWO8UpHeMArs0/W8BSXcAI0f2a8QvSZ47z0Q/iF0cxrolTkyhwFYTqNfE7x2O97PnYZfbfLHt68uXVLBtT97Ds9JTzkVIjV8TZb+/fsivdO9mf1Z/uxJlZnrdaXGTv0hPs4alBZ0qK+HdAtcdtVNZN7qnoK83lZh7DytdPEGxrh76TF0DeG4HowBF+T7lrv184nTuNkQrgpQc8MDEYg3xmDuR9EU5I62Msf4fzac25wCLIGYW+YL8bef71HPoIMDz90iYLtnVA5s51UI8NgQdCAa8Mo7gEcnekrtJoLM7b10eXeQuE5d2wkv/M10EUbdD/DUECP9wS1MQJ7jutQ25mCuYf3avak/C0h1AggYJbRrC9g/vf1Xuw2kn5j5C8OQnx4VHwgE67mRZZA8cRUTFNbglVTiArkrcebMlUMct2roAsXQLWmZGtzUYH4kBtM5++C35AeyP37Am30oFxutTOItoLC7UnRnERnl46xzuFLHIDdZJ6dAiSt+u+UMPCz9oClkjdaUoWkd9klxvIvi71kDilYxxGAX1TsvPQawF/mY+fToq1hpInuSDSb73gt2oqKgTNAl9KsKpthQak2ZaJXQSVZgk3AH0K4nW3Jw4jAAAAAElFTkSuQmCC" />
                  </Link>
                  <Link to="https://in.pinterest.com/sixdindia/?invite_code=cb6b482edbb34b798e31a7dd27bdbcfd&sender=696087823564074263">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAZCAYAAAArK+5dAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKLSURBVHgBxVZBaBNBFJ0NvXiwxp7EUMghoMUKesiCvdiSHuIt9aDgQSt6koABPaiXWgQPVqGgvaho60FqQeNJc1CSHlLJeiioRaWBLtU9VpMU7HH8b7K7mU52m91S6INh/87Mf2/mz/87y9hugnM+SG2M2iK1v7wF2EVqOWpxFhZwsgmC4nlgIZp4QVltUKxQO9aJfMzP+1+jztesVb5slIW9BQZlTk0iz9Ajr4pWPy+wwtQDZn3/xjbWG25/7HA/O3n+MtMzZ1WXGrXjmqaZrgCRR+mxSC0uzwRxYeq+sI+m0iyRPCFs68cSM97OCRsC5+5OqiIlEhiSQ5NT91maecyv9h3g46kkX/u92hYH9GEMc94/mtg6VPYBteJdr/Hx4aazQ/7lwzteyc9uYliulMWcG/ohr3MpgrvLVoqrcf9j/RLb74n1UjhesZe3cmKs52AvS+gD9jkcEc+N9TqrGmUK4ymZBjUUjZDRllqIMZDQmzF34q1iT/c+15YTQBaJqKsXjnu7fd9jff0t0kbdtbEzD4gdRNVepCBg5Oc2OSOLZDGE0ktYQhwCNbUXMU4kBwRB1Vhg1s8lt1+GEzpVWIIJAdNrJDvzml16+EyQosjEio1P7jhq5OvHgrBHbt5hPjA1O4uKfjNw4BOnh8UKcZDOSp1DTV+5xtLZ637u+7uo4kokgjBFvWYg/QDsRM+cYfMvnoh3pC/SWA2bhHniboafBG5zHzzNjopiqryZ5SExCu6IrYaPiem1DBScs4MQMGn1066AvZWLXjNRpU5FBwS4hjxHuMdH795IyvNj5wNcVB0vnQyXbrQQ5CsdySUR3MnTPDgmefNOCQdbCM4l3v5Xgb7ctoh3Ev8Bqjs43HMg5uYAAAAASUVORK5CYII=" />
                  </Link>
                  <Link to="https://www.youtube.com/@sixdindia9181">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHJSURBVHgBrZU/SAJRHMd/SouDJY75hwscghaXhFy6hsDRaGiKzqElHIKaLdqDhpoclJoaokahSF0aXBJScghOiGtUy8Hx9fvpnV3HnfdO7wM/7vF79/t+n+9+zwcwAcZYAOMQ4x5DZn/QuIwhYQjgFFX4BKPL+ChwG+GLccNqeZGplkecd9VW7FmJCy6IM1UjbmYgM/d41XTnVHEJH4KWHPR/oHqdh87XJ/AQXAxDIr0DwVBES9FWSx6Pp+hRDcr4ELXZs80EdBQ+8bEJiucea/pUBQ02vGzUXqKWVVpNx+IE1VCtDpG0vTj490EG/W9TgdhqErciApNQWg1jSiQDwbgSU4PEGuSeapA6OAKffx44Gf6CADgglT2GbPGO24S6qAcOqD3cQunqfNhpUxlYrUx5b8KltA0ftRewwqS2RwYVfSYYipoWvz2XwA6ff8GYqnixV9t6k9Dyim23mEE1sURSn2qjdl07aBI+CtoMdVL1Jo/b0rAVpm0JhqOwvruvP8lEZnySVRMZDC07A7T6JRp4dcktcI+MaZaNrsBZOYVJ4AtpNt1fd1f9lvaw0eVTdCBeYVNe/mR0gVE3EW2rcyK4hWooOKn5Bf+ayuUs2UszAAAAAElFTkSuQmCC" />
                  </Link>
                </div>
                <div className="footerRightNavAddress font-face-futur-BK">
                  SixD Engineering Solutions Pvt. Ltd <br />
                  H-94, Sector-63, NOIDA - 201301, India <br />
                  <br />
                  info@sixdindia.com
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright font-face-futur-LT">
          <div className="otherLinks">
            <div className="grid-container">
              <Link to="/privacy-policy">
                <li className="font-face-futur-BK" style={{cursor:"pointer"}} >Privacy Policy</li>
              </Link>
              <Link to="/tNc-policy">
                <li className="font-face-futur-BK" style={{cursor:"pointer"}} >Terms &amp; Conditions</li>
              </Link>
              <Link to="/cookie-policy">
                <li className="font-face-futur-BK" style={{cursor:"pointer"}} >Cookie Settings</li>
              </Link>
              <Link to="/shipping-policy">
                <li className="font-face-futur-BK" style={{cursor:"pointer"}} >Shipping</li>
              </Link>
              <Link to="/payment-policy">
                <li className="font-face-futur-BK" style={{cursor:"pointer"}} >Payment Gateway</li>
              </Link>
              <Link to="/refund-policy">
                <li className="font-face-futur-BK" style={{cursor:"pointer"}} >Refund Policy</li>
              </Link>
            </div>
          </div>
          <div className="lineFooter" />
          <p>
            © 2024 SIXD India. All rights reserved. Designed by Mouse&amp;Cheese
          </p>
        </div>
      </section>
      <section className="footerM">
        <div className="fooWrapper">
          <div className="fooTop">
            <div className="fooLogo">
              <img src="/assets/Sixdlogo-bf5233dd.png" className="manc" />
            </div>
            <div className="mainFoo">
              <div className="fooH font-face-futur-BK">
                Elevating Your Journey With Us.
              </div>
              <div className="fooIcon">
                <div className="icons">
                  <Link to="https://www.linkedin.com/company/sixd-engineering-solutions-pvt-ltd/">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHGSURBVHgBtZU9SEJRFMeP0tJQWWMf8AYjigIXDVuSaKjNDGoKXZpagqDaoqaCICuac20o2woidArCIQmjhkAJHcOywfF0zvXdl+lNfU/7wfF+vOv/f8+9970LUANEdFCsUkQp0vgD12MUIQoNzKILH2DjnDZsRAN9FHk0T5rCVU88iM2R/9OEU8TWwCaayiAtR7zn3vAoGMC9wDRmn1NogZjUteviISoM1/voGbwm7iD3koKrk32wAO+jzzAgtsqfDnomoL2jU9SdVLeI0LRhaVMeKp8WvwqilEYW6W6jn6pd56W52C0lNe5fAI9/EY5D86I96PFCT+8APN5ei0n09A3A7Mqa6FPgYwMNFLPnPWCcbq8oZZvNZXaCBPc9wfr5jcpA4z1wgAlYfHJpGeY2to1Zs6mcQAUOzuADTDA2NQOBzR1R7x8eNZYuS1k43dUHwm7WoL2zy6iXr3ux8KkanmSDOPwfSbvNZkuCySwaFSftjHzRDqH1CM02vRGmCILiyErkce0bGlH28/tQRoZmH/k1EEv3QKvQQAWWrsdmCUEtmjDJ1xUvM+HL59KEeBwtXv4uighFUiHKfWHUv/stQc9MM/OfbymqCHRbejF7AAAAAElFTkSuQmCC" />
                  </Link>
                  <Link to="https://m.facebook.com/sixdengineering">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHaSURBVHgBtVXPSwJBFH4rHvSgLl0lWG8SRX+CSpeOSregXwdvHfQvkA5Rh0IPddZrh2g75UXQS1AdMiwwCBLEjrLUIZFwe2/dsV1d95f2wWPezLz5vp03b2Y5sIAsy3FskmgxNAGNR5PQ6mhPaCLHcVVwCiJGe5ftgeKSdol5tLzsDjk75I/ybCiaCbj98nHkGSenId/FpmiRQbgXL6BRKcP31+dobPOwAAvhxfHQBB2+VzOQsyIvn5+inYBNEF/VQ5769YJZdLfTdkJOoCqMsx1Yltjbw62uH9tKw8rauuIbpIchyQRWwSFi22kz4lGYR3UE+B8IXsyTMG2WKqXTfFb8TvNFN0f97kdb8cPRZfAHgkYUvFKmVLhGs5T3s50NsMLR3es0AWApksAl/IHQVHJEnQnUwCXC0SWz6TpLUQabvFEE1T+hUbmBq+O/u7hfuhxVkUk1pViZlmB48/jxCLbYHwxNjFuUaQufClFJETp0BgcwXyh87AxIpIBNFeaDEvKVdAIqUmgtmA30K82yjk5ATVUC3O9EhOEzLRkKqCJ0OCSyB/Z3Q4RZXJfSkhsKaIQojxFVqPbT7+sWyoMB9a/V+Yh6hpM84AAZgefB5+Oh15MKLcnW7f8FeMSBykdcHk4AAAAASUVORK5CYII=" />
                  </Link>
                  <Link to="https://twitter.com/SixDIndia">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAG7SURBVHgBpZW/S8NAFMcvo4MoToIIHURxc2kHp0L7B1gHRwk6irRuKoh1cVCHQp1ELQ6KU3HrmC4OnToILg4RLW4a26GOz3tpLp6Xu1x+fOCR63H5ft+917sQEgIA5GnUaHRpODDC8X43aKyQJHjCFkTDpmHGET+EZDRoTOrEG5COrtIkReYiFq9reOIZ+rBx/DPok6vtDfL18e4uGBufIJv1azI1MytN7G6/QuayyyRXWuOndwzDqPHZW3wKL51HOCpmYTjo/xuLNI8PoFU/le3C8UtFB0uyFe2bC7jdK/tjFONpnZ8F5gQqzKCmWlFfX3XFxTGKX26ZoMGSlodn2P+Gk1IRPntv/hizxqesZAIOM3gNWyX2o7w47RpGJKM1QPgeyPqR2qD3/ORmLutHFAMrbAWWA2uOJqwfbE5TKkf7LxoJFVxxJOr58Ggzg7xKHAWYuP8W1wM8ZCH9MJUnmYl3mvfSN1Xng8OG0fVDArvALWN9FVfAXwKFrJvEbm6exoLYj2rg0oKQXsTEJiog+ldMKQ58aRQmSXfS1YpzJqaXTRTwaq6SJHhGDxIzFG3TqIDuOxzTMBNX8Bd7MkILZAgYRgAAAABJRU5ErkJggg==" />
                  </Link>
                  <Link to="https://www.instagram.com/sixdindiaeng/">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJ0SURBVHgBpVVNaBNBFH4bvOTQNuQkroU9FLWEYD10QS+tJWBuxgoVAv7jyaoVe+hJ04M/UMWK8VIVthWhFTR60R4Ek4OK8dAgremhkFW73qxmC+Y4fW+yWSbbdHeTfvB22Nm33/f2mzezEriAMdaPQx8GjYoVhAKGjvFGkiQNmgUS92B8YP5QwhhphnyEtYYShuJFfoNtDyWniCRWjsN98aGxvASV9bJrUeFdnRCWO8UpHeMArs0/W8BSXcAI0f2a8QvSZ47z0Q/iF0cxrolTkyhwFYTqNfE7x2O97PnYZfbfLHt68uXVLBtT97Ds9JTzkVIjV8TZb+/fsivdO9mf1Z/uxJlZnrdaXGTv0hPs4alBZ0qK+HdAtcdtVNZN7qnoK83lZh7DytdPEGxrh76TF0DeG4HowBF+T7lrv184nTuNkQrgpQc8MDEYg3xmDuR9EU5I62Msf4fzac25wCLIGYW+YL8bef71HPoIMDz90iYLtnVA5s51UI8NgQdCAa8Mo7gEcnekrtJoLM7b10eXeQuE5d2wkv/M10EUbdD/DUECP9wS1MQJ7jutQ25mCuYf3avak/C0h1AggYJbRrC9g/vf1Xuw2kn5j5C8OQnx4VHwgE67mRZZA8cRUTFNbglVTiArkrcebMlUMct2roAsXQLWmZGtzUYH4kBtM5++C35AeyP37Am30oFxutTOItoLC7UnRnERnl46xzuFLHIDdZJ6dAiSt+u+UMPCz9oClkjdaUoWkd9klxvIvi71kDilYxxGAX1TsvPQawF/mY+fToq1hpInuSDSb73gt2oqKgTNAl9KsKpthQak2ZaJXQSVZgk3AH0K4nW3Jw4jAAAAAElFTkSuQmCC" />
                  </Link>
                  <Link to="https://in.pinterest.com/sixdindia/?invite_code=cb6b482edbb34b798e31a7dd27bdbcfd&sender=696087823564074263">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAZCAYAAAArK+5dAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKLSURBVHgBxVZBaBNBFJ0NvXiwxp7EUMghoMUKesiCvdiSHuIt9aDgQSt6koABPaiXWgQPVqGgvaho60FqQeNJc1CSHlLJeiioRaWBLtU9VpMU7HH8b7K7mU52m91S6INh/87Mf2/mz/87y9hugnM+SG2M2iK1v7wF2EVqOWpxFhZwsgmC4nlgIZp4QVltUKxQO9aJfMzP+1+jztesVb5slIW9BQZlTk0iz9Ajr4pWPy+wwtQDZn3/xjbWG25/7HA/O3n+MtMzZ1WXGrXjmqaZrgCRR+mxSC0uzwRxYeq+sI+m0iyRPCFs68cSM97OCRsC5+5OqiIlEhiSQ5NT91maecyv9h3g46kkX/u92hYH9GEMc94/mtg6VPYBteJdr/Hx4aazQ/7lwzteyc9uYliulMWcG/ohr3MpgrvLVoqrcf9j/RLb74n1UjhesZe3cmKs52AvS+gD9jkcEc+N9TqrGmUK4ymZBjUUjZDRllqIMZDQmzF34q1iT/c+15YTQBaJqKsXjnu7fd9jff0t0kbdtbEzD4gdRNVepCBg5Oc2OSOLZDGE0ktYQhwCNbUXMU4kBwRB1Vhg1s8lt1+GEzpVWIIJAdNrJDvzml16+EyQosjEio1P7jhq5OvHgrBHbt5hPjA1O4uKfjNw4BOnh8UKcZDOSp1DTV+5xtLZ637u+7uo4kokgjBFvWYg/QDsRM+cYfMvnoh3pC/SWA2bhHniboafBG5zHzzNjopiqryZ5SExCu6IrYaPiem1DBScs4MQMGn1066AvZWLXjNRpU5FBwS4hjxHuMdH795IyvNj5wNcVB0vnQyXbrQQ5CsdySUR3MnTPDgmefNOCQdbCM4l3v5Xgb7ctoh3Ev8Bqjs43HMg5uYAAAAASUVORK5CYII=" />
                  </Link>
                  <Link to="https://www.youtube.com/@sixdindia9181">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHJSURBVHgBrZU/SAJRHMd/SouDJY75hwscghaXhFy6hsDRaGiKzqElHIKaLdqDhpoclJoaokahSF0aXBJScghOiGtUy8Hx9fvpnV3HnfdO7wM/7vF79/t+n+9+zwcwAcZYAOMQ4x5DZn/QuIwhYQjgFFX4BKPL+ChwG+GLccNqeZGplkecd9VW7FmJCy6IM1UjbmYgM/d41XTnVHEJH4KWHPR/oHqdh87XJ/AQXAxDIr0DwVBES9FWSx6Pp+hRDcr4ELXZs80EdBQ+8bEJiucea/pUBQ02vGzUXqKWVVpNx+IE1VCtDpG0vTj490EG/W9TgdhqErciApNQWg1jSiQDwbgSU4PEGuSeapA6OAKffx44Gf6CADgglT2GbPGO24S6qAcOqD3cQunqfNhpUxlYrUx5b8KltA0ftRewwqS2RwYVfSYYipoWvz2XwA6ff8GYqnixV9t6k9Dyim23mEE1sURSn2qjdl07aBI+CtoMdVL1Jo/b0rAVpm0JhqOwvruvP8lEZnySVRMZDC07A7T6JRp4dcktcI+MaZaNrsBZOYVJ4AtpNt1fd1f9lvaw0eVTdCBeYVNe/mR0gVE3EW2rcyK4hWooOKn5Bf+ayuUs2UszAAAAAElFTkSuQmCC" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="fooNavbox">
            <div className="fooList font-face-futur-LT">
              <Link className="fooList" to="/industry4">
                {" "}
                <li>Industry 4.0</li>
              </Link>
              <Link className="fooList" to="/case-studies">
                {" "}
                <li>Case studies</li>
              </Link>
              <Link className="fooList" to="/sectors">
                {" "}
                <li>Sectors</li>
              </Link>
              <Link className="fooList" to="/services">
                {" "}
                <li>Services</li>
              </Link>
              <Link className="fooList" to="/career">
                {" "}
                <li>Careers</li>
              </Link>
            </div>
            <div className="fooAdd font-face-futur-LT">
              SixD Engineering Solutions Pvt. Ltd H-94, Sector-63, NOIDA -
              201301, India
            </div>
            <div className="fooEmail font-face-futur-LT">
              info@sixdindia.com
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
