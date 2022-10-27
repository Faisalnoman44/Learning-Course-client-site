import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='border border-purple-400 p-4 mb-2'>
                <h3 className='text-2xl font-semibold mb-1'>Q1. what is cors?</h3>
                <p className='text-lg '>Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.An example of a cross-origin request: the front-end JavaScript code served from https://domain-a.com uses XMLHttpRequest to make a request for https://domain-b.com/data.json.For security reasons, browsers restrict cross-origin HTTP requests initiated from scripts. For example, XMLHttpRequest and the Fetch API follow the same-origin policy. This means that a web application using those APIs can only request resources from the same origin the application was loaded from unless the response from other origins includes the right CORS headers.</p>
            </div>
            <div className='border border-purple-400 p-4 mb-2'>
                <div className='mb-3'>
                    <h3 className='text-2xl font-semibold mb-1'> Q2.Why are you using firebase?  What other options do you have to implement authentication? </h3>
                    <p className='text-lg '>Similarly, Firebase is used for many purposes that can help your apps to develop, grow and make it a quality app.
                        <br />Firebase, Backend-as-a-Service (BaaS), is a platform by Google that provides functionalities and helps with the backend development of your Android, iOS, or web and even some products that support Unity3D too.
                        <br />
                        Top functionalities are: <br />
                        1.Firebase Database: The product I have been using from the very first day since it stores data as JSON and synchronized in realtime.<br />
                        2.Firebase Cloud Storage: used to store user-generated content like the profile picture, multimedia messages, etc. <br />
                        3.Firebase Cloud Messaging: used to send notification. <br />
                        4.Firebase Remote Config: I love this product; it actually saved me sometimes from going broke. Here I’ve already written enough about it why I love it since it  allows you to modify the appearance and behavior of your app without letting users download your app. <br />
                        5.Firebase Authentication: it has saved countless hours of my life since it allows to authenticates your app with the users.
                    </p>
                </div>
                <div>
                    <span className='text-2xl font-semibold mb-1'>other options i have to implement authentication</span> <br />
                    <p className='text-lg ' >
                        <span>1.Two-factor/multifactor authentication </span><br />
                        <span>
                            Two-factor authentication (2FA) requires users provide at least one additional authentication factor beyond a password. MFA requires two or more factors. Additional factors can be any of the user authentication types in this article or a one-time password sent to the user via text or email. Factors can include out-of-band authentication, which involves the second factor being on a different channel from the original device to mitigate man-in-the-middle attacks. This authentication type strengthens the security of accounts because attackers need more than just credentials for access. The strength of 2FA relies on the secondary factor. Attackers can easily breach text and email. Using biometrics or push notifications, which require something the user is or has, offers stronger 2FA. Be careful when deploying 2FA or MFA, however, as it can add friction to UX.
                        </span> <br />
                        <span> 2.Biometric authentication</span> <br />
                        <span>Biometrics uses something the user is. It relies less on an easily stolen secret to verify users own an account. Biometric identifiers are unique, making it more difficult to hack accounts using them. <br />

                            Common types of biometrics include the following: <br />

                            Fingerprint scanning verifies authentication based on a user's fingerprints.
                            Facial recognition uses the person's facial characteristics for verification.
                            Iris recognition scans the user's eye with infrared to compare patterns against a saved profile. <br />
                            Behavioral biometrics uses how a person walks, types or handles a device.
                            Users may be familiar with biometrics, making it easier to deploy in an enterprise setting. Many consumer devices feature biometric authentication capabilities, including Windows Hello and Apple's Face ID and Touch ID. A biometric authentication experience is often smoother and quicker because it doesn't require a user to recall a secret or password. It's also harder for attackers to spoof. <br />

                            Technology remains biometrics' biggest drawback. Not every device handles biometrics the same way, if at all. Older devices may only use a saved static image that could be fooled with a picture. Newer software, such as Windows Hello, may require a device to have a camera with near-infrared imaging. This may require heavier upfront costs than other authentication types. Users also must be comfortable sharing their biometric data with companies</span> <br />

                        <span>3. Single sign-on</span> <br />
                        <span>Single sign-on (SSO) enables an employee to use a single set of credentials to access multiple applications or websites. The user has an account with an identity provider (IdP) that is a trusted source for the application (service provider). The service provider doesn't save the password. The IdP tells the site or application via cookies or tokens that the user verified through it. SSO reduces how many credentials a user needs to remember, strengthening security. UX is also improved as users don't have to log in to each account each time they access it, provided they recently authenticated to the IdP. SSO can also help reduce a help desk's time assisting with password issues. This authentication method does mean that, if an IdP suffers a data breach, attackers could gain access to multiple accounts with a single set of credentials. SSO also requires an initial heavy time investment for IT to set up and connect to its various applications and websites.</span> <br />
                        <span>4. Token-based authentication</span> <br />
                        <span>Token authentication enables users to log in to accounts using a physical device, such as a smartphone, security key or smart card. It can be used as part of MFA or to provide a passwordless experience. With token-based authentication, users verify credentials once for a predetermined time period to reduce constant logins.Tokens make it difficult for attackers to gain access to user accounts. Attackers would need physical access to the token and the user's credentials to infiltrate the account.Employees must be trusted to keep track of their tokens, or they may be locked out of accounts. Because users are locked out if they forget or lose the token, companies must plan for a reenrollment process.</span> <br />
                        <span>5.Certificate-based authentication</span><br />
                        <span>Certificate authentication uses digital certificates issued by a certificate authority and public key cryptography to verify user identity. The certificate stores identification information and the public key, while the user has the private key stored virtually.Certificate-based authentication uses SSO. IT can deploy, manage and revoke certificates. This authentication type works well for companies that employ contractors who need network access temporarily.Certificate-based authentication can be costly and time-consuming to deploy. IT must also create a reenrollment process in the event users can't access their keys -- for example, if they are stolen or the device is broken.</span>
                    </p>
                </div>
            </div>
            <div className='border border-purple-400 p-4 mb-2'>
                <h3 className='text-2xl font-semibold mb-1'>Q3.How does the private route work?</h3>
                <p className='text-lg '>The react private route component renders child components (children) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property. The current logged in user (authUser) is retrieved from Redux state with a call to the useSelector() hook. Redux is used in this example however it is not required to implement a Private Route component in React Router 6. You could use a different state management library or any approach you prefer to get the logged in status of the user.</p>
            </div>
            <div className='border border-purple-400 p-4 mb-2'>
                <h3 className='text-2xl font-semibold mb-1'>Q4.What is Node?How does Node work?</h3>
                <div className='text-lg '>
                    <p>Node.js is an open-source, cross-platform JavaScript runtime environment and library for running web applications outside the client's browser. Ryan Dahl developed it in 2009, and its latest iteration, version 15.14, was released in April 2021. Developers use Node.js to create server-side web applications, and it is perfect for data-intensive applications since it uses an asynchronous, event-driven model.</p>
                </div>
                <div>
                    <span className='text-xl font-semibold mb-1'>How does Node work</span>
                    <p className='text-lg '>1. Node.js Architecture: Node.js is made of Chrome V8 engine which is written in C++ and Libuv which is a multi-platform C library that provides support for asynchronous I/O based events on event loops and thread loops. Don’t worry it is explained in this later at the end. An important thing that we need to remember is that, even though Node.js is made using the V8 engine and Libuv which are written in C or C++, we can still use Node.js in pure JavaScript. <br />

                        2. Node.js Application: So now that, we have learned about the Node.js architecture, it’s time to learn how a Node.js application runs and this part includes the concept of Node.js being single-threaded and its non-blocking nature as well. So, first of all, what is a thread? A thread in simple terms is basically a set of programming instructions that can be run independently in a computer’s processor and every process that we want to run has its own thread to run the programming instructions and the process can have more than one thread. But, the point to remember is, Node.js application runs only on a single thread and by that, It mean whether that Node.js application is being used by 5 users or 5 million users, it will only run on a single thread which makes the Node.js application blockable (which means that a single line of code can block the whole app because an only single thread is being used). So, to keep the Node.js application running, asynchronous code must be used everywhere having callback functions because as we know that asynchronous code keeps on running in the background and the callback gets executed as soon as the promise gets resolved rather than synchronous code which blocks the whole application until it gets finished executing. But, we can still use synchronous code however at someplace in our application and that place is before our application enters Event-loop. Event-loop is what allows Node.js applications to run non-blocking asynchronous I/O based operations i.e, all the asynchronous code is managed and executed within the event-loop and before that, we can use our synchronous code which is in this case known as Top-Level code. So, try to write synchronous code only for those operations which are executed only once at the start of our application and not every time, for Ex: reading some data from your computer memory which later can be requested by some user (many times) in asynchronous code. <br />
                        So, as you can see whenever the Node.js application starts in a thread, the first step is to initialize the application and execute the top-level code which as we have said earlier is the only synchronous code that we should have in our application. The next step is to require the modules that we specified in our code (which is normally written at the very top).

                        The very next step is to register all the event callbacks which are in our code which will then be sent to the event-loop for execution where most of our code in node app is executed. But some times, some tasks are too heavy to be executed in our event-loop by a single thread so those tasks are sent to the thread-pool (provided by Libuv) are the 4 extra threads to execute heavier tasks without blocking the main thread. The number of threads can be increased and the user did not have to specify the tasks which have to be off-loaded because event-loop does it all by itself but we can specify the number of threads. <br />

                        3. The Event-loop: So, you need to remember this point that event-loop is the place where all our asynchronous code is executed. For a moment, why don’t you in the first paragraph and read that again because we will be covering the third point of Node.js which is that, it is based on event-driven architecture. The whole idea behind the event-loop is that it works on this architecture or these three steps as shown below:

                        Events are emitted, These events can emit from any asynchronous function like getting an HTTP request, fileSystem module finished reading the file or a timer has been finished. These events can vary on our code.
                        After that, Event-loop picks them up.
                        Callback functions are executed (based on your code). <br />
                        Typically, an event-loop has 4 phases and for each phase, it sets a callback queue that contains callback functions from the emitted event. <br />
                        1.The first phase is the Expired timeout callbacks, which are the callback functions from setTimeout() function etc. <br />
                        2.The second phase is the callbacks from I/O polling like an event of reading a file or any HTTP request. <br />
                        3.The third phase is the callbacks from the setImmediate() function, which are the callback functions that the user wants to execute just after the I/O polling. These type of functions can be specific for some only certain cases. <br />
                        4.And the last is, Close callbacks which are emitted from events like the closing of the webserver, etc.
                    </p>
                </div>
            </div>
        </div >
    );
};

export default Blog;