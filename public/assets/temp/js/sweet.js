const alertDialog = (title,text,icon,isButton) =>{
    swal({
        title: title,
        text: text,
        icon: icon,
        buttons: isButton,
      })
      .then((willDelete) => {
        if (willDelete) {
          swal("success !", {
            icon: "success",
          });
        } 
      });

}
const alertBasic = (title, text, icon) => {
    swal({
        title: title,
        text: text,
        icon: icon,
      });
}
