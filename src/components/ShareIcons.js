import React from 'react';

const ShareIcons = () => {
  const handleTwitterClick = () => {
    const urlToShare = window.location.href;
    const tweetUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(urlToShare)}`;
    window.open(tweetUrl, '_blank');
    navigator.clipboard.writeText(urlToShare).then(() => {
      
    }).catch(err => {
      console.error('Could not copy text: ', err);
    });
  };

  const handleFacebookClick = () => {
    const urlToShare = window.location.href;
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(urlToShare)}`;
    window.open(facebookUrl, '_blank');
    navigator.clipboard.writeText(urlToShare).then(() => {
     
    }).catch(err => {
      console.error('Could not copy text: ', err);
    });
  };

  const handleWhatsAppClick = () => {
    const urlToShare = window.location.href;
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(urlToShare)}`;
    window.open(whatsappUrl, '_blank');
    navigator.clipboard.writeText(urlToShare).then(() => {
     
    }).catch(err => {
      console.error('Could not copy text: ', err);
    });
  };
  return (
    <>
    <div className="shareicons">
                        <span
                          onClick={handleTwitterClick}
                          style={{ cursor: "pointer" }}
                        >
                          <img
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAI+SURBVHgBrZfNSxVRGMafoI1BEUYUFDW1ihZBGyMSuvThH9CiWrQtIrAuRcvSoqAIzGoRtWoVrSICQUFREXQjKiIK4gd+4Af4ibpV39d5jnPmMDP3zjAPPNzL77znvTPvvHPOuQBQFO8keER8FNnkiaeY56U90EnYIa63PE7+GenliSc5vz5qcFW8KD5r8csI7vQ20qmf837HBTxlQKvD35Pr1ZZb2p+cMyw+nBT4n4HPHG5K/h2lVWdd4JlSwSfE0+It+GU2Oge/5JqoJmH+C8bMOPMTdZ+T+sQHLP6EfEV8MmLeVfE2XYWU+sXknxzeRN7i8PPiWY49RwZpc+j7o1d7xeLHxUtMXCTzkND+aVRAdHfeJNdneglB+/9ADmqMSdZo/ah+dosPIQfpnZly3bF4hcX18xRy1HX4z3IZ4VavJt8UX0DOegv/bpod/grBK1SBHHVQ3MvktRbX97SH/CNy1g0mXkO4tPrdNE81cpI2zxiCnWPIGX+E9At8ov4xYTut3xucmBZk3ztDesNEo/AXdw9BCa9ZcZXiBfICMqoOQak8i9eSTyBcwhryOWQo7V2ElzBXpszfHP6V/A9SSF/kdU58EBOjJTQL+T2LH4F/58ofogx5CJat1yVibzFuHuHdvcrip5MSVFo/9g7l6Qvj2xz+AdF757501TAb7F+UL3uBLzpjXTF8T+Z0pietY0inAuduIPostOrw2PZPowbmGED4MG3WYN0z985Ijwl0+7mI7NLuHETy34biLiFMwi1QjhSeAAAAAElFTkSuQmCC"
                            alt="icon1"
                          />
                        </span>
                        <span
                        onClick={handleFacebookClick}
                        style={{ cursor: "pointer" }}
                        >
                          <img
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMqSURBVHgBtZZLSFRRGMf/33Ucr4jhG0pN7QVSi1pYLabHPqJF1CohLKOirFAkXTmbtBah+YBmUOkJIS1qUeAqqSGVgigEJcnXVJI5aZlzR2fm9N2RfM3MvXfk+oN773n/zznfud/5CAZIOS1SvAQb4nCYCPtA2CaAdLWOgJ/8GhQC3RTEC2Ua79BBM3pjklZlRolInrGgnAe9woIpMILAtyChZW4cd/Cc/sQsnHBOlPEgdsOC4RMYRRB2pZXajAkLQYmlqBcSymAGArWKk6q1hVlUPo/73PgUTITPQ5PPQZejCieeFQ2xrDRZBooKgC1ZEGp6zg8MTYDGPMAn9ypxgds+J5WHCas25UwDDJCbBlQdAU4WAUkJ4fXKPETqpQhmJJQod6l9IclsOCPS5uLwkZPZMCDayfPOz4jeJqowMKGMIRcvySepuXkJlUZEVVqKtUV1yJRzQ1o8qwsiVQ5gQC3U65XHLqP/BnTRWLHKpAJstrDobiOiKgd3RC7v+wpUPAE+jEHMKCBrPLRIlyXst/BRP6rpvpaxKydy+fFmYGQylAwN5fdpe0QEYJNIYC8MkpUcXvZ+eFHUMDyrIonfWw13kFRfsBKfP7xMD0HYqQqv/YyunWySS4NsEbJGa9FZARzYjphofwNx8YGWnYWfV0wxWkifni/ah4vd56C61QMwmf5xbbsTu3OJo4ZemMh8gE/6kM7vROiyBIFX3KoyWptHbyFcnxfSx/YAhRtXDjrKN9Hj7qUVfp/m/zioIxyEy5Ikw/VXwVS0SOOea2mQgkwIFl6B2wNhfwajPkhlWHGiS/I00m8WNXQdmgFvTR0faBG6ndhp3+KPB+vPsG8TWtVESBgOmuVEFdYZ8qMCNfxeFGZmHeRgQ9Vj/bB72+jp/4y0vMbroGss3gTzqVMcVLO8QFrdwqtGg4RamINgL3WTRcPMKEVqzQFZNYsX8xEcwdpx85V7giPL65EqpWi9WPyhMoVC7nyVs7FM4Ac7iCrlF/K9ziWbrsaiOUQHeb1qyFsjmuVx2BLjcYhLbfzk8cMRNQJWC9y8nX3sC3p5l17nWNEz2Eg+6PAPBX8H0uw2Lw0AAAAASUVORK5CYII="
                            alt="icon3"
                          />
                        </span>
                        <span
                        onClick={handleWhatsAppClick}
                        style={{ cursor: "pointer" }}
                        >
                          <img
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAVRSURBVHgBxZhtTFNXGMf/96UvtEDbYRkFxI4I6FDSwgfZiNEFzfiifnAajPGTWYRoxIifTHQx84NRoyYmBkUjWxZ8GYmKKDO6DBOCYhyw6dyQOkHQAlILRQR6296dcxwVKPTFKPyam3PuPefe8z/nPOc5zymHKbA0W/S8j/8aPiyUOVmJD4PE+bg/ZFH+vTm7uWNyITf+ZvGfiw1Kt/IYyX5DLg0+Dh4Z8k8+ybev5YuW9gAh2Q3Z8zkl9yvJpmAGIGLa4cbKpi+bbH4hljsWM6/kf+NkzoyZpcMreC0t1pZ+nt7xIr9nFkRQ5vEe/jua4VLvp+oMsqGTjE0MZod+MiqfibFyrDUSEVpei4K4Ali1VmRps6BT6KDklBjwDOD56HM0uBpww3kDXaNd4X5Sz0lcjkiWVAqE0LU58lsdtxolSSWIEWPgk33okXrwYOgBWQYe6EQdUqNSkRWdhaLEIlx1XEW5vRx2tz30twUuReQ4Th2qIh2FPfP2IN+QD6fHyRq48PICG4XxKDgF8nR52JywGaviViEnOgelT0phG7EFb8ALBR9KhMiJKEsvYyLosK/9ay1O2U8FiKBIsoS6/jps+mcTjnYdxRzlHJxZcAYZURmhmkFIITuTd2KBZgHO9Z5Dia0Eg95BhENlbyW2PN5CZl3AibQTiBPj8N5ClsQuwTrjOjwdfopjz4/5nyepkhCviEcoHg49xMHOg4gVY7Fr7i68t5BiUzFLd/y7gxknyyftwOXMy9hv3o9wqHZUo/l1M1YYViBDkxG5ENrrTG0m7rju4MXoC/ZMxauwIX4Dy1tjrLBoLQiHip4KlubF5iFiIWON3HTe9D/T8Brw3LtX0jRpCIemwSZmW0t1SxGxEDoilPGOiS7d1jetLN852omqviqEw4hvBH1SX1C7mlZIjPDW2dIPjOe0/TRL1cT9JCgSEC69Ui8MCgMiFuKW3f9XmFilbqAO1X3VMCqNOJx6eEIv1bza34HJUOFe2YuIhYw5rBR1YHhyqOsQHg8/RromHeXp5UiLemsrRaYiVGVWoTS5NGAaElWJ6HH3IGIhj4YesTQ7OjugjM75trZtuDd4jzVQubASlz6/hI2fbsQn4icojC/E9qTt/vrpUekwKoxsX4pYSMtQC7P0NXPWQCtoA8qp4W5t28pcOd3YktXJE8rvDt7159cb17O03lU/XXMQTN+acsjGt2pygY/8BE5gmxh1Zvdf35/yA7SXF19eROtwKxNuG7bhpP0kbjlvsfJEZSL2ztsLu2THgc4DNEQM/IiMGhFBqB+oR3FiMcxqc7BqzAjpZkev8VDDpfsM9T1lL8r83nkqgrr45frlLL326hoiJUGZgOPzjzN/RMOG2le1QesHHZF8fT5LG12NyNRkYpl+GTPU647r6Ja6p30vNyYXu1N2w6Qy4YrjCgsbQjGtELrP0IiLznvt4loWlY1BI7Db/bfRONjIdmY673RVLIpehAJDAfSiHkO+IRzpOsLCh3CgQiRM0ysKnWfqXWte1rDGTUoTCo2FbNrGpm48Lo8L53vPo6K7Ag6PA+FATpPDIunNM27igY9BndTZ7rNs96VLWZbfWXuNowbJqmR2mVVmCLwAp+TEk5EnaBtuC2qUUyGIQidHz7mCV3hK7vWYHVyiR5zL01MW6W0FZo+fG3MbXWz5+kTfPpJ0YOZpJ8HW9zTDhLBR4eQVxFTaMXM8k93yyobshg6/EEpTTpNNwSu+ItkfiCAPPhYc3pDt48coZZRl7J+At4+nILc51zzqGc0hrjmLvKTAB4DENRI56P8dLUb/Umet659c/h9nj/9iX33whgAAAABJRU5ErkJggg=="
                            alt="icon4"
                          />
                        </span>
                      </div>
    </>
  )
}

export default ShareIcons