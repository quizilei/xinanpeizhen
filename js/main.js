// 简单的JavaScript交互
document.addEventListener('DOMContentLoaded', function() {
    // 在页面加载完成后执行
    console.log('网站加载完成');
    
    // 设置当前活动页面的导航链接高亮
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-left ul li a');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage) {
            link.classList.add('active');
        } else if (currentPage === '' && linkPage === 'index.html') {
            link.classList.add('active');
        }
    });
    
    // 处理登录表单提交
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            console.log('登录表单提交');
            alert('登录成功！');
            window.location.href = 'index.html';
        });
    }
    
    // 处理注册表单提交
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // 简单的密码确认验证
            const password = document.getElementById('new-password').value;
            const confirmPassword = document.getElementById('confirm-password').value;
            
            if (password !== confirmPassword) {
                alert('两次输入的密码不一致，请重新输入！');
                return;
            }
            
            console.log('注册表单提交');
            alert('注册成功！');
            window.location.href = 'login.html';
        });
    }
    
    // 处理预约表单提交
    const appointmentForm = document.getElementById('appointmentForm');
    if (appointmentForm) {
        appointmentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            console.log('预约表单提交');
            alert('预约成功！我们的客服会尽快联系您确认详情。');
            window.location.href = 'index.html';
        });
    }
    
    // 处理联系表单提交
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            console.log('联系表单提交');
            alert('消息已发送！我们会尽快回复您。');
            contactForm.reset();
        });
    }
});
