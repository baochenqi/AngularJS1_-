
function route($routeProvider){
	$routeProvider
        .when('/',{
            templateUrl:'view/updateInfo.html',
            //template:'tes',
            controller:'tes'
        }) 
        .when('/jianjie',{
            templateUrl:'view/intro.html',
            controller:'tes'
        })
        .when('/xinxi',{
            templateUrl:'view/info.html',
            controller:'tes'
        })
        .when('/caozuo',{
            //templateUrl:'',
        })
        .when('/lanmu',{
            //templateUrl:'',
        })
        .when('/more',{
            //templateUrl:'',
        })
        .otherwise({redirectTo:'/'});
}
