document.addEventListener('DOMContentLoaded', function() {
    // 挂号类型切换时的动态显示或隐藏专家名称字段
    const registerTypeRadios = document.querySelectorAll('input[name="registerType"]');
    const expertNameField = document.getElementById('expertName');
    const expertNameGroup = expertNameField ? expertNameField.closest('.form-group') : null;
    
    if (registerTypeRadios.length && expertNameGroup) {
        registerTypeRadios.forEach(radio => {
            radio.addEventListener('change', function() {
                if (this.value === 'expert' || this.value === 'special') {
                    expertNameGroup.style.display = 'block';
                    expertNameField.setAttribute('required', '');
                } else {
                    expertNameGroup.style.display = 'none';
                    expertNameField.removeAttribute('required');
                    expertNameField.value = '';
                }
            });
        });
        
        // 初始化状态
        const checkedRadio = document.querySelector('input[name="registerType"]:checked');
        if (checkedRadio) {
            if (checkedRadio.value !== 'expert' && checkedRadio.value !== 'special') {
                expertNameGroup.style.display = 'none';
                expertNameField.removeAttribute('required');
            }
        }
    }
    
    // 自动填充联系人为患者姓名
    const patientNameField = document.getElementById('patientName');
    const contactNameField = document.getElementById('contactName');
    
    if (patientNameField && contactNameField) {
        patientNameField.addEventListener('change', function() {
            if (!contactNameField.value) {
                contactNameField.value = this.value;
            }
        });
    }
    
    // 禁止选择过去的日期
    const dateInputs = document.querySelectorAll('input[type="date"]');
    if (dateInputs.length) {
        const today = new Date().toISOString().split('T')[0];
        dateInputs.forEach(input => {
            input.setAttribute('min', today);
        });
    }
    
    // 表单提交前验证
    const bookingForms = document.querySelectorAll('.booking-form');
    bookingForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            // 这里可以添加更多复杂的验证逻辑
            console.log('表单提交前验证通过');
        });
    });
});
