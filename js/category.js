        $(function(){

            $('.navhead').hover(function(){

                $('#category-main').stop().slideUp();

                $(this).find('#category-main').stop().slideToggle();

            });

        });

        $(function(){

            $('#category-main > li').mouseenter(function(){

                $(this).find('.gagu').show();

            }).mouseleave(function(){

                $('.gagu').stop().hide();

            });

        });

        $(function(){

            $('#category-main > li').mouseenter(function(){

                $(this).find('.pabric').show();

            }).mouseleave(function(){

                $('.pabric').stop().hide();

            });

        });

        $(function(){

            $('#category-main > li').mouseenter(function(){

                $(this).find('.jubang').show();

            }).mouseleave(function(){

                $('.jubang').stop().hide();

            });

        });

        $(function(){

            $('#category-main > li').mouseenter(function(){

                $(this).find('.sunab').show();

            }).mouseleave(function(){

                $('.sunab').stop().hide();

            });

        });

        $(function(){

            $('#category-main > li').mouseenter(function(){

                $(this).find('.sanghal').show();

            }).mouseleave(function(){

                $('.sanghal').stop().hide();

            });

        });

        $(function(){

            $('#category-main > li').mouseenter(function(){

                $(this).find('.jomung').show();

            }).mouseleave(function(){

                $('.jomung').stop().hide();

            });

        });

        $(function(){

            $('#category-main > li').mouseenter(function(){

                $(this).find('.interia').show();

            }).mouseleave(function(){

                $('.interia').stop().hide();

            });

        });

        $(function(){

            $('#category-main > li').mouseenter(function(){

                $(this).find('.gajeon').show();

            }).mouseleave(function(){

                $('.gajeon').stop().hide();

            });

        });

        $(function(){

            $('#category-main > li').mouseenter(function(){

                $(this).find('.digital').show();

            }).mouseleave(function(){

                $('.digital').stop().hide();

            });

        });

        $(function(){

            $('#category-main > li').mouseenter(function(){

                $(this).find('.camping').show();

            }).mouseleave(function(){

                $('.camping').stop().hide();

            });

        });

        $(function(){

            $('#category-main > li').mouseenter(function(){

                $(this).find('.animal').show();

            }).mouseleave(function(){

                $('.animal').stop().hide();

            });

        });

        $(function(){

            $('#category-main > li').mouseenter(function(){

                $(this).find('.diy').stop().show();

            }).mouseleave(function(){

                $('.diy').stop().hide();

            });

        });

        $(function(){
            $(".categoryParent > li").mouseover(function(){
                $(this).children(".categoryChild").stop().show();

            }).mouseout(function(){
                $(".categoryChild").stop().hide();
            });
        });
