<!DOCTYPE html>
<html>

<head>

    <?php include 'head.php'; ?>

</head>

<body>


    <?php include "header.php"; ?>


    <main class="main">

        



        <section class="contact">
            <div class="container py-5">
                <div class="row">
                    <div class="col-md-6 contact-text">
                        <h2>Get in Touch</h2>
                        <p>Feel free to drop a message</p>
                        <div class="img mt-3">
                            <img src="assests/images/contact/Contact Image.svg" alt="" style="opacity: 0.8;">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <form action="" class='contact-form mx-auto p-4 anim-opacity'>
                            <div class="mb-2">
                                <label for="name" class="mb-1">Name</label>
                                <input type="text" id="name" name="name" class="form-control"
                                    placeholder="Enter Your name" required>
                            </div>

                            <div class="mb-2">
                                <label for="email" class="mb-1">Email</label>
                                <input type="email" id="email" name="email" class="form-control"
                                    placeholder="Enter email" required>
                            </div>

                            <div class="mb-2">
                                <label for="message" class="mb-1">Message</label>
                                <textarea id="message" name="message" class="form-control" rows="5"></textarea>
                            </div>

                            <button type="submit" class="btn  form-btn mt-3 w-100">Submit</button>

                        </form>
                    </div>
                </div>
            </div>
        </section>
</main>



    <?php include 'footer.php'; ?>

</body>

</html>