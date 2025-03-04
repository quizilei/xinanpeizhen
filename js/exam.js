document.addEventListener('DOMContentLoaded', function() {
    // 检查类型变更时的动态处理
    const examTypeSelect = document.getElementById('examType');
    const examDetailField = document.getElementById('examDetail');
    
    if (examTypeSelect && examDetailField) {
        examTypeSelect.addEventListener('change', function() {
            let placeholderText = "请详细描述需要预约的检查项目";
            
            switch(this.value) {
                case 'ct':
                    placeholderText = "请说明需要检查的部位，如：头颅CT、胸部CT等";
                    break;
                case 'mri':
                    placeholderText = "请说明需要检查的部位，如：头颅MRI、腰椎MRI等";
                    break;
                case 'ultrasound':
                    placeholderText = "请说明需要做的超声检查，如：腹部超声、心脏超声等";
                    break;
                case 'endoscopy':
                    placeholderText = "请说明需要做的内窥镜检查，如：胃镜、肠镜等";
                    break;
                case 'other':
                    placeholderText = "请详细描述需要预约的检查项目";
                    break;
            }
            
            examDetailField.placeholder = placeholderText;
        });
    }
    
    // 陪检服务选择逻辑
    const needAccompanyRadios = document.querySelectorAll('input[name="needAccompany"]');
    const remarkField = document.getElementById('remarks');
    
    if (needAccompanyRadios.length && remarkField) {
        needAccompanyRadios.forEach(radio => {
            radio.addEventListener('change', function() {
                if (this.value === 'yes') {
                    remarkField.placeholder = "请填写相关病史、检查要求，以及是否需要特殊陪检服务（如轮椅接送等）";
                } else {
                    remarkField.placeholder = "请填写相关病史或检查要求，以及其他需求说明";
                }
            });
        });
    }
    
    // 自动填充联系人信息
    const patientNameField = document.getElementById('patientName');
    const contactNameField = document.getElementById('contactName');
    
    if (patientNameField && contactNameField) {
        patientNameField.addEventListener('change', function() {
            if (!contactNameField.value) {
                contactNameField.value = this.value;
            }
        });
    }
    
    // 验证日期选择
    const examDateInput = document.getElementById('examDate');
    if (examDateInput) {
        const today = new Date().toISOString().split('T')[0];
        examDateInput.setAttribute('min', today);
        
        // 特定检查（如CT、MRI等）自动建议预约日期为3天后
        const suggestDate = (days) => {
            const date = new Date();
            date.setDate(date.getDate() + days);
            return date.toISOString().split('T')[0];
        };
        
        if (examTypeSelect) {
            examTypeSelect.addEventListener('change', function() {
                if (['ct', 'mri', 'endoscopy'].includes(this.value)) {
                    examDateInput.value = suggestDate(3);
                } else {
                    examDateInput.value = suggestDate(1);
                }
            });
        }
    }
});
