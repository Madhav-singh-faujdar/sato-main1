exports.SendHtml = (name, OTP) => {
  return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html
    xmlns="http://www.w3.org/1999/xhtml"
    xmlns:o="urn:schemas-microsoft-com:office:office"
  >
    <head>
      <meta charset="UTF-8" />
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="x-apple-disable-message-reformatting" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta content="telephone=no" name="format-detection" />
      <title></title>
      <link
        href="https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap"
        rel="stylesheet"
      />
  
      <style>
        /* CONFIG STYLES Please do not delete and edit CSS styles below */
        /* IMPORTANT THIS STYLES MUST BE ON FINAL EMAIL */
        #outlook a {
          padding: 0;
        }
  
        .es-button {
          mso-style-priority: 100 !important;
          text-decoration: none !important;
        }
  
        a[x-apple-data-detectors] {
          color: inherit !important;
          text-decoration: none !important;
          font-size: inherit !important;
          font-family: inherit !important;
          font-weight: inherit !important;
          line-height: inherit !important;
        }
  
        .es-desk-hidden {
          display: none;
          float: left;
          overflow: hidden;
          width: 0;
          max-height: 0;
          line-height: 0;
          mso-hide: all;
        }
  
        /*
  END OF IMPORTANT
  */
        body {
          width: 100%;
          /* font-family: "Josefin Sans", helvetica, arial, sans-serif; */
          -webkit-text-size-adjust: 100%;
          -ms-text-size-adjust: 100%;
        }
  
        table {
          mso-table-lspace: 0pt;
          mso-table-rspace: 0pt;
          border-collapse: collapse;
          border-spacing: 0px;
        }
  
        table td,
        body,
        .es-wrapper {
          padding: 0;
          margin: 0;
        }
  
        .es-content,
        .es-header,
        .es-footer {
          table-layout: fixed !important;
          width: 100%;
        }
  
        img {
          display: block;
          border: 0;
          outline: none;
          text-decoration: none;
          -ms-interpolation-mode: bicubic;
        }
  
        p,
        hr {
          margin: 0;
        }
  
        h1,
        h2,
        h3,
        h4,
        h5 {
          margin: 0;
          line-height: 120%;
          mso-line-height-rule: exactly;
          font-family: "Josefin Sans", helvetica, arial, sans-serif;
        }
  
        p,
        ul li,
        ol li,
        a {
          -webkit-text-size-adjust: none;
          -ms-text-size-adjust: none;
          mso-line-height-rule: exactly;
        }
  
        .es-left {
          float: left;
        }
  
        .es-right {
          float: right;
        }
  
        .es-p5 {
          padding: 5px;
        }
  
        .es-p5t {
          padding-top: 5px;
        }
  
        .es-p5b {
          padding-bottom: 5px;
        }
  
        .es-p5l {
          padding-left: 5px;
        }
  
        .es-p5r {
          padding-right: 5px;
        }
  
        .es-p10 {
          padding: 10px;
        }
  
        .es-p10t {
          padding-top: 10px;
        }
  
        .es-p10b {
          padding-bottom: 10px;
        }
  
        .es-p10l {
          padding-left: 10px;
        }
  
        .es-p10r {
          padding-right: 10px;
        }
  
        .es-p15 {
          padding: 15px;
        }
  
        .es-p15t {
          padding-top: 15px;
        }
  
        .es-p15b {
          padding-bottom: 15px;
        }
  
        .es-p15l {
          padding-left: 15px;
        }
  
        .es-p15r {
          padding-right: 15px;
        }
  
        .es-p20 {
          padding: 20px;
        }
  
        .es-p20t {
          padding-top: 20px;
        }
  
        .es-p20b {
          padding-bottom: 20px;
        }
  
        .es-p20l {
          padding-left: 20px;
        }
  
        .es-p20r {
          padding-right: 20px;
        }
  
        .es-p25 {
          padding: 25px;
        }
  
        .es-p25t {
          padding-top: 25px;
        }
  
        .es-p25b {
          padding-bottom: 25px;
        }
  
        .es-p25l {
          padding-left: 25px;
        }
  
        .es-p25r {
          padding-right: 25px;
        }
  
        .es-p30 {
          padding: 30px;
        }
  
        .es-p30t {
          padding-top: 30px;
        }
  
        .es-p30b {
          padding-bottom: 30px;
        }
  
        .es-p30l {
          padding-left: 30px;
        }
  
        .es-p30r {
          padding-right: 30px;
        }
  
        .es-p35 {
          padding: 35px;
        }
  
        .es-p35t {
          padding-top: 35px;
        }
  
        .es-p35b {
          padding-bottom: 35px;
        }
  
        .es-p35l {
          padding-left: 35px;
        }
  
        .es-p35r {
          padding-right: 35px;
        }
  
        .es-p40 {
          padding: 40px;
        }
  
        .es-p40t {
          padding-top: 40px;
        }
  
        .es-p40b {
          padding-bottom: 40px;
        }
  
        .es-p40l {
          padding-left: 40px;
        }
  
        .es-p40r {
          padding-right: 40px;
        }
  
        .es-menu td {
          border: 0;
        }
  
        .es-menu td a img {
          display: inline-block !important;
          vertical-align: middle;
        }
  
        /*
  END CONFIG STYLES
  */
        s {
          text-decoration: line-through;
        }
  
        p,
        ul li,
        ol li {
          /* font-family: "Josefin Sans", helvetica, arial, sans-serif; */
          line-height: 150%;
        }
  
        ul li,
        ol li {
          margin-bottom: 15px;
          margin-left: 0;
        }
  
        a {
          text-decoration: underline;
        }
  
        .es-menu td a {
          text-decoration: none;
          display: block;
          font-family: "Josefin Sans", helvetica, arial, sans-serif;
        }
  
        .es-wrapper {
          width: 100%;
          height: 100%;
          background-repeat: repeat;
          background-position: center top;
        }
  
        .es-wrapper-color,
        .es-wrapper {
          background-color: #fff;
        }
  
        .es-header {
          background-color: transparent;
          background-repeat: repeat;
          background-position: center top;
        }
  
        .es-header-body {
          background-color: #fff;
        }
  
        .es-header-body p,
        .es-header-body ul li,
        .es-header-body ol li {
          color: #f8f9fb;
          font-size: 12px;
        }
  
        .es-header-body a {
          color: #f8f9fb;
          font-size: 12px;
        }
  
        .es-content-body {
          background-color: #fff;
        }
  
        .es-content-body p,
        .es-content-body ul li,
        .es-content-body ol li {
          color: #001523;
          font-size: 16px;
        }
  
        .es-content-body a {
          color: #001523;
          font-size: 16px;
        }
  
        .es-footer {
          background-color: transparent;
          background-repeat: repeat;
          background-position: center top;
        }
  
        .es-footer-body {
          background-color: #fff;
        }
  
        .es-footer-body p,
        .es-footer-body ul li,
        .es-footer-body ol li {
          color: #f8f9fb;
          font-size: 12px;
        }
  
        .es-footer-body a {
          color: #f8f9fb;
          font-size: 12px;
        }
  
        .es-infoblock,
        .es-infoblock p,
        .es-infoblock ul li,
        .es-infoblock ol li {
          line-height: 120%;
          font-size: 12px;
          color: #cccccc;
        }
  
        .es-infoblock a {
          font-size: 12px;
          color: #cccccc;
        }
  
        h1 {
          font-size: 40px;
          font-style: normal;
          font-weight: normal;
          color: #001523;
        }
  
        h2 {
          font-size: 32px;
          font-style: normal;
          font-weight: normal;
          color: #001523;
        }
  
        h3 {
          font-size: 20px;
          font-style: normal;
          font-weight: normal;
          color: #001523;
        }
  
        .es-header-body h1 a,
        .es-content-body h1 a,
        .es-footer-body h1 a {
          font-size: 40px;
        }
  
        .es-header-body h2 a,
        .es-content-body h2 a,
        .es-footer-body h2 a {
          font-size: 32px;
        }
  
        .es-header-body h3 a,
        .es-content-body h3 a,
        .es-footer-body h3 a {
          font-size: 20px;
        }
  
        a.es-button,
        button.es-button {
          display: inline-block;
          background: #f4ac32;
          border-radius: 15px;
          font-size: 18px;
          font-family: "Josefin Sans", helvetica, arial, sans-serif;
          font-weight: normal;
          font-style: normal;
          line-height: 120%;
          color: #ffffff;
          text-decoration: none;
          width: auto;
          text-align: center;
          padding: 10px 20px 10px 20px;
          mso-padding-alt: 0;
          mso-border-alt: 10px solid #f4ac32;
        }
  
        .es-button-border {
          border-style: solid solid solid solid;
          border-color: #2cb543 #2cb543 #2cb543 #2cb543;
          background: #f4ac32;
          border-width: 0px 0px 0px 0px;
          display: inline-block;
          border-radius: 15px;
          width: auto;
        }
  
        .msohide {
          mso-hide: all;
        }
  
        /* RESPONSIVE STYLES Please do not delete and edit CSS styles below. If you don't need responsive layout, please delete this section. */
        @media only screen and (max-width: 600px) {
          p,
          ul li,
          ol li,
          a {
            line-height: 150% !important;
          }
  
          h1,
          h2,
          h3,
          h1 a,
          h2 a,
          h3 a {
            line-height: 120%;
          }
  
          h1 {
            font-size: 30px !important;
            text-align: left;
          }
  
          h2 {
            font-size: 24px !important;
            text-align: left;
          }
  
          h3 {
            font-size: 20px !important;
            text-align: left;
          }
  
          .es-header-body h1 a,
          .es-content-body h1 a,
          .es-footer-body h1 a {
            font-size: 30px !important;
            text-align: left;
          }
  
          .es-header-body h2 a,
          .es-content-body h2 a,
          .es-footer-body h2 a {
            font-size: 24px !important;
            text-align: left;
          }
  
          .es-header-body h3 a,
          .es-content-body h3 a,
          .es-footer-body h3 a {
            font-size: 20px !important;
            text-align: left;
          }
  
          .es-menu td a {
            font-size: 14px !important;
          }
  
          .es-header-body p,
          .es-header-body ul li,
          .es-header-body ol li,
          .es-header-body a {
            font-size: 14px !important;
          }
  
          .es-content-body p,
          .es-content-body ul li,
          .es-content-body ol li,
          .es-content-body a {
            font-size: 14px !important;
          }
  
          .es-footer-body p,
          .es-footer-body ul li,
          .es-footer-body ol li,
          .es-footer-body a {
            font-size: 14px !important;
          }
  
          .es-infoblock p,
          .es-infoblock ul li,
          .es-infoblock ol li,
          .es-infoblock a {
            font-size: 12px !important;
          }
  
          *[class="gmail-fix"] {
            display: none !important;
          }
  
          .es-m-txt-c,
          .es-m-txt-c h1,
          .es-m-txt-c h2,
          .es-m-txt-c h3 {
            text-align: center !important;
          }
  
          .es-m-txt-r,
          .es-m-txt-r h1,
          .es-m-txt-r h2,
          .es-m-txt-r h3 {
            text-align: right !important;
          }
  
          .es-m-txt-l,
          .es-m-txt-l h1,
          .es-m-txt-l h2,
          .es-m-txt-l h3 {
            text-align: left !important;
          }
  
          .es-m-txt-r img,
          .es-m-txt-c img,
          .es-m-txt-l img {
            display: inline !important;
          }
  
          .es-button-border {
            display: inline-block !important;
          }
  
          a.es-button,
          button.es-button {
            font-size: 18px !important;
            display: inline-block !important;
          }
  
          .es-adaptive table,
          .es-left,
          .es-right {
            width: 100% !important;
          }
  
          .es-content table,
          .es-header table,
          .es-footer table,
          .es-content,
          .es-footer,
          .es-header {
            width: 100% !important;
            max-width: 600px !important;
          }
  
          .es-adapt-td {
            display: block !important;
            width: 100% !important;
          }
  
          .adapt-img {
            width: 100% !important;
            height: auto !important;
          }
  
          .es-m-p0 {
            padding: 0 !important;
          }
  
          .es-m-p0r {
            padding-right: 0 !important;
          }
  
          .es-m-p0l {
            padding-left: 0 !important;
          }
  
          .es-m-p0t {
            padding-top: 0 !important;
          }
  
          .es-m-p0b {
            padding-bottom: 0 !important;
          }
  
          .es-m-p20b {
            padding-bottom: 20px !important;
          }
  
          .es-mobile-hidden,
          .es-hidden {
            display: none !important;
          }
  
          tr.es-desk-hidden,
          td.es-desk-hidden,
          table.es-desk-hidden {
            width: auto !important;
            overflow: visible !important;
            float: none !important;
            max-height: inherit !important;
            line-height: inherit !important;
          }
  
          tr.es-desk-hidden {
            display: table-row !important;
          }
  
          table.es-desk-hidden {
            display: table !important;
          }
  
          td.es-desk-menu-hidden {
            display: table-cell !important;
          }
  
          .es-menu td {
            width: 1% !important;
          }
  
          table.es-table-not-adapt,
          .esd-block-html table {
            width: auto !important;
          }
  
          table.es-social {
            display: inline-block !important;
          }
  
          table.es-social td {
            display: inline-block !important;
          }
  
          .es-desk-hidden {
            display: table-row !important;
            width: auto !important;
            overflow: visible !important;
            max-height: inherit !important;
          }
  
          .es-m-p5 {
            padding: 5px !important;
          }
  
          .es-m-p5t {
            padding-top: 5px !important;
          }
  
          .es-m-p5b {
            padding-bottom: 5px !important;
          }
  
          .es-m-p5r {
            padding-right: 5px !important;
          }
  
          .es-m-p5l {
            padding-left: 5px !important;
          }
  
          .es-m-p10 {
            padding: 10px !important;
          }
  
          .es-m-p10t {
            padding-top: 10px !important;
          }
  
          .es-m-p10b {
            padding-bottom: 10px !important;
          }
  
          .es-m-p10r {
            padding-right: 10px !important;
          }
  
          .es-m-p10l {
            padding-left: 10px !important;
          }
  
          .es-m-p15 {
            padding: 15px !important;
          }
  
          .es-m-p15t {
            padding-top: 15px !important;
          }
  
          .es-m-p15b {
            padding-bottom: 15px !important;
          }
  
          .es-m-p15r {
            padding-right: 15px !important;
          }
  
          .es-m-p15l {
            padding-left: 15px !important;
          }
  
          .es-m-p20 {
            padding: 20px !important;
          }
  
          .es-m-p20t {
            padding-top: 20px !important;
          }
  
          .es-m-p20r {
            padding-right: 20px !important;
          }
  
          .es-m-p20l {
            padding-left: 20px !important;
          }
  
          .es-m-p25 {
            padding: 25px !important;
          }
  
          .es-m-p25t {
            padding-top: 25px !important;
          }
  
          .es-m-p25b {
            padding-bottom: 25px !important;
          }
  
          .es-m-p25r {
            padding-right: 25px !important;
          }
  
          .es-m-p25l {
            padding-left: 25px !important;
          }
  
          .es-m-p30 {
            padding: 30px !important;
          }
  
          .es-m-p30t {
            padding-top: 30px !important;
          }
  
          .es-m-p30b {
            padding-bottom: 30px !important;
          }
  
          .es-m-p30r {
            padding-right: 30px !important;
          }
  
          .es-m-p30l {
            padding-left: 30px !important;
          }
  
          .es-m-p35 {
            padding: 35px !important;
          }
  
          .es-m-p35t {
            padding-top: 35px !important;
          }
  
          .es-m-p35b {
            padding-bottom: 35px !important;
          }
  
          .es-m-p35r {
            padding-right: 35px !important;
          }
  
          .es-m-p35l {
            padding-left: 35px !important;
          }
  
          .es-m-p40 {
            padding: 40px !important;
          }
  
          .es-m-p40t {
            padding-top: 40px !important;
          }
  
          .es-m-p40b {
            padding-bottom: 40px !important;
          }
  
          .es-m-p40r {
            padding-right: 40px !important;
          }
  
          .es-m-p40l {
            padding-left: 40px !important;
          }
        }
  
        /* END RESPONSIVE STYLES */
        html,
        body {
          /* font-family: arial, "helvetica neue", helvetica, sans-serif; */
        }
  
        .es-p-default {
          padding-top: 20px;
          padding-right: 40px;
          padding-bottom: 0px;
          padding-left: 40px;
        }
  
        .es-p-all-default {
          padding: 0px;
        }
      </style>
    </head>
  
    <body data-new-gr-c-s-loaded="14.1117.0" style='font-family: "Josefin Sans", helvetica, arial, sans-serif;'>
      <div class="es-wrapper-color" style="padding: 30px">
        <!--[if gte mso 9]>
          <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
            <v:fill type="tile" color="#e1ecf7"></v:fill>
          </v:background>
        <![endif]-->
        <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0">
          <tbody>
            <tr>
              <td class="esd-email-paddings" valign="top">
                <table
                  cellpadding="0"
                  cellspacing="0"
                  class="esd-header-popover es-header"
                  align="center"
                >
                  <tbody>
                    <tr>
                      <td class="esd-stripe" align="center">
                        <table
                          bgcolor="#fff"
                          class="es-header-body"
                          align="center"
                          cellpadding="0"
                          cellspacing="0"
                          width="600"
                        >
                          <tbody>
                            <tr>
                              <td
                                class="esd-structure"
                                align="left"
                                
                              >
                                <table
                                  cellpadding="0"
                                  cellspacing="0"
                                  width="100%"
                                >
                                  <tbody>
                                    <tr>
                                      <td
                                        width="520"
                                        align="left"
                                        class="esd-container-frame"
                                      >
                                        <table
                                          cellpadding="0"
                                          cellspacing="0"
                                          width="100%"
                                        >
                                          <tbody>
                                            <tr>
                                              <td
                                                align="center"
                                                class="esd-block-text es-p15t es-m-txt-c"
                                                background="#ffffff"
                                                style="
                                                  background: #ffffff;
                                                  background-repeat: no-repeat;
                                                  background-position: center top;
                                                "
                                              >
  
                                                <!-- <p style="font-size: 22px;color: #e1ecf7; margin:0px;"
                                                  >Sato OTP</p -->
                                                <!-- > -->
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table
                  cellpadding="0"
                  cellspacing="0"
                  class="es-content"
                  align="center"
                >
                  <tbody>
                    <tr>
                      <td class="esd-stripe" align="center">
                        <table
                          bgcolor="#f8f9fb"
                          class="es-content-body"
                          align="center"
                          cellpadding="0"
                          cellspacing="0"
                          width="600"

                          style='padding:20px;'
                        >
                          <tbody>
                            <tr>
                              <td
                                class="esd-structure es-p40t es-p30b es-p40r es-p40l es-m-p0b"
                                align="left"
                              >
                                <table
                                  cellpadding="0"
                                  cellspacing="0"
                                  width="100%"
                                >
                                  <tbody>
                                    <tr>
                                      <td
                                        width="520"
                                        align="left"
                                        class="esd-container-frame"
                                      >
                                        <table
                                          cellpadding="0"
                                          cellspacing="0"
                                          width="100%"
                                        >
                                          <tbody>
                                            <tr>
                                              <td
                                                align="left"
                                                class="esd-block-text"
                                              >
                                               
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                            <tr>
                              <td
                                class="esd-structure es-p30b es-p40r es-p40l"
                                align="left"
                              >
                                <table
                                  cellpadding="0"
                                  cellspacing="0"
                                  width="100%"
                                >
                                  <tbody>
                                    <tr>
                                      <td
                                        width="520"
                                        class="esd-container-frame"
                                        align="center"
                                        valign="top"
                                      >
                                        <table
                                          cellpadding="0"
                                          cellspacing="0"
                                          width="100%"
                                        >
                                          <tbody>
                                            <tr>
                                              <td
                                                align="left"
                                                class="esd-block-text"
                                              >
                                              <p style="margin-bottom: 10px;font-weight: bolder;"> Dear ${name} </p>
  
                                                
  <br>
                                                <p style="margin-bottom: 10px;"
                                                  > Use OTP <span style = "font-weight: bolder;"> ${OTP} </span> + to signup into your Sato account. Do not share the OTP or your number with anyone including sato personnel.</p>
                                              
                                            
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table
                  cellpadding="0"
                  cellspacing="0"
                  class="es-footer esd-footer-popover"
                  align="center"
                >
                  <tbody>
                    <tr>
                      <td class="esd-stripe" align="center">
                        <table
                          bgcolor="#fff"
                          class="es-footer-body"
                          align="center"
                          cellpadding="0"
                          cellspacing="0"
                          width="600"
                        >
                          <tbody>
                            <tr>
                              <td
                                class="esd-structure es-p30t es-p30b es-p40r es-p40l"
                                align="left"
                                style="
                                  background-repeat: no-repeat;
                                  background-position: center top;
                                "
                              >
                                <table
                                  cellpadding="0"
                                  cellspacing="0"
                                  width="100%"
                                >
                                  <tbody>
                                    <tr>
                                      <td
                                        width="520"
                                        align="left"
                                        class="esd-container-frame"
                                      >
                                        <table
                                          cellpadding="0"
                                          cellspacing="0"
                                          width="100%"
                                        >
                                          <tbody>
                                            <tr>
                                              <td
                                                align="center"
                                                class="esd-block-text es-p5t es-p15b " 
                                                style="font-size: 18px;height:100px;"
                                              >
                                                <p style="color: #e1ecf7; font-size: large;">Contact number: +91-9999517165</p>
                                              </td>
                                            </tr>
                                           
                                          </tbody>
                                        </table>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </body>
  </html>
`

};