import React from "react";
import SliderMe from "../components/SliderMe";
import ShareIcons from "../components/ShareIcons";
import { Link } from "react-router-dom";

const Inner10 = () => {
  return (
    <>
      <section className="CaseInnerWrapper">
        <div className="CaseInnerContainer">
          <section className="InnerHero">
            <img
              src="/assets/1-3577eded.png"
              alt="Contributing to Efficient Power Generation with Hydropower "
              style={{ width: "100%" }}
            />
            <h2 className="InnerHeroH1 font-face-futur-md-bt">
              Contributing to Efficient Power Generation with Hydropower{" "}
              <span className="orange">Hydropower</span>{" "}
            </h2>
            <div className="tagsD font-face-futur-HV" id="topGap">
            <Link to="/sectors/power" className="tags2">Power</Link>
            <Link to="/services/dimension-control" className="tags2">Dimension Control</Link>
            </div>
            <div className="bar">
              <h2 className="InnerHeroH2 font-face-futur-md-bt">
                <div className="lineabc" />
                The Problem at Hand
              </h2>
              <p className="font-face-futur-BK innerPara">
                Voith Hydro, a leading hydroelectric technology and services
                provider, faced a significant challenge with generator rotors
                that had been lying horizontally at a site for more than three
                years. Due to extended inactivity, these rotors had developed
                sag, compromising the generator's performance and posed a
                potential threat to the entire hydroelectric power generation
                project. <br /> <br /> Voith Hydro, needed a reliable and
                efficient solution to measure the sag in generator rotors
                accurately, cost-effectively, and without compromising the
                project's timeline.
              </p>
            </div>
            <div className="why font-face-futur-md-bt">
              <h1>
                Why <span>SIXD?</span>
              </h1>
              <p className="whyPara font-face-futur-LT">
                Traditional measurement methods were time-consuming, produced
                inconsistent results, and required costly fixtures. That’s where
                SixD’s ingenious approach comes into the picture.
              </p>
            </div>
            <div className="section-inner">
              <div className="lineabc2" />
              <h1 className="section-heading-inner font-face-futur-BK">
                Scope of Work
              </h1>
              <div className="card-container-inner">
                <p className="font-face-futur-LT" />
                <div id="topGap2">
                  <div className="card-inner">
                    <div className="card-content-inner">
                      <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAArCAYAAAAOnxr+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALHSURBVHgB7VjLkdNAEG15VWUflQHDwb/TiggwEUAGW0QARIA3ApYIvGRABogIVnvy78BsBOhoX2zeMyMzlrWW/JNldl+VPK12S/PUM93TMyLPeKJwkopWq/UaTddxHIVWpTwTzefzEO3tYDD4JgVhhShIfgbBruQECJPseykAS6IgqUDy10LpONFsNvsOUcs6Oa9SqbwT423YfRwOh1/lyHBjAeQ+WGR8eOrhsYd837+eTqd3EPlxJH10ohVLVqYN+/3+w6aHwjCM0NDj/EBfCoBN1OMPvBnledCy86QAVORM4CYVGMpOu92eU4bX9GQyeaW1zuXlY2KjR5lLa7VaIXMwC26KTjM/xjKiP5ASYI0ohxvkrqVkOOtg8rFK/Uiog1N7OW2Oeoz8hI735SLKdd5UR0uYdf+kWCMKUiGG+Y2UDGcdTIp1qbnVRRbHm5AWTMounuv1+v14PA7lxMgaeu267m8pAdJWpuA5mPZAWjB5Zidq63Sy6me+jeVms/nWvt8VSI3RaDS6lzxEAR+dBraChQqalwldCLuFjM3eQRaEi4sLQS3MBecmuWTnGvqYkA286Cde2JXDg0t4F6PaW+EQC/gSFiIdXCEIfLKNUOWHj1X5SinvUMU1px2aL2I2muDRoUMop0V9tE2xbD4gt30WsBUPsBXn+YIHLtyKL4iWLurNVlybWxXry5qeFtPMTIUF9iLaaDQuMbdfZNlxHidT3rbYmSg6vkI6YeAFWbYItjumPD4jO8KV3aH4Y44nl4jJ2FWXZaMsO8pX+O826wiJsD0apXW8DTi87JgXqq6NKQs2PeZLrEY3kgM2UW1aj3NK9gSmRa532AFjwU9w+kfUWja9arXaY6AcgvA2YGDiYsKP+w3i/5yEIROtknKAhdCyvliJekQw69CT7zjlryc7tsJJszLH5D6IX0qxYPSX5rzr/8YfxygUB7WEHh8AAAAASUVORK5CYII="
                        alt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAArCAYAAAAOnxr+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALHSURBVHgB7VjLkdNAEG15VWUflQHDwb/TiggwEUAGW0QARIA3ApYIvGRABogIVnvy78BsBOhoX2zeMyMzlrWW/JNldl+VPK12S/PUM93TMyLPeKJwkopWq/UaTddxHIVWpTwTzefzEO3tYDD4JgVhhShIfgbBruQECJPseykAS6IgqUDy10LpONFsNvsOUcs6Oa9SqbwT423YfRwOh1/lyHBjAeQ+WGR8eOrhsYd837+eTqd3EPlxJH10ohVLVqYN+/3+w6aHwjCM0NDj/EBfCoBN1OMPvBnledCy86QAVORM4CYVGMpOu92eU4bX9GQyeaW1zuXlY2KjR5lLa7VaIXMwC26KTjM/xjKiP5ASYI0ohxvkrqVkOOtg8rFK/Uiog1N7OW2Oeoz8hI735SLKdd5UR0uYdf+kWCMKUiGG+Y2UDGcdTIp1qbnVRRbHm5AWTMounuv1+v14PA7lxMgaeu267m8pAdJWpuA5mPZAWjB5Zidq63Sy6me+jeVms/nWvt8VSI3RaDS6lzxEAR+dBraChQqalwldCLuFjM3eQRaEi4sLQS3MBecmuWTnGvqYkA286Cde2JXDg0t4F6PaW+EQC/gSFiIdXCEIfLKNUOWHj1X5SinvUMU1px2aL2I2muDRoUMop0V9tE2xbD4gt30WsBUPsBXn+YIHLtyKL4iWLurNVlybWxXry5qeFtPMTIUF9iLaaDQuMbdfZNlxHidT3rbYmSg6vkI6YeAFWbYItjumPD4jO8KV3aH4Y44nl4jJ2FWXZaMsO8pX+O826wiJsD0apXW8DTi87JgXqq6NKQs2PeZLrEY3kgM2UW1aj3NK9gSmRa532AFjwU9w+kfUWja9arXaY6AcgvA2YGDiYsKP+w3i/5yEIROtknKAhdCyvliJekQw69CT7zjlryc7tsJJszLH5D6IX0qxYPSX5rzr/8YfxygUB7WEHh8AAAAASUVORK5CYII="
                        className="card-icon-inner"
                      />
                      <p className="card-paragraph-inner font-face-futur-LT innP">
                        Measurement of Shaft in steady condition.
                      </p>
                    </div>
                  </div>
                  <div className="card-inner">
                    <div className="card-content-inner">
                      <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAArCAYAAAAOnxr+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALoSURBVHgB7VhLctpAEG0RFixZeJ/JgipgJZ8gygnsI/gGrpzA+Ai+AdzAN4hyAosF/0XGe6rCioINpJ/Uo0yEwCoZhKj4VYkZtXpmmu7pzwzRB/5TOElCs9n8ys2d4zget3V5ioLebrea2+54PO7ZHz7ZLyzkAwvY5celSMAaFYs6r634ub26uqL5fP7TfHAsIcHwKyQ6zmKz2Tzzv1ugv2dST7ROzNcRGua4E1qXGy3zdYTmc+MLL6ymKNJiV/igIDxK+D3WbChsNZbYcW5MnxlcZnilA+A/FgqLH+Z9FFq4bYSlx3QfnVar1RGab3iZhrEKpjY0mSNWGH+75SYUtGILJ109Go0OCnlKsNCa/loi9o9YUDEDyWbOhVqt1pdFtNHKPmBrSddP+aylVYZQpSMiCALs5y9ZeCeTyRM3T5QR7xEU4cOzNLMXcDY4CiIK5URuQWUvfcvI+0jvRIUuBGUVNPR2xHFDKJ2gHF/vKQr6gG/oO3sUm56D7o8E2U/bZ0qpOoeke8RgO+blhYRIJa+6Uqk87xWUonzrJWh43xGUhXyR3EzHBNI28v1gMHjdKyiYWEOBTUsLQe12+4b5lIwJ7P2UF0g2mGu5XPa01v/MtyMoCxWwmd8MO8znGk0Oh8NrOjEuJjylmV6hLpVXnSxgz4U0Z1KmfgQajUZ/NpsFdGa8ZXpdrVZ/Uwmwo1FU4VmcqWhctDPV5Uhh085a9QNpzoT46NsEqfozFcSnQibTHztF5kGaRpEOv9uE1Wp19vCU5vULc8wtEy7a6z0uXrfow4nY7NfJSuYcOKhR5H2uOV0qAdKcKb4Loqgo8akESHMmfYzj7bFhmz7ch8c4+5wC9iWZcRiVZaBcEQKFxFj72tEsiFz/gHPSdDrtJweYkyd3cSVIyfPVqRDnRtd16+v1+oUyajQcHB0E3SIKltj0uInjRVGH6oxjcWL0iqqqUqsNNr1HkWY/7wyItNhH/i9DIvhAXvwBYuFJUcafED0AAAAASUVORK5CYII="
                        alt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAArCAYAAAAOnxr+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALoSURBVHgB7VhLctpAEG0RFixZeJ/JgipgJZ8gygnsI/gGrpzA+Ai+AdzAN4hyAosF/0XGe6rCioINpJ/Uo0yEwCoZhKj4VYkZtXpmmu7pzwzRB/5TOElCs9n8ys2d4zget3V5ioLebrea2+54PO7ZHz7ZLyzkAwvY5celSMAaFYs6r634ub26uqL5fP7TfHAsIcHwKyQ6zmKz2Tzzv1ugv2dST7ROzNcRGua4E1qXGy3zdYTmc+MLL6ymKNJiV/igIDxK+D3WbChsNZbYcW5MnxlcZnilA+A/FgqLH+Z9FFq4bYSlx3QfnVar1RGab3iZhrEKpjY0mSNWGH+75SYUtGILJ109Go0OCnlKsNCa/loi9o9YUDEDyWbOhVqt1pdFtNHKPmBrSddP+aylVYZQpSMiCALs5y9ZeCeTyRM3T5QR7xEU4cOzNLMXcDY4CiIK5URuQWUvfcvI+0jvRIUuBGUVNPR2xHFDKJ2gHF/vKQr6gG/oO3sUm56D7o8E2U/bZ0qpOoeke8RgO+blhYRIJa+6Uqk87xWUonzrJWh43xGUhXyR3EzHBNI28v1gMHjdKyiYWEOBTUsLQe12+4b5lIwJ7P2UF0g2mGu5XPa01v/MtyMoCxWwmd8MO8znGk0Oh8NrOjEuJjylmV6hLpVXnSxgz4U0Z1KmfgQajUZ/NpsFdGa8ZXpdrVZ/Uwmwo1FU4VmcqWhctDPV5Uhh085a9QNpzoT46NsEqfozFcSnQibTHztF5kGaRpEOv9uE1Wp19vCU5vULc8wtEy7a6z0uXrfow4nY7NfJSuYcOKhR5H2uOV0qAdKcKb4Loqgo8akESHMmfYzj7bFhmz7ch8c4+5wC9iWZcRiVZaBcEQKFxFj72tEsiFz/gHPSdDrtJweYkyd3cSVIyfPVqRDnRtd16+v1+oUyajQcHB0E3SIKltj0uInjRVGH6oxjcWL0iqqqUqsNNr1HkWY/7wyItNhH/i9DIvhAXvwBYuFJUcafED0AAAAASUVORK5CYII="
                        className="card-icon-inner"
                      />
                      <p className="card-paragraph-inner font-face-futur-LT innP">
                        Measurement at both free ends.
                      </p>
                    </div>
                  </div>
                  <div className="card-inner">
                    <div className="card-content-inner">
                      <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAArCAYAAAAOnxr+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALiSURBVHgB7Vg9ltowEB6TLbZ0QZEuSgU8CpwTBE4QbhDfgCOEPUF2bwA3yA1wTrDeggc8imh7CkoogHwDI68wP+sF1pi3fO8ZiZFkfxppfiSiKz4onLigWCx+R9F0HEehVJQuwvl8rvHt+36//9du+GT/Aclf6NQSki6lj8/4dhGPn8/naTQaRWQjjYKkQod/S6HjjDGzP6hqafaFvF4sFi2RVSGrcgWypsj4Hb7IWmY8ZE2RBSiCbQzR5uZyOYVq3RKrXq/3zJWbiLHjNKxBHlT/bP6XSqUqD4JcQ34nE1uS5R9LxtvGl2FtyAMZ3xRZYPruAr8DXJbjoCwm/cD1nM1eytDM4hyQvam5DsKekdtEl3sSWhvHB8s2YAS0B7e3t0/yEW220YEwHJQR3CQZNRgMWP0Pr/ULw5A/8JWOx4ayEhHdgTaeqqXtnWBj42Vkj0IH4mCi2EsaRS1h3zs6Ejm6EERE2fVwKf4yc4iIgmAoVVUoFBqUMUSRyfM8dzqdsksxbkrTS2Q6CnhXiKhzv80/Ixg00F5fI7Xyny5HMuzv2hpRRrlcrogVKzoxeOKTyeSb1nocI7rYMyYiumb13W73CSGshhn9oFV4PFViwnmBQkDg97ZjZJomZ7Cw1CilDdYaP5ydJezfkf4dI7sY93RMZDopoL2fJLaB7cDp4lp7JohKatfa1ycTS29lXTuRCY3Gsy42JpKk3OBqTEmhlHKx9JWYeMOHnp0oSD4mSYTOvvRxN7QLZ9cofCbHcmXLQP43rcJohLMTlZOCtmWw+o0z09Xq3wK+pUHR2WdUmdDobDZzX7P8TGh0OByG0KpPL0blx4lnJnuCUUUJtbnrstsv77j8ztD8w7eECft79jhGKkTlXpRwEq3zUZzj+7Z+WPIveNjZm/bAtCWLX0dCLokf6W0HNo3jdZT6paJRjj7QZpWS3xMEFMtHU9GoDWiXj84Vvgrf0swXFNrcVF/xnvgP+/cRVVZh8D4AAAAASUVORK5CYII="
                        alt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAArCAYAAAAOnxr+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALiSURBVHgB7Vg9ltowEB6TLbZ0QZEuSgU8CpwTBE4QbhDfgCOEPUF2bwA3yA1wTrDeggc8imh7CkoogHwDI68wP+sF1pi3fO8ZiZFkfxppfiSiKz4onLigWCx+R9F0HEehVJQuwvl8rvHt+36//9du+GT/Aclf6NQSki6lj8/4dhGPn8/naTQaRWQjjYKkQod/S6HjjDGzP6hqafaFvF4sFi2RVSGrcgWypsj4Hb7IWmY8ZE2RBSiCbQzR5uZyOYVq3RKrXq/3zJWbiLHjNKxBHlT/bP6XSqUqD4JcQ34nE1uS5R9LxtvGl2FtyAMZ3xRZYPruAr8DXJbjoCwm/cD1nM1eytDM4hyQvam5DsKekdtEl3sSWhvHB8s2YAS0B7e3t0/yEW220YEwHJQR3CQZNRgMWP0Pr/ULw5A/8JWOx4ayEhHdgTaeqqXtnWBj42Vkj0IH4mCi2EsaRS1h3zs6Ejm6EERE2fVwKf4yc4iIgmAoVVUoFBqUMUSRyfM8dzqdsksxbkrTS2Q6CnhXiKhzv80/Ixg00F5fI7Xyny5HMuzv2hpRRrlcrogVKzoxeOKTyeSb1nocI7rYMyYiumb13W73CSGshhn9oFV4PFViwnmBQkDg97ZjZJomZ7Cw1CilDdYaP5ydJezfkf4dI7sY93RMZDopoL2fJLaB7cDp4lp7JohKatfa1ycTS29lXTuRCY3Gsy42JpKk3OBqTEmhlHKx9JWYeMOHnp0oSD4mSYTOvvRxN7QLZ9cofCbHcmXLQP43rcJohLMTlZOCtmWw+o0z09Xq3wK+pUHR2WdUmdDobDZzX7P8TGh0OByG0KpPL0blx4lnJnuCUUUJtbnrstsv77j8ztD8w7eECft79jhGKkTlXpRwEq3zUZzj+7Z+WPIveNjZm/bAtCWLX0dCLokf6W0HNo3jdZT6paJRjj7QZpWS3xMEFMtHU9GoDWiXj84Vvgrf0swXFNrcVF/xnvgP+/cRVVZh8D4AAAAASUVORK5CYII="
                        className="card-icon-inner"
                      />
                      <p className="card-paragraph-inner font-face-futur-LT innP">
                        Measurement of shafts in different diameters and to
                        identify the other different sections and measurements.{" "}
                      </p>
                    </div>
                  </div>
                  <div className="card-inner">
                    <div className="card-content-inner">
                      <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAAqCAYAAAAu9HJYAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKoSURBVHgB7ZhNbtpAGIY/TCXEjgX7esOfWCQ3KDlBkxPER3BPEHKCticIPUHpCUJPULJAwM7dI5ULAH1fNE6njm1mDEOkyK8UzQyKv3k8fH+DSKlSpd6mKmKpbrfrY7gTt5osFotv8cIKUgE+VioVXxxrt9tF2Gcwn89/v7N88Lvneb5aRuJAAGtgnwYPAuMIH10ZnyRO8QEPBpxvt9svy+XykzhSr9f7jCHkHKADz+QhAN7FgNDUJSBVq9XuteVhSAU4VMsIf9fiWNPpdK2vcyE7nc7HBODekeXMyoTs9/sXCJIR5wDlm70KIJUKyVSz2WzGmDa4xjwwBYTTvzf5P9/3G2IoLw1QtFyI6BoiUH6IGSCjMlJjpujn9Xr9D8ZHKQLJXKgDIvPfi7l8NYZMWZIBGPu5aVHwEgYe4IeXnDMXWgLypZiaIgUQJEETgGvsZZQpvISBQC0L5UK8VATQqzTQJCBL3mw2ezKx6yUNyJG5MA0UqexXUcA9pItcmASNXagIoHr+uWGgxqfKhQSlPf0zpLKJLSDloU6yb5uqNaPyJL2ishP+txkCJSvq8+SxTuKruZF/PjSEoVs5QskgwaDbD2xB94Gj+dBaGRq12+0LKaC0KIYLjbOi3hhSA32O6mq1OjEtcRrgbVYU56UnY0hl6CcMBWrJDtkKFBtfpwFq9l+Amth9URZ5AWI5VEZ8DGPTZoAVhy1/XpqJQVnRtAPJVeb1QW/hYXCMCnQjZxT233HkgWX2k3B2lsUJ50wdhzobl8rtzJFDeXonz6G2yoV0kUOL6OBF7JQ51FStVusynmPvtc29+wMAJ2rJEw7FgdSPA6HWEPu2P7MwWY/kTIpvBlWbh1ar1VOz2eTbDsSt6GIhAL9yYf2rGqUua86k2rxSpUodo7/QRoB+9rLYLwAAAABJRU5ErkJggg=="
                        alt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAAqCAYAAAAu9HJYAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKoSURBVHgB7ZhNbtpAGIY/TCXEjgX7esOfWCQ3KDlBkxPER3BPEHKCticIPUHpCUJPULJAwM7dI5ULAH1fNE6njm1mDEOkyK8UzQyKv3k8fH+DSKlSpd6mKmKpbrfrY7gTt5osFotv8cIKUgE+VioVXxxrt9tF2Gcwn89/v7N88Lvneb5aRuJAAGtgnwYPAuMIH10ZnyRO8QEPBpxvt9svy+XykzhSr9f7jCHkHKADz+QhAN7FgNDUJSBVq9XuteVhSAU4VMsIf9fiWNPpdK2vcyE7nc7HBODekeXMyoTs9/sXCJIR5wDlm70KIJUKyVSz2WzGmDa4xjwwBYTTvzf5P9/3G2IoLw1QtFyI6BoiUH6IGSCjMlJjpujn9Xr9D8ZHKQLJXKgDIvPfi7l8NYZMWZIBGPu5aVHwEgYe4IeXnDMXWgLypZiaIgUQJEETgGvsZZQpvISBQC0L5UK8VATQqzTQJCBL3mw2ezKx6yUNyJG5MA0UqexXUcA9pItcmASNXagIoHr+uWGgxqfKhQSlPf0zpLKJLSDloU6yb5uqNaPyJL2ishP+txkCJSvq8+SxTuKruZF/PjSEoVs5QskgwaDbD2xB94Gj+dBaGRq12+0LKaC0KIYLjbOi3hhSA32O6mq1OjEtcRrgbVYU56UnY0hl6CcMBWrJDtkKFBtfpwFq9l+Amth9URZ5AWI5VEZ8DGPTZoAVhy1/XpqJQVnRtAPJVeb1QW/hYXCMCnQjZxT233HkgWX2k3B2lsUJ50wdhzobl8rtzJFDeXonz6G2yoV0kUOL6OBF7JQ51FStVusynmPvtc29+wMAJ2rJEw7FgdSPA6HWEPu2P7MwWY/kTIpvBlWbh1ar1VOz2eTbDsSt6GIhAL9yYf2rGqUua86k2rxSpUodo7/QRoB+9rLYLwAAAABJRU5ErkJggg=="
                        className="card-icon-inner"
                      />
                      <p className="card-paragraph-inner font-face-futur-LT innP">
                        Eliminate the need for fixtures, reducing labour costs
                        and variability.
                      </p>
                    </div>
                  </div>
                  <div className="card-inner">
                    <div className="card-content-inner">
                      <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAArCAYAAAAOnxr+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANgSURBVHgB7Vg7chpBEB0+Kn2idUm5l0ASkgKtTyCUObN0AqMTCJ9A+AS2MmdGJ7BuoHXoyDjRL/E6c6IqHFBAAPg9mMHDMguLBbO2ile19DCf3Tc90z09LcQCCywwE6TGNbqu66yurr7udDqFVCrldLvdGuTl7e3thbCMSKI7OzunEGU8TrgNhAOQP7q/v/8mLCFtqszn82cQ78UfkgEeH9qs8Q+km8lk/K2trX1hCSMa3dvb24e2qvJvAO2dYKl91b69vX2aTqc5iZ5mm83miyAIamLOyIQrNjY2PkDk5V8PJIeW9+Hh4cv6+jr36kvuW2j2J+vEnJE11BX4A21VQPKHadDd3d059nAZRQdkPb2Nextjj0zjHmOMQ0Q9z3NarZYjX1qdMJbtBTxuqL4YJq+AeoojTMa7ubl5I6bAkDFVq1V9r7kTxjrCTKYM4ZseZYxASRpsbIwYE2Z7BVGgoWCJcqZB+IiLj35nGf3K6PdWxIAc9wlFarzWaDRycQ1xxD3hw35vBnBBIP3O9DGIK/Uf/SoiJjChQGqccJaWlty4Y40OHwS/iv6sey4IoiL6rsqDayoKuezTaFMBEz0AWV+OP9Rd3ziYrJ4vOMbLqDUulSv6J5QyBvG3JB8D48nEJYJV5kCGFjywfmkMvtSENZJEdlyj9HcXDE5WVlYckA9EQsjG6QSSr2QxEAkhPamD3PwVPpubm55ICBOJ6sC57oiEMBXRJLEgOmskTfSMYSGe55M6WiNKX8zYQR2fBMoF0b/yBPAuH9knarw1osvLyzySS6HqQBVAuogb71UUWStEGXsimFE+uHcEI8R7Jo9phpKXss3D4XJqekesk2kGKErJGOJQb2BcAXGs4mBotgStnofj1LlrVJ5sLsskEdWP0ZgsOmtrawfhdhtLn9PIRN7DsOSD22673XbD7f+MH63X664qa3erAWwQ9VWB8W1Up2w2qy/3yDV97kSlsfgsc4+a0kDMzgh5iwAC0/XEitXTUKSjZ2alCgOroO5SZgg9pJBKWt8T0zus7FFo6LO+7HTu8KskWoHUSRajLnvWjInXGjp3por0enUP44EwLtVjy+H3IPcrl/Zkd3eXS84kRC1OEsIqUR3X19eTcltDeDrxKE6JX+J/AfNNMueUGH4DWfJu/1xlAJAAAAAASUVORK5CYII="
                        alt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAArCAYAAAAOnxr+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANgSURBVHgB7Vg7chpBEB0+Kn2idUm5l0ASkgKtTyCUObN0AqMTCJ9A+AS2MmdGJ7BuoHXoyDjRL/E6c6IqHFBAAPg9mMHDMguLBbO2ile19DCf3Tc90z09LcQCCywwE6TGNbqu66yurr7udDqFVCrldLvdGuTl7e3thbCMSKI7OzunEGU8TrgNhAOQP7q/v/8mLCFtqszn82cQ78UfkgEeH9qs8Q+km8lk/K2trX1hCSMa3dvb24e2qvJvAO2dYKl91b69vX2aTqc5iZ5mm83miyAIamLOyIQrNjY2PkDk5V8PJIeW9+Hh4cv6+jr36kvuW2j2J+vEnJE11BX4A21VQPKHadDd3d059nAZRQdkPb2Nextjj0zjHmOMQ0Q9z3NarZYjX1qdMJbtBTxuqL4YJq+AeoojTMa7ubl5I6bAkDFVq1V9r7kTxjrCTKYM4ZseZYxASRpsbIwYE2Z7BVGgoWCJcqZB+IiLj35nGf3K6PdWxIAc9wlFarzWaDRycQ1xxD3hw35vBnBBIP3O9DGIK/Uf/SoiJjChQGqccJaWlty4Y40OHwS/iv6sey4IoiL6rsqDayoKuezTaFMBEz0AWV+OP9Rd3ziYrJ4vOMbLqDUulSv6J5QyBvG3JB8D48nEJYJV5kCGFjywfmkMvtSENZJEdlyj9HcXDE5WVlYckA9EQsjG6QSSr2QxEAkhPamD3PwVPpubm55ICBOJ6sC57oiEMBXRJLEgOmskTfSMYSGe55M6WiNKX8zYQR2fBMoF0b/yBPAuH9knarw1osvLyzySS6HqQBVAuogb71UUWStEGXsimFE+uHcEI8R7Jo9phpKXss3D4XJqekesk2kGKErJGOJQb2BcAXGs4mBotgStnofj1LlrVJ5sLsskEdWP0ZgsOmtrawfhdhtLn9PIRN7DsOSD22673XbD7f+MH63X664qa3erAWwQ9VWB8W1Up2w2qy/3yDV97kSlsfgsc4+a0kDMzgh5iwAC0/XEitXTUKSjZ2alCgOroO5SZgg9pJBKWt8T0zus7FFo6LO+7HTu8KskWoHUSRajLnvWjInXGjp3por0enUP44EwLtVjy+H3IPcrl/Zkd3eXS84kRC1OEsIqUR3X19eTcltDeDrxKE6JX+J/AfNNMueUGH4DWfJu/1xlAJAAAAAASUVORK5CYII="
                        className="card-icon-inner"
                      />
                      <p className="card-paragraph-inner font-face-futur-LT innP">
                        Axis establishment between both free ends then the rest
                        of the section points were checked for Sag measurement.
                      </p>
                    </div>
                  </div>
                  <div className="card-inner">
                    <div className="card-content-inner">
                      <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAArCAYAAAAOnxr+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHbSURBVHgB7Zg/VsJAEMYnmCIlBb0pgUY8AXgDPIF4ArkBeAM5gXADvUGsbLUBUhlrKKSiAvzmvfBeHi8b2D9Zn7q/hll2WD52wszuEDn+KV7RZBiG1SAI7jzP62NYJUV2u91wPp/fkwZnool6vR76vv8KkV0MA9IAa3RqtRotl8sXUsQvmBvgC8LUjrArEUmSjQTsIX48qe5sbuh5N7HwB9sQOMbit6RAo9HgNcLse6qPQUXw/nnGnpAmaTQSttOdHZAkFbJDArFXpCHWllB+NrXEWhPK6Ii1KpRRFWtdKKMi1icLQEgrTwhnA8z1Up/CPGtFKGix2GNOLBa5dzybzT4P50oN/Xa7fSBDlLqjcRyP8DI65oeQ97Cbj0U+P/JnUsEJNY0Tahon1DS/RqhWwkeibtPBVaOABHW8lMtdIRB5g2oylvlMs9nsTqfTZ1Lg74ceYZxgV6VCiVNRQopoPaN8ACZLuPRkGifUNE6oaXKFbjab1d7GlfaCyqe9N9br9SrPQdhxzrQMvyC2j3IZUQlgbb7YDdPhG4rCZZ6fMOFzExaLPMGsytZ0GbB2dtgV+Qlb44vFIkY7O0kbB8r9+xPhFs81Kt27yMGjE0BN79DpxzlZ+PgXkcMy3//ktfs7vqUVAAAAAElFTkSuQmCC"
                        alt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAArCAYAAAAOnxr+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHbSURBVHgB7Zg/VsJAEMYnmCIlBb0pgUY8AXgDPIF4ArkBeAM5gXADvUGsbLUBUhlrKKSiAvzmvfBeHi8b2D9Zn7q/hll2WD52wszuEDn+KV7RZBiG1SAI7jzP62NYJUV2u91wPp/fkwZnool6vR76vv8KkV0MA9IAa3RqtRotl8sXUsQvmBvgC8LUjrArEUmSjQTsIX48qe5sbuh5N7HwB9sQOMbit6RAo9HgNcLse6qPQUXw/nnGnpAmaTQSttOdHZAkFbJDArFXpCHWllB+NrXEWhPK6Ii1KpRRFWtdKKMi1icLQEgrTwhnA8z1Up/CPGtFKGix2GNOLBa5dzybzT4P50oN/Xa7fSBDlLqjcRyP8DI65oeQ97Cbj0U+P/JnUsEJNY0Tahon1DS/RqhWwkeibtPBVaOABHW8lMtdIRB5g2oylvlMs9nsTqfTZ1Lg74ceYZxgV6VCiVNRQopoPaN8ACZLuPRkGifUNE6oaXKFbjab1d7GlfaCyqe9N9br9SrPQdhxzrQMvyC2j3IZUQlgbb7YDdPhG4rCZZ6fMOFzExaLPMGsytZ0GbB2dtgV+Qlb44vFIkY7O0kbB8r9+xPhFs81Kt27yMGjE0BN79DpxzlZ+PgXkcMy3//ktfs7vqUVAAAAAElFTkSuQmCC"
                        className="card-icon-inner"
                      />
                      <p className="card-paragraph-inner font-face-futur-LT innP">
                        Offer real-time reporting capabilities to expedite
                        decision-making.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="howwas">
              <div className="how-cnt">
                <span className="deco2" />
                <h1 className="font-face-futur-BK howh1">
                  How was the problem tackled
                </h1>
                <ul className="font-face-futur-LT howp">
                  <li>
                    We deployed advanced technology and expertise in 3D Laser
                    Mapping to measure rotor sag in real time without the need
                    for fixtures.&nbsp;&nbsp;
                  </li>
                  <li>
                    {" "}
                    <br /> <b>3D Laser Mapping:</b> We used state-of-the-art 3D
                    laser mapping technology to capture highly accurate
                    measurements of the rotor sag in real-time.{" "}
                  </li>
                  <li>
                    <br /> <b> Digital Solution:</b> By digitising the
                    measurement process, we eliminated the need for fixtures and
                    reduced labor costs.
                  </li>
                  <li>
                    <br /> <b>Real-time Reporting:</b> We provided real-time
                    reporting capabilities, enabling Voith Hydro to assess the
                    rotor's condition and plan necessary actions promptly.
                  </li>
                </ul>
              </div>
              <div className="how-img">
                <img src="/assets/t1-a84e4c12.png" />
              </div>
            </div>
            <div className="page">
              <img src="/assets/p1-ffa91550.png" className="page" />
            </div>
            <div className="arch">
              <div className="fxm">
                <span className="deco3" />
                <h1 className="font-face-futur-md-bt">
                  The <span className="orange">Difference</span> Achieved
                </h1>
              </div>
              <div className="side-data">
                <div className="side-image">
                  <img src="/assets/i1-a28f622a.gif" alt="Animated Frame" />
                </div>
                <div className="side-col">
                  <div className="row-side">
                    <div className="card-main-side">
                      {" "}
                      <span className="deco4" />
                      <h1 className="font-face-futur-BK">Enhanced Accuracy</h1>
                      <p className="font-face-futur-LT">
                        Voith Hydro could now rely on highly accurate
                        measurements, ensuring the quality and efficiency of its
                        services.
                      </p>
                    </div>
                    <div className="card-main-side">
                      {" "}
                      <span className="deco4" />
                      <h1 className="font-face-futur-BK">Cost Savings</h1>
                      <p className="font-face-futur-LT">
                        By eliminating the need for fixtures and streamlining
                        the measurement process, labor costs were reduced,
                        contributing to cost savings.
                      </p>
                    </div>
                  </div>
                  <div className="row-side">
                    <div className="card-main-side">
                      {" "}
                      <span className="deco4" />
                      <h1 className="font-face-futur-BK">
                        Real-time Decision-Making
                      </h1>
                      <p className="font-face-futur-LT">
                        Real-time reporting empowered Voith Hydro to make
                        informed decisions promptly, enabling them to take
                        corrective actions when needed.
                      </p>
                    </div>
                    <div className="card-main-side">
                      {" "}
                      <span className="deco4" />
                      <h1 className="font-face-futur-BK">Project Continuity</h1>
                      <p className="font-face-futur-LT">
                        Avoiding the expensive and risky process of transporting
                        rotors back to India ensured the project's continuity
                        and minimized potential setbacks.
                      </p>
                    </div>
                  </div>
                  <p className="p-side font-face-futur-LT">
                    In conclusion, SIXD's innovative 3D laser mapping solutions
                    successfully addressed Voith Hydro's challenge of measuring
                    sag in generator rotors. Their technology-driven approach
                    not only improved accuracy and cost-efficiency but also
                    enabled real-time decision-making, ultimately safeguarding
                    the success of the hydroelectric power generation project.
                  </p>
                </div>
              </div>
            </div>
            <div className="sharemy">
              <div className="sharex">
                <h1 className="font-face-futur-md-bt">Share this Case Study</h1>
                <div className="shareb">
                  <div className="share-50">
                    <div className="shareby font-face-futur-md-bt">
                      Share via
                    </div>
                    <ShareIcons />
                  </div>
                </div>
              </div>
            </div>
            <div className="innnercards">
              <h1 className="font-face-futur-BK">View more</h1>
              <div className="wrappermax">
                <Link to="/inner/8">
                  <div className="cardmax">
                    <h1 className="font-face-futur-md-bt">
                      {" "}
                      Physical Parts to Manufacturing Blueprints for Essential
                      Spares and Components.{" "}
                    </h1>
                    <div className="tagsmax font-face-futur-md-bt">
                      <p>Others</p>
                      <p>Re-Engineering &amp; Supply</p>
                    </div>
                    <img src="/assets/id3c1-65ad2531.png" />
                  </div>
                </Link>
                <Link to="/inner/3">
                  <div className="cardmax">
                    <h1 className="font-face-futur-md-bt">
                      {" "}
                      Precise Revamping and Modernization for Offshore Platforms{" "}
                    </h1>
                    <div className="tagsmax font-face-futur-md-bt">
                      <p>Oil &amp; Gas</p>
                      <p>As-built Engineering</p>
                    </div>
                    <img src="/assets/id4c1-a86d3ef5.png" />
                  </div>
                </Link>
                <Link to="/inner/1">
                  <div className="cardmax">
                    <h1 className="font-face-futur-md-bt">
                      {" "}
                      Streamlining Project Management for Green Hydrogen Plants{" "}
                    </h1>
                    <div className="tagsmax font-face-futur-md-bt">
                      <p>Power</p>
                      <p>Owner’s Engineering</p>
                    </div>
                    <img src="/assets/id3c3-775b0b1f.png" />
                  </div>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </section>
      <SliderMe />
    </>
  );
};

export default Inner10;
