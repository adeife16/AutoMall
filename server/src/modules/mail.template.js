const path = require('path')
const dotenv = require('dotenv');
const { sign } = require('crypto');

dotenv.config();

const siteUrl = process.env.SITE_URL;
const logo = path.join(__dirname, '../../public/images/system/logo-2.png');

function signupTemplate(name, token){
    const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <title>Horace SMS</title>
    <style>
    </style>
    </head>
    <body>
        <div style="border-collapse: collapse; width: 100%;">
            <p style="padding: 20px; text-align: left;">
                <svg xmlns:mydata="http://www.w3.org/2000/svg" mydata:contrastcolor="ffffff" mydata:template="Default" mydata:presentation="2.5" mydata:layouttype="undefined" mydata:specialfontid="undefined" mydata:id1="555" mydata:id2="746" mydata:companyname="Horace" mydata:companytagline="" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="height: 30px; wiidth: 200px" viewBox="60 200 430 70" class="">
                <g fill="none" fill-rule="none" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal">
                <g data-paper-data="{&quot;isGlobalGroup&quot;:true,&quot;bounds&quot;:{&quot;x&quot;:64.99999999999999,&quot;y&quot;:209.18860071041755,&quot;width&quot;:420,&quot;height&quot;:51.622798579164936}}">
                <g data-paper-data="{&quot;isPrimaryText&quot;:true}" id="element-id-26074">
                    <path d="M172.39118,229.29277h-25.33273v-20.10417h-11.41446v23.56533h7.9533v4.49214h-7.9533v23.56533h11.41446v-20.10417h25.33273v20.10417h11.34081v-23.56533h-7.9533v-4.49214h7.9533v-23.56533h-11.34081zM139.10516,212.64976h4.49214v16.64301h-4.49214zM139.10516,257.35024v-16.64301h4.49214v16.64301zM180.34448,257.35024h-4.56578v-16.64301h4.56578zM147.05846,237.24607v-4.49214h25.33273v4.49214zM175.7787,212.64976h4.56578v16.64301h-4.56578z" data-paper-data="{&quot;glyphName&quot;:&quot;H&quot;,&quot;glyphIndex&quot;:0,&quot;firstGlyphOfWord&quot;:true,&quot;word&quot;:1}" fill="#009639" fill-rule="nonzero" id="element-id-95375">
                    </path>
                    <path d="M246.18012,232.75393c-0.22092,-1.39919 -0.29457,-2.57746 -0.58913,-3.82937c-2.94567,-11.4881 -13.10821,-19.73596 -25.1118,-19.73596c-12.07723,0 -22.53435,8.24787 -25.1118,20.03053c-0.36821,1.25191 -0.58913,2.43017 -0.58913,3.5348h7.87966c-0.14728,1.47283 -0.14728,2.94567 0,4.49214h-7.80602c0.07364,1.10462 0.14728,1.98832 0.36821,2.87202c2.35653,12.00359 12.88729,20.6933 25.25909,20.6933c12.22451,0 22.38706,-8.32151 25.1118,-19.88325c0.29457,-1.25191 0.51549,-2.43017 0.51549,-3.68208h-7.80602c0.22092,-1.47283 0.22092,-2.94567 0,-4.49214zM220.47918,212.64976c10.30983,0 19.14683,6.99596 21.65065,16.71666h-4.63942c-2.35653,-7.36417 -9.13156,-12.29816 -17.01122,-12.29816c-7.80602,0 -14.65469,4.93399 -17.01122,12.29816h-4.63942c2.50382,-9.7207 11.26717,-16.71666 21.65065,-16.71666zM207.0764,229.36641c2.28289,-5.37584 7.51145,-8.91064 13.40278,-8.91064c5.96497,0 11.11989,3.5348 13.40278,8.91064zM234.83931,232.75393c0.22092,1.54647 0.22092,3.01931 0,4.49214h-28.72024c-0.22092,-1.47283 -0.22092,-2.94567 0,-4.49214zM233.88196,240.70723c-2.28289,5.3022 -7.43781,8.837 -13.40278,8.837c-5.89133,0 -11.11989,-3.5348 -13.40278,-8.837zM220.47918,257.42388c-10.38347,0 -19.14683,-6.99596 -21.65065,-16.71666h4.63942c2.35653,7.36417 9.20521,12.29816 17.01122,12.29816c7.80602,0 14.72833,-4.93399 17.08486,-12.29816h4.56578c-2.50382,9.7207 -11.34081,16.71666 -21.65065,16.71666z" data-paper-data="{&quot;glyphName&quot;:&quot;O&quot;,&quot;glyphIndex&quot;:1,&quot;word&quot;:1}" fill="#009639" fill-rule="nonzero" id="element-id-16943">
                    </path>
                    <path d="M287.93494,240.70723h0.07364c10.23619,-0.36821 15.61203,-8.32151 15.61203,-15.75931c0,-8.61607 -7.14324,-15.75931 -15.75931,-15.75931h-24.89088v7.9533h-7.9533v15.68567h7.9533v4.49214h-7.9533v23.49169h11.34081v-20.10417h6.77503l17.52671,19.51504l0.51549,0.58913h14.50741zM262.97042,257.35024h-4.49214v-16.64301h4.49214zM258.47828,229.36641v-8.837h4.49214v8.837zM266.35793,220.52942h21.50336c2.43017,0 4.34486,1.98832 4.34486,4.4185c0,2.43017 -1.91468,4.4185 -4.34486,4.4185h-21.50336zM266.35793,237.31971v-4.49214h21.50336c4.27122,0 7.80602,-3.5348 7.80602,-7.87966c0,-4.27122 -3.5348,-7.80602 -7.80602,-7.80602h-21.50336v-4.49214h21.50336c6.77503,0 12.29816,5.52312 12.29816,12.29816c0,5.96497 -4.19757,12.00359 -12.29816,12.3718h-7.43781l17.674,20.03053h-5.37584l-11.26717,-12.51908l-6.84867,-7.51145z" data-paper-data="{&quot;glyphName&quot;:&quot;R&quot;,&quot;glyphIndex&quot;:2,&quot;word&quot;:1}" fill="#009639" fill-rule="nonzero" id="element-id-6287">
                    </path>
                    <path d="M350.97219,246.23035l-1.98832,-4.63942h8.837l-14.43376,-32.25504l-4.12393,9.64706l-4.19757,-9.79434l-14.28648,32.40233h8.68972l-1.98832,4.56578h-8.68972l-6.48047,14.65469h12.59272l4.78671,-11.19353h18.99955l4.78671,11.19353h12.59272l-6.40682,-14.58105zM317.53888,257.42388l3.46116,-7.80602h5.00763l-3.38752,7.80602zM334.69739,238.12977l4.56578,-10.53076l4.49214,10.53076zM334.99195,217.80467l2.35653,5.44948l-6.40682,14.87561h-4.86035zM333.22455,241.59093h12.00359l1.98832,4.63942l-15.98024,-0.07364zM341.10421,223.25416l2.35653,-5.37584l9.05792,20.25145h-5.00763zM357.37902,249.61787l3.46116,7.73237h-5.08127l-3.31387,-7.73237z" data-paper-data="{&quot;glyphName&quot;:&quot;A&quot;,&quot;glyphIndex&quot;:3,&quot;word&quot;:1}" fill="#009639" fill-rule="nonzero" id="element-id-81024">
                    </path>
                    <path d="M425.27662,228.70364v-11.4881h-8.02694v-8.02694h-14.28648c-11.78266,0 -22.0925,8.02694 -25.03816,19.51504c-1.10462,4.4185 -0.95734,8.76336 0,12.59272c2.94567,11.4881 13.10821,19.51504 25.03816,19.51504h14.28648v-8.02694h8.02694v-11.4881h-11.4881v8.02694h-10.38347c-6.99596,0 -12.59272,-4.27122 -14.28648,-10.75168c-0.58913,-2.57746 -0.58913,-4.93399 0,-7.14324c1.54647,-6.40682 7.36417,-10.75168 14.28648,-10.75168h10.38347v8.02694zM421.81546,220.6767v4.56578h-4.56578v-4.56578zM417.24968,244.75752h4.56578v4.56578h-4.56578zM403.40505,217.21554c-8.61607,0 -15.68567,5.37584 -17.674,13.32914c-0.81006,3.01931 -0.81006,6.03862 0,8.91064c1.91468,7.9533 9.13156,13.32914 17.674,13.32914h10.38347v4.56578h-10.82532c-10.16255,0 -19.14683,-6.92232 -21.65065,-16.86394c-0.8837,-3.75572 -0.8837,-7.43781 0,-10.89896c2.50382,-9.94162 11.4881,-16.93758 21.65065,-16.93758h10.82532v4.56578z" data-paper-data="{&quot;glyphName&quot;:&quot;C&quot;,&quot;glyphIndex&quot;:4,&quot;word&quot;:1}" fill="#009639" fill-rule="nonzero" id="element-id-3365">
                    </path>
                    <path d="M485,209.1886h-40.72383v7.9533h-7.9533v15.61203v0h7.9533v4.49214h-4.49214h-3.46116v15.61203h7.9533v7.9533h40.72383v-11.41446h-37.26268v-8.68972h27.17377v-11.41446h-27.17377v-8.68972h37.26268zM481.53884,212.64976v4.49214h-33.80152v-4.49214zM481.53884,257.35024h-33.80152v-4.49214h33.80152zM439.78403,249.39694v-8.68972h4.49214v8.68972zM471.44994,237.24607h-23.71261v-4.49214h23.71261zM439.78403,229.29277v-8.68972h4.49214v8.68972z" data-paper-data="{&quot;glyphName&quot;:&quot;E&quot;,&quot;glyphIndex&quot;:5,&quot;lastGlyphOfWord&quot;:true,&quot;word&quot;:1}" fill="#009639" fill-rule="nonzero" id="element-id-84854">
                    </path>
                    <g data-paper-data="{&quot;fillRule&quot;:&quot;nonzero&quot;,&quot;fillRuleOriginal&quot;:&quot;nonzero&quot;,&quot;isIcon&quot;:true,&quot;iconStyle&quot;:&quot;icon-in-text&quot;,&quot;selectedEffects&quot;:{&quot;container&quot;:&quot;&quot;,&quot;transformation&quot;:&quot;rotate0;translate95&quot;,&quot;pattern&quot;:&quot;&quot;},&quot;bounds&quot;:{&quot;x&quot;:64.99999999999999,&quot;y&quot;:209.18860071041755,&quot;width&quot;:50.643999344424785,&quot;height&quot;:51.62199933176478},&quot;iconType&quot;:&quot;icon&quot;,&quot;rawIconId&quot;:&quot;61096e3d-2e88-415c-ac92-af248fb5bf05&quot;,&quot;isDetailed&quot;:false,&quot;suitableAsStandaloneIcon&quot;:true}" fill-rule="evenodd" id="element-id-94869">
                    <g data-paper-data="{&quot;isPathIcon&quot;:true}" id="element-id-39625">
                        <path d="M115.644,259.7236c-1.28067,0 -2.23533,-0.33833 -2.864,-1.015c-0.628,-0.677 -1.045,-1.529 -1.251,-2.556c-0.20533,-1.02733 -0.308,-2.133 -0.308,-3.317v-8.519c0,-2.32 -0.544,-4.254 -1.631,-5.801c-1.088,-1.546 -2.544,-2.7 -4.368,-3.462c-1.825,-0.761 -3.849,-1.142 -6.0726,-1.142h-13.3045c-2.1751,0 -3.5165,-1.111 -4.024,-3.335c-0.2417,-0.991 -0.3625,-2.042 -0.3625,-3.154v-10.585c0,-4.35 1.4622,-6.526 4.3865,-6.526v-1.123h-20.8449v1.123c2.2476,0 3.6131,1.185 4.0965,3.553c0.1933,1.039 0.29,2.139 0.29,3.299l-0.0363,36.47c0,2.392 -0.5558,4.12 -1.6676,5.184c-0.6283,0.604 -1.5225,0.906 -2.6826,0.906v1.087h20.8449v-1.087c-2.2235,0 -3.589,-1.184 -4.0965,-3.553c-0.1933,-0.942 -0.29,-1.933 -0.29,-2.973v-10.948c0,-1.135 0.1148,-2.193 0.3444,-3.172c0.2296,-0.978 0.6525,-1.782 1.2688,-2.41c0.6163,-0.629 1.5407,-0.943 2.7733,-0.943h8.918c1.2325,0 2.157,0.314 2.7732,0.943c0.6163,0.628 1.0393,1.432 1.2689,2.41c0.2296,0.979 0.3444,2.037 0.3444,3.172v10.948c0,1.04 -0.1028,2.049 -0.3082,3.028c-0.2054,0.978 -0.6163,1.806 -1.2326,2.483c-0.61627,0.67667 -1.56483,1.015 -2.8457,1.015v1.087h20.8811z" fill="#009639" id="element-id-69719"></path><path d="M111.221,233.8036c-2.19933,0 -4.21133,-0.38067 -6.036,-1.142c-1.824,-0.762 -3.287,-1.916 -4.386,-3.462c-1.0998,-1.547 -1.6496,-3.481 -1.6496,-5.801v-6.561c0,-4.35 -1.4622,-6.526 -4.3865,-6.526v-1.123h20.8811v1.123c-2.272,0 -3.637,1.185 -4.096,3.553c-0.218,1.039 -0.327,2.139 -0.327,3.299z" fill="#101820" id="element-id-43656">
                        </path>
                    </g>
                    </g>
                    </g>
                    </g>
                    </g>
                <rect data-element-id="element-id-26074" stroke-width="2" fill="transparent" class="invisible-element-box grouping-element" x="65" y="209" width="420" height="52" data-element-name="isPrimaryText"></rect>
                <rect data-element-id="element-id-81024" stroke-width="2" fill="transparent" class="invisible-element-box individual-element" x="312" y="209" width="54" height="52"></rect>
                <rect data-element-id="element-id-16943" stroke-width="2" fill="transparent" class="invisible-element-box individual-element" x="195" y="209" width="51" height="52"></rect>
                <rect data-element-id="element-id-6287" stroke-width="2" fill="transparent" class="invisible-element-box individual-element" x="255" y="209" width="51" height="52"></rect>
                <rect data-element-id="element-id-94869" stroke-width="2" fill="transparent" class="invisible-element-box grouping-element" x="65" y="209" width="51" height="52" data-element-name="isIcon"></rect>
                <rect data-element-id="element-id-39625" stroke-width="2" fill="transparent" class="invisible-element-box individual-element" x="65" y="209" width="51" height="52"></rect>
                <rect data-element-id="element-id-69719" stroke-width="2" fill="transparent" class="invisible-element-box individual-element" x="65" y="209" width="51" height="52"></rect>
                <rect data-element-id="element-id-84854" stroke-width="2" fill="transparent" class="invisible-element-box individual-element" x="436" y="209" width="49" height="52"></rect>
                <rect data-element-id="element-id-95375" stroke-width="2" fill="transparent" class="invisible-element-box individual-element" x="136" y="209" width="48" height="52"></rect>
                <rect data-element-id="element-id-3365" stroke-width="2" fill="transparent" class="invisible-element-box individual-element" x="377" y="209" width="48" height="52"></rect>
                <rect data-element-id="element-id-43656" stroke-width="2" fill="transparent" class="invisible-element-box individual-element" x="95" y="209" width="21" height="25"></rect>
            </svg>
            </p>
            <h1 style="padding: 20px; text-align:center; background-color: #009639; color:#fff;">Activate Your Account</h1>
            <p> Dear ${name},</p>
            <p>Thank you for registering with Horace School Management System. To activate your account, please click the button below:</p>
                    <br>
            <p class="text-align:center;">
                <a href="${siteUrl}activate/token/${token}" style="text-decoration: none;color: #fff;padding: 10px 20px;text-decoration: none; background-color: #101820;border-radius: 5px;">ACTIVATE ACCOUNT</a>
            </p>
        <br>
        <p>If you did not sign up for an account with Five Marketplace, please disregard this email.</p>
        </p>
        </div>
    </body>
    </html>`;

    return html;
}

module.exports = {
    signupTemplate: signupTemplate
};