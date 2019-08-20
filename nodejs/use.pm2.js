/**
 * pm2
 * npm install -g pm2 命令行全局安装 pm
 *
 *
 * 用法
 * pm2 start app.js             启动app项目
 * pm2 list                     列出由pm2管理的所有进程信息，还会显示一个进程会被启动多少次，因为没处理的异常。
 * pm2 monit                    监视每个node进程的CPU和内存的使用情况
 * pm2 logs                     显示所有进程日志
 * pm2 stop all                 停止所有进程
 * pm2 restart all              重启所有进程
 * pm2 reload all               0秒停机重载进程 (用于 NETWORKED 进程)
 * pm2 stop 0                   停止指定的进程
 * pm2 restart 0                重启指定的进程
 * pm2 startup                  产生 init 脚本 保持进程活着
 * pm2 web                      运行健壮的 computer API endpoint (http://localhost:9615)
 * pm2 delete 0                 杀死指定的进程
 * pm2 delete all               杀死全部进程
 *
 *
 * 运行进程的不同方式
 * pm2 start app.js -i max                              根据有效CPU数目启动最大进程数目
 * pm2 start app.js -i 3                                启动3个进程
 * pm2 start app.js -x                                  用fork模式启动 app.js 而不是使用 cluster
 * pm2 start app.js -x -- -a 23                         用fork模式启动 app.js 并且传递参数 (-a 23)
 * pm2 start app.js --name serverone                    启动一个进程并把它命名为 serverone
 * pm2 stop serverone                                   停止 serverone 进程
 * pm2 start app.json                                   启动进程, 在 app.json里设置选项
 * pm2 start app.js -i max -- -a 23                     在--之后给 app.js 传递参数
 * pm2 start app.js -i max -e err.log -o out.log        启动 并 生成一个配置文件
 * pm2 scale <app_name> +1                              即时调整集群
 *
 *
 *配置pm2启动文件
 * 在项目根目录添加一个processes.json：
 * `
     {
      "apps": [
        {
          "name": "mywork",
          "cwd": "/srv/node-app/current",
          "script": "bin/www",
          "log_date_format": "YYYY-MM-DD HH:mm Z",
          "error_file": "/var/log/node-app/node-app.stderr.log",
          "out_file": "log/node-app.stdout.log",
          "pid_file": "pids/node-geo-api.pid",
          "instances": 6,
          "min_uptime": "200s",
          "max_restarts": 10,
          "max_memory_restart": "1M",
          "cron_restart": "1 0 * * *",
          "watch": false,
          "merge_logs": true,
          "exec_interpreter": "node",
          "exec_mode": "fork",
          "autorestart": false,
          "vizion": false
        }
      ]
    }
 * `
 *
 *
 * 参数说明：
 * apps:                json结构，apps是一个数组，每一个数组成员就是对应一个pm2中运行的应用
 * name:                应用程序名称
 * cwd:                 应用程序所在的目录
 * script:              应用程序的脚本路径
 * log_date_format:
 * error_file:          自定义应用程序的错误日志文件
 * out_file:            自定义应用程序日志文件
 * pid_file:            自定义应用程序的pid文件
 * instances:           实例数量
 * min_uptime:          最小运行时间，这里设置的是60s即如果应用程序在60s内退出，pm2会认为程序异常退出，此时触发重启max_restarts设置数量
 * max_restarts:        设置应用程序异常退出重启的次数，默认15次（从0开始计数）
 * max_memory_restart:  最大内存限制数，超出自动重启
 * cron_restart:        定时启动，解决重启能解决的问题
 * watch:               是否启用监控模式，默认是false。如果设置成true，当应用程序变动时，pm2会自动重载。这里也可以设置你要监控的文件。
 * merge_logs:
 * exec_interpreter:    应用程序的脚本类型，这里使用的shell，默认是nodejs
 * exec_mode:           应用程序启动模式，这里设置的是cluster_mode（集群），默认是fork
 * autorestart:         启用/禁用应用程序崩溃或退出时自动重启
 * vizion:              启用/禁用vizion特性(版本控制)
 *
 *
 * 启动
 * 可以通过 pm2 start processes.json 来启动。
 * 也可以把命令写在package.json里。如下:
 * 通过 npm run pm2 来启动。
 *
 *
 * 出处： https://www.jianshu.com/p/d2a640b8661c
 * 使用实例 https://juejin.im/post/5be406705188256dbb5176f9
 * */