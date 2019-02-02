<template>
<section>
    <head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    </head>
  <div class="footer">
  <br>
  <a href="#/about"><button><h3>Contact</h3></button></a>
   <div class="icon">
      <a href=""><i class="fa fa-instagram"></i></a>
      <a href=""><i class="fa fa-twitter"></i></a>
		</div> 
  </div>
</section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Poppins:500%7CSorts+Mill+Goudy');
* {
  font-family: 'Sorts Mill Goudy', serif;
}
h3, h4, .icon{
  text-align: center;
  letter-spacing: .06em;
  color: #585557;
}
i {
  color: rgb(71, 69, 69);
  padding: 10px;
}
button {
  background-color:white;
  display: block;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 20px;
  width: 150px;
  border-radius:5px;
}
button:hover {
  border:2px solid yellow;
  background-color: #e7e7e7;
}
.footer {
  border-top: solid 1pt black;
}
</style>