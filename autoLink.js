 function getAutoLink(string) {
                let emailLink_I = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/i;
                let webUrl_I = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i;

                let textSpaceArray = string.split(/[\s]/);
                let textTmpSpaceArray = string.split(/[\s]/);
                let newString = "";

                if (webUrl_I.test(string) === true) {
                    for (let loop = 0; loop < textSpaceArray.length; loop++) {
                        if (webUrl_I.test(textSpaceArray[loop]) === true) {
                            if (emailLink_I.test(textSpaceArray[loop]) === true) {
                                textSpaceArray[loop] = textSpaceArray[loop].replace(emailLink_I, '<a href="mailto:$1">$1</a>');
                            } else {
                                if (textSpaceArray[loop].includes("http") === true) {
                                    textSpaceArray[loop] = textSpaceArray[loop].replace(webUrl_I, '<a href="$&"  target="_blank">$&</a>');
                                } else {
                                    textSpaceArray[loop] = textSpaceArray[loop].replace(webUrl_I, '<a href="//$&"  target="_blank">$&</a>');
                                }
                            }
                        }
                    }

                    let start_msg = string;
                    let end_msg = "";

                    for (let loop = 0; loop < textTmpSpaceArray.length; loop++) {
                        let index = start_msg.indexOf(textTmpSpaceArray[loop]);
                        let length = textTmpSpaceArray[loop].length;
                        end_msg = start_msg.substring(index + length, );
                        start_msg = start_msg.substring(0, index + length);

                        newString += start_msg.replace(textTmpSpaceArray[loop], textSpaceArray[loop]);
                        start_msg = end_msg;
                    }
                } else {
                    newString = string;
                }

                return newString;
            }