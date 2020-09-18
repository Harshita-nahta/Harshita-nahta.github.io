$(document).ready(()=>{
  $('.div1')
  		.css('font-size', '100px')
      .css('text-align', 'center')
      .text('Hii!')
      .addClass('centered')
      .fadeOut(2000)
      .fadeIn(2000)
      .fadeOut(2500,()=>{
              $('.div1')
                .css('font-size', '40px')
                .text('I am Harshita!')
                .fadeIn(1500,()=>{
                        $('.div2')
                          .css('font-size', '40px')
                          .text('A Girl who <code>')
                          .addClass('typeWriterEffect')
                          .delay(3500)
                          .fadeOut(1500)
                      })
                      .delay(5000)
                      .fadeOut(2500,()=>{
                              $('.div1')
                                .css('font-size', '40px')
                                .text('Here is my portfolio')
                                .fadeIn(1500)
                                .fadeOut(1500)
                                .fadeOut(1500)
                                .fadeOut(3500,()=>{
                                        $('.computer_img')
                                          .fadeOut(1500,()=>{
                                        $('.nav_option')
                                          .addClass('option')
                                          .removeClass('nav_option')
                                        $('.nav_icon_boundary')
                                            .addClass('nav_icon_boundary_view')
                                            .fadeIn(1500)
                                        $('.welcomeMessage')
                                          .css('font-size', '30px')
                                          .text("Harshita's portfolio")
                                          .addClass('welcomeMessageBorder')
                                            })
                                          });
                                        });
                    });
});
