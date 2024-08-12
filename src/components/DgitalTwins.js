import React from "react";
import { Link } from "react-router-dom";

const DgitalTwins = () => {
  return (
    <>
      <section>
        <h1 className="ser-tab-heading-1 font-face-futur-HV">Digital Twins</h1>
        <br /> <br />
        <h3 className="ser-tab-subheading">
          {" "}
          Deploying advanced solutions to revolutionize training, operations and
          safety
        </h3>{" "}
        <br />
        <p className=" font-face-futur-LT para-ser ">
          {" "}
          We create virtual models for real-time monitoring and predictive
          analysis, optimizing operations and ensuring uninterrupted performance
          within the power industry. With precise simulations, we guarantee
          seamless functionality for critical processes, minimizing downtime and
          enhancing overall performance.{" "}
        </p>{" "}
        <br /> <br />
        <Link to="/sectors/green%20energy">
          <img
            src="/assets/tab5-7a90fb58.png"
            alt="Digital Twins"
            className="ser-img"
          />
        </Link>
      </section>
      <section className="tab-cards-section">
        <span className="kjj" style={{ marginTop: "-14px" }} />
        <h1 className="ser-tab-heading-1 font-face-futur-HV">
          Applications
        </h1>{" "}
        <br /> <br />
        <div className="card-container-ser">
          <div className="card-inner-ser">
            <div className="card-content-inner-ser">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAuCAYAAAC8jpA0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOPSURBVHgB7VlJUiJBFP0gC3XFDSwWjpuWEzScoO0TNJ5AOEGXJ1BPAH0CvIFwAlg5LswbaG8cIhj6PSqTKCvaksxKCI3gRWT8mjLz1a8/ZZbIEotBLnlhZ2cngAjSOr28vPSVUo+SEUEQFFdXV/fTnhkOh493d3f9+LVCYoB2LperyAfAc1WIjmQECWO+i7RnCoWCbG9vn7++vh4aRRViA5xqwt3xeKzSBuLbix8ozPUn7YF8Pv8N7QD8OOfhm5t7e3sPu7u7D/IJkeSWNwd44yKELw16Bbj9hSia87x8QSxJLwpzI721tXUgc4J30khOFXj6/crKShvxta2TlVd4I83kBLInOlkEaIrxFef3IP5bPMILaZCtr6+v3+OwLlHCqF5dXZUgmQwUiIfUPsjXxANykgH60zeZSdEY48+enp5O43UJnyFpHP7iOV6kBXF8fX2txBFOpHWdcoTPX9dJiam/lkZEkzemQ/Ihnj8WB1iTpqNh8iYnp3Yx+TFM4dSifw39aOMBmkJroP+5WMCKtCY8qcogWzCFhkuJqrXOF6/wfDAYlJPlZxqcHZHmQBMRS9C0JLLvirmG8Fi0GcOVdEccogK/1NraWo/9tON2xAFOpKFlOl4VE59JZNtNEGq+l0h4He0i5oiMMgyJXXGAs3kwUlxeXjJ6lCTSOh2sl0wkPEeU6cUWGIzh9SzLtYJkhA5zJRMVtMnUsLppwFZPJNIsCTZsokwavKVxkG9Rizjk8ilg7SGR6TDKlHwRJjJrOg6t9Ro0zfB1omN4KJ4xl9IUZI29KpkDlouARcGJNJzre9biHtsC3Kj5IQ6wIo20TQdTaBXX4t4sFmD3PZxyS6wrlrZvRbrf7z/+r7hHm2k9aNK46MUCYvlPjFexra2dzCMZk9Hatmn8+fm5fHt7a1WSGuRiA4cMVTc3N1ZJYHNzcx+bhJNEgqZGo9EZiyHWI/wikEVmythigcV/x2KKyXKO/dEvfEMaN8aclJ9fHADHCiGONDkDJY6LhQRpBbGB/hO+3kIeiqcQWi5LZDIGAVqX1z99GoepdVj1uZjCLPBK2oCOCtGSOWGZxheFJelFYeqI8PY+vH2fKRkydQ8iy5ZWHHqn6qPtgwBtA23KaUqawR+CmY2/5VJHQUir+ghls/ySM0CdMt1Cm5Lm1hRSchkpOZTYT5l3BvDyQ4njYL7UbQT9e7CFOqUjSywY/wA9tsY6cdGfDQAAAABJRU5ErkJggg=="
                alt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAuCAYAAAC8jpA0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOPSURBVHgB7VlJUiJBFP0gC3XFDSwWjpuWEzScoO0TNJ5AOEGXJ1BPAH0CvIFwAlg5LswbaG8cIhj6PSqTKCvaksxKCI3gRWT8mjLz1a8/ZZbIEotBLnlhZ2cngAjSOr28vPSVUo+SEUEQFFdXV/fTnhkOh493d3f9+LVCYoB2LperyAfAc1WIjmQECWO+i7RnCoWCbG9vn7++vh4aRRViA5xqwt3xeKzSBuLbix8ozPUn7YF8Pv8N7QD8OOfhm5t7e3sPu7u7D/IJkeSWNwd44yKELw16Bbj9hSia87x8QSxJLwpzI721tXUgc4J30khOFXj6/crKShvxta2TlVd4I83kBLInOlkEaIrxFef3IP5bPMILaZCtr6+v3+OwLlHCqF5dXZUgmQwUiIfUPsjXxANykgH60zeZSdEY48+enp5O43UJnyFpHP7iOV6kBXF8fX2txBFOpHWdcoTPX9dJiam/lkZEkzemQ/Ihnj8WB1iTpqNh8iYnp3Yx+TFM4dSifw39aOMBmkJroP+5WMCKtCY8qcogWzCFhkuJqrXOF6/wfDAYlJPlZxqcHZHmQBMRS9C0JLLvirmG8Fi0GcOVdEccogK/1NraWo/9tON2xAFOpKFlOl4VE59JZNtNEGq+l0h4He0i5oiMMgyJXXGAs3kwUlxeXjJ6lCTSOh2sl0wkPEeU6cUWGIzh9SzLtYJkhA5zJRMVtMnUsLppwFZPJNIsCTZsokwavKVxkG9Rizjk8ilg7SGR6TDKlHwRJjJrOg6t9Ro0zfB1omN4KJ4xl9IUZI29KpkDlouARcGJNJzre9biHtsC3Kj5IQ6wIo20TQdTaBXX4t4sFmD3PZxyS6wrlrZvRbrf7z/+r7hHm2k9aNK46MUCYvlPjFexra2dzCMZk9Hatmn8+fm5fHt7a1WSGuRiA4cMVTc3N1ZJYHNzcx+bhJNEgqZGo9EZiyHWI/wikEVmythigcV/x2KKyXKO/dEvfEMaN8aclJ9fHADHCiGONDkDJY6LhQRpBbGB/hO+3kIeiqcQWi5LZDIGAVqX1z99GoepdVj1uZjCLPBK2oCOCtGSOWGZxheFJelFYeqI8PY+vH2fKRkydQ8iy5ZWHHqn6qPtgwBtA23KaUqawR+CmY2/5VJHQUir+ghls/ySM0CdMt1Cm5Lm1hRSchkpOZTYT5l3BvDyQ4njYL7UbQT9e7CFOqUjSywY/wA9tsY6cdGfDQAAAABJRU5ErkJggg=="
                className="card-icon-inner-ser"
              />{" "}
              <br />
              <p className="card-paragraph-inner-ser font-face-futur-LT">
                Immersive experiences in Virtual Reality (VR) and Augmented
                Reality (AR) environments
              </p>
            </div>
          </div>
          <div className="card-inner-ser">
            <div className="card-content-inner-ser">
              <img
                src="data:image/png;base64,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"
                alt="data:image/png;base64,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"
                className="card-icon-inner-ser"
              />{" "}
              <br />
              <p className="card-paragraph-inner-ser font-face-futur-LT">
                Integration of AI for advanced training development,
                maintenance, operations, and troubleshooting
              </p>
            </div>
          </div>
          <div className="card-inner-ser">
            <div className="card-content-inner-ser">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAYAAABXuSs3AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOXSURBVHgB7Zi9UhsxEMfXHwymimf4qI+CGaCJ06XL8QbOE4R06YAnsHkC4AliniBOScVRJam4iu8ZXzoXzOQqMMyA819bEKHT3ekiAk5yvxnP3UkrebVaaVciysn5tykkVTqOU61UKnV+TRBrHR0dBZSBhYWFer/fryWIeOjTS6iPVxydb+CxSukEh4eHs2TI/Pz8cqFQ+GggGmBwS3FGKeoKMyjNOFDGIXNcQzkHA9yfm5vTzkxEcbYImStN6Lyd0VVaGWSr5XL5k64i4iqw9i49tMoWfh6mLVRli8VieHBw4FNGxAw5MdVs6YZcL1zGk4XKmoau9M7+a2x9U8QMBXH1GBjJ60AsZE+WKVICaPCdnodA/sAgqqpAouKjTK74U/PXKl6mP4C83fV6PT8IgpAemYjiWMH+XR6BfbpDhoi8ZgVtVtH+fheYmJjggXg3Nzdrp6enRns++vGvr69DqZ9AlSmpBZOTkzuFITsXFxfrYRj2KAW28NjY2Be04YSsotaj3MGAPkxNTdH5+fleWn/dbrcHPb7RMEBuYd9vRfokS1hpKMbR1jGRhxWbUGSdLCmRJdPT0xzhXivFe1BwGwPiAFYVvwEoc2H5PVg+IAusFies7eJRp19Khbe3t2/lvKJWq1Wvrq428fpOasq5iEcWWG2HwqfvgZXX1WTI9/1wfHx8lQcltXN5MZMFtvv4S/kDird1Qqw8u45chsXskAWPGoCS8nI1LS6VSs9ncTV7FD6vBe7xRv7Gvm4VlGx9XA0oDZ2cGJArFQWmwSgOK8Wx6FrqooOSu3eW5wWI9waCz4Pjl+rvv4N1AMJRj09IGxmaBJeXl69s8xdtAGJLgYpJuEcg+TozM8MGcCmdwZXD2dlZ10B2EJXRv3aAEVdZXFxsIDH6gV8nabHJ4MDcxGONEs6RNIymS6Y3AuxycL0OZrSju/7QnfL70udnHJbrZIj4A1cEJt7u2Fps5XbazZTSjyvynwGIxmvHx8ebskxiyJfTUxOENVuU7e4klfywPArkij81iYpjUbygEUWnuJw4Zb1CfiyWle9AFdBth5xTr4j3KgcBPqVTDNhjt05OTtpkyN1tAMVEWj5YU/T86kXk1AK2MJKi/Qx7eIjcY9Y090BkbqLvBhkiTlVNtTziKiKILFFy+JbJFKQyBrVtndKMdnHyZT3nFdyQEgbAKS1bJEumB/nNtD5pmNe8R7qxTDk5/yk/AdYzfEBLlPujAAAAAElFTkSuQmCC"
                alt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAYAAABXuSs3AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOXSURBVHgB7Zi9UhsxEMfXHwymimf4qI+CGaCJ06XL8QbOE4R06YAnsHkC4AliniBOScVRJam4iu8ZXzoXzOQqMMyA819bEKHT3ekiAk5yvxnP3UkrebVaaVciysn5tykkVTqOU61UKnV+TRBrHR0dBZSBhYWFer/fryWIeOjTS6iPVxydb+CxSukEh4eHs2TI/Pz8cqFQ+GggGmBwS3FGKeoKMyjNOFDGIXNcQzkHA9yfm5vTzkxEcbYImStN6Lyd0VVaGWSr5XL5k64i4iqw9i49tMoWfh6mLVRli8VieHBw4FNGxAw5MdVs6YZcL1zGk4XKmoau9M7+a2x9U8QMBXH1GBjJ60AsZE+WKVICaPCdnodA/sAgqqpAouKjTK74U/PXKl6mP4C83fV6PT8IgpAemYjiWMH+XR6BfbpDhoi8ZgVtVtH+fheYmJjggXg3Nzdrp6enRns++vGvr69DqZ9AlSmpBZOTkzuFITsXFxfrYRj2KAW28NjY2Be04YSsotaj3MGAPkxNTdH5+fleWn/dbrcHPb7RMEBuYd9vRfokS1hpKMbR1jGRhxWbUGSdLCmRJdPT0xzhXivFe1BwGwPiAFYVvwEoc2H5PVg+IAusFies7eJRp19Khbe3t2/lvKJWq1Wvrq428fpOasq5iEcWWG2HwqfvgZXX1WTI9/1wfHx8lQcltXN5MZMFtvv4S/kDird1Qqw8u45chsXskAWPGoCS8nI1LS6VSs9ncTV7FD6vBe7xRv7Gvm4VlGx9XA0oDZ2cGJArFQWmwSgOK8Wx6FrqooOSu3eW5wWI9waCz4Pjl+rvv4N1AMJRj09IGxmaBJeXl69s8xdtAGJLgYpJuEcg+TozM8MGcCmdwZXD2dlZ10B2EJXRv3aAEVdZXFxsIDH6gV8nabHJ4MDcxGONEs6RNIymS6Y3AuxycL0OZrSju/7QnfL70udnHJbrZIj4A1cEJt7u2Fps5XbazZTSjyvynwGIxmvHx8ebskxiyJfTUxOENVuU7e4klfywPArkij81iYpjUbygEUWnuJw4Zb1CfiyWle9AFdBth5xTr4j3KgcBPqVTDNhjt05OTtpkyN1tAMVEWj5YU/T86kXk1AK2MJKi/Qx7eIjcY9Y090BkbqLvBhkiTlVNtTziKiKILFFy+JbJFKQyBrVtndKMdnHyZT3nFdyQEgbAKS1bJEumB/nNtD5pmNe8R7qxTDk5/yk/AdYzfEBLlPujAAAAAElFTkSuQmCC"
                className="card-icon-inner-ser"
              />{" "}
              <br />
              <p className="card-paragraph-inner-ser font-face-futur-LT">
                Real-time operational data incorporation and 360⁰ visibility
              </p>
            </div>
          </div>
          <div className="card-inner-ser">
            <div className="card-content-inner-ser">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAArCAYAAAAOnxr+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHbSURBVHgB7Zg/VsJAEMYnmCIlBb0pgUY8AXgDPIF4ArkBeAM5gXADvUGsbLUBUhlrKKSiAvzmvfBeHi8b2D9Zn7q/hll2WD52wszuEDn+KV7RZBiG1SAI7jzP62NYJUV2u91wPp/fkwZnool6vR76vv8KkV0MA9IAa3RqtRotl8sXUsQvmBvgC8LUjrArEUmSjQTsIX48qe5sbuh5N7HwB9sQOMbit6RAo9HgNcLse6qPQUXw/nnGnpAmaTQSttOdHZAkFbJDArFXpCHWllB+NrXEWhPK6Ii1KpRRFWtdKKMi1icLQEgrTwhnA8z1Up/CPGtFKGix2GNOLBa5dzybzT4P50oN/Xa7fSBDlLqjcRyP8DI65oeQ97Cbj0U+P/JnUsEJNY0Tahon1DS/RqhWwkeibtPBVaOABHW8lMtdIRB5g2oylvlMs9nsTqfTZ1Lg74ceYZxgV6VCiVNRQopoPaN8ACZLuPRkGifUNE6oaXKFbjab1d7GlfaCyqe9N9br9SrPQdhxzrQMvyC2j3IZUQlgbb7YDdPhG4rCZZ6fMOFzExaLPMGsytZ0GbB2dtgV+Qlb44vFIkY7O0kbB8r9+xPhFs81Kt27yMGjE0BN79DpxzlZ+PgXkcMy3//ktfs7vqUVAAAAAElFTkSuQmCC"
                alt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAArCAYAAAAOnxr+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHbSURBVHgB7Zg/VsJAEMYnmCIlBb0pgUY8AXgDPIF4ArkBeAM5gXADvUGsbLUBUhlrKKSiAvzmvfBeHi8b2D9Zn7q/hll2WD52wszuEDn+KV7RZBiG1SAI7jzP62NYJUV2u91wPp/fkwZnool6vR76vv8KkV0MA9IAa3RqtRotl8sXUsQvmBvgC8LUjrArEUmSjQTsIX48qe5sbuh5N7HwB9sQOMbit6RAo9HgNcLse6qPQUXw/nnGnpAmaTQSttOdHZAkFbJDArFXpCHWllB+NrXEWhPK6Ii1KpRRFWtdKKMi1icLQEgrTwhnA8z1Up/CPGtFKGix2GNOLBa5dzybzT4P50oN/Xa7fSBDlLqjcRyP8DI65oeQ97Cbj0U+P/JnUsEJNY0Tahon1DS/RqhWwkeibtPBVaOABHW8lMtdIRB5g2oylvlMs9nsTqfTZ1Lg74ceYZxgV6VCiVNRQopoPaN8ACZLuPRkGifUNE6oaXKFbjab1d7GlfaCyqe9N9br9SrPQdhxzrQMvyC2j3IZUQlgbb7YDdPhG4rCZZ6fMOFzExaLPMGsytZ0GbB2dtgV+Qlb44vFIkY7O0kbB8r9+xPhFs81Kt27yMGjE0BN79DpxzlZ+PgXkcMy3//ktfs7vqUVAAAAAElFTkSuQmCC"
                className="card-icon-inner-ser"
              />{" "}
              <br />
              <p className="card-paragraph-inner-ser font-face-futur-LT">
                Simulation of complex processes and systems
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="namdk">
        <h1 className="ser-tab-heading">Future of engineering.</h1>
        <p className="ser-para font-face-futur-BK">
          The digital twin significantly enhances safety measures and
          facilitates digitalization solutions for a range of critical
          industrial areas. We enable our partners to transcend geographical
          barriers and language limitations, fostering seamless communication
          and collaboration through metaverse meetings. By incorporating
          real-time operational data and providing 360° visibility of key areas,
          we improve real-time decision-making.
        </p>{" "}
        <div className="image-grid">
          <div className="grid-section">
            <img
              src="/assets/img4-beb84b81.png"
              className="section-1-image-1"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default DgitalTwins;
