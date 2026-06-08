const tasksData = [
    { id: "1.1", name: "Постановка задачи", role: "Руководитель", days: 1 },
    { id: "1.1", name: "Постановка задачи", role: "Программист", days: 3 },
    { id: "1.2", name: "Сбор исходных данных", role: "Руководитель", days: 5 },
    { id: "1.2", name: "Сбор исходных данных", role: "Программист", days: 14 },
    { id: "1.3", name: "Анализ существующих методов решения задачи и программных средств", role: "Руководитель", days: 0 },
    { id: "1.3", name: "Анализ существующих методов решения задачи и программных средств", role: "Программист", days: 6 },
    { id: "1.4", name: "Обоснование принципиальной необходимости разработки", role: "Руководитель", days: 1 },
    { id: "1.4", name: "Обоснование принципиальной необходимости разработки", role: "Программист", days: 2 },
    { id: "1.5", name: "Определение и анализ требований к программе", role: "Руководитель", days: 1 },
    { id: "1.5", name: "Определение и анализ требований к программе", role: "Программист", days: 3 },
    { id: "1.6", name: "Определение структуры входных и выходных данных", role: "Руководитель", days: 1 },
    { id: "1.6", name: "Определение структуры входных и выходных данных", role: "Программист", days: 5 },
    { id: "1.7", name: "Выбор технических средств и программных средств реализации", role: "Руководитель", days: 1 },
    { id: "1.7", name: "Выбор технических средств и программных средств реализации", role: "Программист", days: 3 },
    { id: "1.8", name: "Согласование и утверждение технического задания", role: "Руководитель", days: 1 },
    { id: "1.8", name: "Согласование и утверждение технического задания", role: "Программист", days: 3 },
    { id: "2.1", name: "Проектирование программной архитектуры", role: "Руководитель", days: 0 },
    { id: "2.1", name: "Проектирование программной архитектуры", role: "Программист", days: 3 },
    { id: "2.2", name: "Техническое проектирование компонентов программы", role: "Руководитель", days: 0 },
    { id: "2.2", name: "Техническое проектирование компонентов программы", role: "Программист", days: 7 },
    { id: "3.1", name: "Программирование модулей в выбранной среде программирования", role: "Руководитель", days: 0 },
    { id: "3.1", name: "Программирование модулей в выбранной среде программирования", role: "Программист", days: 13 },
    { id: "3.2", name: "Тестирование программных модулей", role: "Руководитель", days: 0 },
    { id: "3.2", name: "Тестирование программных модулей", role: "Программист", days: 21 },
    { id: "3.3", name: "Сборка и испытание программы", role: "Руководитель", days: 2 },
    { id: "3.3", name: "Сборка и испытание программы", role: "Программист", days: 5 },
    { id: "3.4", name: "Анализ результатов испытаний", role: "Руководитель", days: 1 },
    { id: "3.4", name: "Анализ результатов испытаний", role: "Программист", days: 5 },
    { id: "4.1", name: "Проведение расчетов показателей безопасности жизнедеятельности", role: "Руководитель", days: 0 },
    { id: "4.1", name: "Проведение расчетов показателей безопасности жизнедеятельности", role: "Программист", days: 3 },
    { id: "4.2", name: "Проведение экономических расчетов", role: "Руководитель", days: 0 },
    { id: "4.2", name: "Проведение экономических расчетов", role: "Программист", days: 4 },
    { id: "4.3", name: "Оформление пояснительной записки", role: "Руководитель", days: 5 },
    { id: "4.3", name: "Оформление пояснительной записки", role: "Программист", days: 15 }
];

document.addEventListener("DOMContentLoaded", function() {
    const acceptCheckbox = document.getElementById("acceptCheckbox");
    const proceedBtn = document.getElementById("proceedBtn");

    if (acceptCheckbox && proceedBtn) {
        acceptCheckbox.addEventListener("change", function() {
            proceedBtn.disabled = !this.checked;
        });
    }

    initScheduleTable();
    calculateAll();
    
    const content = document.getElementById('appContent');
    if (content) {
        content.classList.add('app-content-shifted');
    }
    const openBtn = document.getElementById('navOpenBtn');
    if (openBtn) {
        openBtn.style.display = 'none';
    }
});

function acceptEula() {
    const eulaModal = document.getElementById("eulaModal");
    const appContent = document.getElementById("appContent");
    if (eulaModal) eulaModal.style.display = "none";
    if (appContent) appContent.classList.remove("app-hidden");
    
    const nav = document.getElementById('sideNav');
    const openBtn = document.getElementById('navOpenBtn');
    if (nav && nav.classList.contains('collapsed') && openBtn) {
        openBtn.style.display = 'flex';
    }
}

function rejectEula() {
    const modal = document.getElementById('eulaModal');
    if (modal) modal.style.display = 'none';
    
    const warningDiv = document.createElement('div');
    warningDiv.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(20, 0, 30, 0.95);
        border: 2px solid #ff3860;
        border-radius: 12px;
        padding: 30px;
        text-align: center;
        z-index: 10000;
        box-shadow: 0 0 40px rgba(255, 56, 96, 0.5);
        backdrop-filter: blur(10px);
        animation: fadeIn 0.3s ease;
    `;
    
    warningDiv.innerHTML = `
        <h3 style="color: #ff3860; text-shadow: 0 0 10px #ff3860; margin-bottom: 15px;">⚠ ДОСТУП ЗАПРЕЩЕН</h3>
        <p style="color: #c0c0e0; margin-bottom: 20px;">Для использования расчетного комплекса<br>необходимо принять лицензионное соглашение.</p>
        <button onclick="this.parentElement.remove(); document.getElementById('eulaModal').style.display='flex';" 
                style="background: #ff3860; color: #fff; border: none; padding: 10px 25px; border-radius: 6px; cursor: pointer; font-weight: bold; box-shadow: 0 0 15px rgba(255, 56, 96, 0.5);">
            ВЕРНУТЬСЯ К СОГЛАШЕНИЮ
        </button>
    `;
    
    document.body.appendChild(warningDiv);
    
    setTimeout(() => {
        if (warningDiv.parentElement) {
            warningDiv.remove();
            const modal = document.getElementById('eulaModal');
            if (modal) modal.style.display = 'flex';
        }
    }, 3000);
}

const fadeInStyle = document.createElement('style');
fadeInStyle.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translate(-50%, -50%) scale(0.9); }
        to { opacity: 1; transform: translate(-50%, -50%) scale(1); }
    }
`;
document.head.appendChild(fadeInStyle);

function initScheduleTable() {
    const tbody = document.getElementById("scheduleBody");
    if (!tbody) return;
    
    tbody.innerHTML = "";
    tasksData.forEach((task) => {
        let row = tbody.insertRow();
        row.innerHTML = `
            <td>${task.id}. ${task.name}</td>
            <td>${task.role}</td>
            <td><input type="number" class="task-days" data-role="${task.role}" value="${task.days}" onchange="calculateAll()" min="0"></td>
            <td class="task-start">-</td>
            <td class="task-end">-</td>
        `;
    });
}

function addKtsRow() {
    let table = document.getElementById("ktsTable");
    if (!table) return;
    
    let tbody = table.getElementsByTagName('tbody')[0];
    let row = tbody.insertRow();
    row.innerHTML = `<td><input type="text" value="Дополнительный параметр" class="table-input"></td>
                     <td><input type="number" step="0.01" class="weight" value="0.00" onchange="calculateAll()"></td>
                     <td><input type="number" min="1" max="5" class="p-score" value="4" onchange="calculateAll()"></td>
                     <td><input type="number" min="1" max="5" class="a-score" value="4" onchange="calculateAll()"></td>
                     <td><button class="btn btn-delete" onclick="deleteRow(this)">X</button></td>`;
    calculateAll();
}

function deleteRow(btn) {
    let row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
    calculateAll();
}

function formatDate(date) {
    if (isNaN(date)) return "-";
    let d = date.getDate();
    let m = date.getMonth() + 1;
    let y = date.getFullYear();
    return (d < 10 ? '0' + d : d) + '.' + (m < 10 ? '0' + m : m) + '.' + y;
}

function addDays(date, days) {
    let result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

function getVal(id, def = 0) {
    const el = document.getElementById(id);
    return el ? (parseFloat(el.value) || def) : def;
}

function setVal(id, val) {
    const el = document.getElementById(id);
    if (el) el.innerText = val;
}

function calculateAll() {
    // --- 1. ВЫЧИСЛЕНИЕ КТС (БЛОК 1) ---
    let weights = document.getElementsByClassName("weight");
    let pScores = document.getElementsByClassName("p-score");
    let aScores = document.getElementsByClassName("a-score");

    let j_etu1 = 0, j_etu2 = 0;
    let sumWeight = 0;
    let isScoreValid = true;

    for (let i = 0; i < weights.length; i++) {
        let w = parseFloat(weights[i].value) || 0;
        let p = parseFloat(pScores[i].value) || 0;
        let a = parseFloat(aScores[i].value) || 0;
        
        sumWeight += w;
        if (p > 5 || p < 1 || a > 5 || a < 1) {
            isScoreValid = false;
        }
    }

    let errorBox = document.getElementById("kts-error-box");
    if (!errorBox) {
        errorBox = document.createElement("div");
        errorBox.id = "kts-error-box";
        errorBox.style.color = "#ff3860";
        errorBox.style.backgroundColor = "rgba(255, 56, 96, 0.1)";
        errorBox.style.border = "1px solid #ff3860";
        errorBox.style.padding = "10px";
        errorBox.style.borderRadius = "5px";
        errorBox.style.marginBottom = "15px";
        errorBox.style.display = "none";
        
        let table = document.getElementById("ktsTable");
        table.parentNode.insertBefore(errorBox, table);
    }

    let errors = [];
    if (sumWeight > 1.001) {
        errors.push(`• Ошибка: Сумма весовых коэффициентов превышает 1.0! (Текущая сумма: <b>${sumWeight.toFixed(2)}</b>)`);
    }
    if (!isScoreValid) {
        errors.push(`• Ошибка: Экспертные оценки (Проект и Аналог) должны быть строго в диапазоне <b>от 1 до 5</b>!`);
    }

    let ak = 1.0;

    if (errors.length > 0) {
        errorBox.innerHTML = errors.join("<br>");
        errorBox.style.display = "block";
        setVal("j_etu1", "Ошибка");
        setVal("j_etu2", "Ошибка");
        setVal("ak_val", "Ошибка");
    } else {
        errorBox.style.display = "none";
        
        for (let i = 0; i < weights.length; i++) {
            let w = parseFloat(weights[i].value) || 0;
            let p = parseFloat(pScores[i].value) || 0;
            let a = parseFloat(aScores[i].value) || 0;
            j_etu1 += w * p;
            j_etu2 += w * a;
        }
        
        ak = j_etu2 > 0 ? (j_etu1 / j_etu2) : 1.0;

        setVal("j_etu1", j_etu1.toFixed(2));
        setVal("j_etu2", j_etu2.toFixed(2));
        setVal("ak_val", ak.toFixed(4));
    }

    // --- 2. РАСЧЕТ КАЛЕНДАРНОГО ГРАФИКА (БЛОК 2) ---
    let startDateEl = document.getElementById("startDate");
    let startStr = startDateEl && startDateEl.value ? startDateEl.value : new Date().toISOString().split('T')[0];
    let stageStartDate = new Date(startStr);

    let inputs = document.getElementsByClassName("task-days");
    let scheduleBody = document.getElementById("scheduleBody");
    let rows = scheduleBody ? scheduleBody.rows : [];

    let totalDurLead = 0;
    let totalDurProg = 0;

    let idx = 0;
    while (idx < inputs.length && rows.length > 0) {
        let currentId = tasksData[idx].id;
        let stageIndices = [];
        
        while (idx < inputs.length && tasksData[idx].id === currentId) {
            stageIndices.push(idx);
            idx++;
        }

        let maxStageEndDate = new Date(stageStartDate);
        let hasAnyDays = false;

        stageIndices.forEach(i => {
            if (!rows[i]) return;
            
            let d = parseInt(inputs[i].value) || 0;
            let role = inputs[i].getAttribute("data-role");

            if (role === "Руководитель") {
                totalDurLead += d;
            } else {
                totalDurProg += d;
            }

            if (d > 0) {
                hasAnyDays = true;
                rows[i].cells[3].innerText = formatDate(stageStartDate);
                let endDate = addDays(stageStartDate, d - 1);
                rows[i].cells[4].innerText = formatDate(endDate);

                if (endDate > maxStageEndDate) {
                    maxStageEndDate = new Date(endDate);
                }
            } else {
                rows[i].cells[3].innerText = "-";
                rows[i].cells[4].innerText = "-";
            }
        });

        if (hasAnyDays) {
            stageStartDate = addDays(maxStageEndDate, 1);
        }
    }

    setVal("total_dur_lead", totalDurLead);
    setVal("total_dur_prog", totalDurProg);

    // --- РАСЧЁТ ТАБЛИЦЫ МАТЕРИАЛОВ ---
    let matQty = document.getElementsByClassName("mat-qty");
    let matPrice = document.getElementsByClassName("mat-price");
    let matSum = document.getElementsByClassName("mat-sum");
    let totalMaterials = 0;

    for (let i = 0; i < matQty.length; i++) {
        let qty = parseFloat(matQty[i].value) || 0;
        let price = parseFloat(matPrice[i].value) || 0;
        let sum = qty * price;
        if (matSum[i]) {
            matSum[i].innerText = sum.toFixed(2);
        }
        totalMaterials += sum;
    }
    setVal("mat_total", totalMaterials.toFixed(2));

    // --- 3. СМЕТА ЗАТРАТ НА РАЗРАБОТКУ И ВНЕДРЕНИЕ (БЛОК 3) ---
    let s_lead = getVal("salary_lead", 0);
    let s_prog = getVal("salary_prog", 0);
    let daysInMonth = getVal("days_in_month", 21);
    
    let wd = getVal("wd_coeff", 0);
    let wc = getVal("wc_coeff", 0);
    let wn = getVal("wn_coeff", 0);
    
    let mat_cost = totalMaterials;
    
    // Расчёт машинного времени
    let pc_hours_per_day = getVal("pc_hours_per_day", 4);
    let hour_cost = getVal("hour_cost", 20);
    let km_coeff = getVal("km_coeff", 1);
    
    let total_machine_hours = pc_hours_per_day * totalDurProg;
    let comp_time_cost = total_machine_hours * hour_cost * km_coeff;
    
    // Обновляем отображаемые значения
    const totalMachineHoursInput = document.getElementById("total_machine_hours");
    if (totalMachineHoursInput) {
        totalMachineHoursInput.value = total_machine_hours;
    }
    const compTimeCostInput = document.getElementById("comp_time_cost");
    if (compTimeCostInput) {
        compTimeCostInput.value = comp_time_cost.toFixed(2);
    }
    
    let pc_cost = getVal("pc_cost", 0);

    let test_task_hours = getVal("test_task_hours", 0);
    let test_task_freq = getVal("test_task_freq", 0);
    
    let fond_eff_days = getVal("fond_eff_days", 247);
    let fond_eff_hours = getVal("fond_eff_hours", 8);
    
    let fond_eff_k = fond_eff_days * fond_eff_hours;
    if (fond_eff_k === 0) fond_eff_k = 1976;
    
    const fondEffInput = document.getElementById("fond_eff_k");
    if (fondEffInput) {
        fondEffInput.value = fond_eff_k;
    }

    let ozp_lead = (s_lead / daysInMonth) * totalDurLead;
    let ozp_prog = (s_prog / daysInMonth) * totalDurProg;
    let total_ozp = ozp_lead + ozp_prog;

    let dzp = total_ozp * wd;
    let soc = (total_ozp + dzp) * wc;
    let nakl = total_ozp * wn;

    let kp_design = total_ozp + dzp + soc + nakl + mat_cost + comp_time_cost;
    let kp_vnedr = pc_cost * ((test_task_hours * test_task_freq) / fond_eff_k);
    let total_k2 = kp_design + kp_vnedr;

    setVal("sm_ozp", total_ozp.toFixed(2));
    setVal("sm_dzp", dzp.toFixed(2));
    setVal("sm_soc", soc.toFixed(2));
    setVal("sm_mat", mat_cost.toFixed(2));
    setVal("sm_comp", comp_time_cost.toFixed(2));
    setVal("sm_nakl", nakl.toFixed(2));
    setVal("sm_total_kp", kp_design.toFixed(2));
    setVal("sm_vnedr", kp_vnedr.toFixed(2));
    setVal("sm_total_k2", total_k2.toFixed(2));

    let total_k1 = getVal("analog_license") + getVal("analog_setup") + getVal("analog_training") + getVal("pc_cost_a");
    setVal("total_k1", total_k1.toFixed(2));

    // --- 4. РАСЧЕТ ТЕКУЩИХ ГОДОВЫХ ЭКСПЛУАТАЦИОННЫХ ЗАТРАТ (БЛОК 4) ---
    let d_pe = getVal("days_p_exp", 0);
    let d_pp = getVal("days_p_prog", 0);
    let d_ae = getVal("days_a_exp", 0);
    let d_ap = getVal("days_a_prog", 0);

    let pc_cost_exp_p = getVal("pc_cost_exp_p", 22500);
    let pc_cost_exp_a = getVal("pc_cost_exp_a", 22500);

    let oklad_op = getVal("oklad_op", 0);
    let oklad_soft = getVal("oklad_soft", 0);
    let tariff = getVal("tariff", 0);
    
    let wd_exp_pct = getVal("wd_exp", 10.0) / 100;
    let rayon = getVal("w_rayon_exp", 1.3);
    let wd_total = wd_exp_pct + (rayon - 1);
    let wc_total = getVal("wc_exp", 30.2) / 100;
    
    let norm_am = getVal("norm_am", 20.0) / 100;
    let c_pi = getVal("k_rem_coeff", 5.0) / 100;
    let mat_pct = getVal("mat_percent", 1.0) / 100;
    let coef_other = getVal("coef_other", 20.0) / 100;

    let pc_power = getVal("pc_power", 0);
    if (pc_power > 10) pc_power = pc_power / 1000;

    let f_eff = getVal("f_eff", 1976);
    if (f_eff <= 1) f_eff = 1976;

    let zp_p = ((d_pe * (oklad_op / daysInMonth)) + (d_pp * (oklad_soft / daysInMonth))) * (1 + wd_total) * (1 + wc_total);
    let zp_a = ((d_ae * (oklad_op / daysInMonth)) + (d_ap * (oklad_soft / daysInMonth))) * (1 + wd_total) * (1 + wc_total);

    let am_p = (pc_cost_exp_p * norm_am * (d_pe + d_pp) * 8) / f_eff;
    let am_a = (pc_cost_exp_a * norm_am * (d_ae + d_ap) * 8) / f_eff;

    let el_p = pc_power * ((d_pe + d_pp) * 8) * tariff;
    let el_a = pc_power * ((d_ae + d_ap) * 8) * tariff;

    let rem_p = (c_pi * pc_cost_exp_p * (d_pe + d_pp) * 8) / f_eff;
    let rem_a = (c_pi * pc_cost_exp_a * (d_ae + d_ap) * 8) / f_eff;

    let mat_p = pc_cost_exp_p * mat_pct;
    let mat_a = pc_cost_exp_a * mat_pct;

    let overhead_p = (zp_p + am_p + el_p + rem_p + mat_p) * coef_other;
    let overhead_a = (zp_a + am_a + el_a + rem_a + mat_a) * coef_other;

    let other_p = overhead_p + mat_p;
    let other_a = overhead_a + mat_a;

    let total_c2 = zp_p + am_p + el_p + rem_p + other_p;
    let total_c1 = zp_a + am_a + el_a + rem_a + other_a;

    setVal("exp_zp_p", zp_p.toFixed(2));
    setVal("exp_zp_a", zp_a.toFixed(2));
    setVal("exp_am_p", am_p.toFixed(2));
    setVal("exp_am_a", am_a.toFixed(2));
    setVal("exp_el_p", el_p.toFixed(2));
    setVal("exp_el_a", el_a.toFixed(2));
    setVal("exp_rem_p", rem_p.toFixed(2));
    setVal("exp_rem_a", rem_a.toFixed(2));
    setVal("exp_other_p", other_p.toFixed(2));
    setVal("exp_other_a", other_a.toFixed(2));
    setVal("exp_total_p", total_c2.toFixed(2));
    setVal("exp_total_a", total_c1.toFixed(2));

    // --- 5. ДИНАМИЧЕСКИЙ РАСЧЕТ ИТОГОВЫХ ПОКАЗАТЕЛЕЙ (БЛОК 5) ---
    let en = getVal("en_coeff", 0.33);
    let n = getVal("volume_n", 1);

    let z1 = total_c1 + en * total_k1;
    let z2 = total_c2 + en * total_k2;

    let effect = (errors.length > 0) ? 0 : (z1 * ak - z2) * n;

    let t_ok = effect > 0 ? (total_k2 / effect) : 0;
    let e_f = t_ok > 0 ? (1 / t_ok) : 0;

    setVal("res_k2", total_k2.toLocaleString('ru-RU', {minimumFractionDigits: 2, maximumFractionDigits: 2}));
    setVal("res_c2", total_c2.toLocaleString('ru-RU', {minimumFractionDigits: 2, maximumFractionDigits: 2}));
    const resEffect = document.getElementById("res_effect");
    if (resEffect) {
        resEffect.innerText = effect.toLocaleString('ru-RU', {minimumFractionDigits: 2, maximumFractionDigits: 2});
        resEffect.style.color = effect >= 0 ? "#fff" : "#ff3860";
    }
    setVal("res_ef", e_f.toLocaleString('ru-RU', {minimumFractionDigits: 2, maximumFractionDigits: 2}));
    setVal("res_tok", t_ok > 0 ? t_ok.toLocaleString('ru-RU', {minimumFractionDigits: 2, maximumFractionDigits: 2}) : "—");

    let verdictBox = document.getElementById("verdictBox");
    if (verdictBox) {
        if (errors.length > 0) {
            verdictBox.className = "verdict";
            verdictBox.style.backgroundColor = "rgba(255, 56, 96, 0.15)";
            verdictBox.style.color = "#ffb3b3";
            verdictBox.style.border = "1px solid rgba(255, 56, 96, 0.4)";
            verdictBox.innerHTML = `ВНИМАНИЕ:<br>Исправьте ошибки заполнения параметров КТС на вкладке 1 для проведения итоговой экспертизы.`;
        } else if (effect > 0 && e_f >= en) {
            verdictBox.className = "verdict success";
            verdictBox.innerHTML = `▶ ЗАКЛЮЧЕНИЕ ЭКСПЕРТНОЙ СИСТЕМЫ ◀<br><br>
            СТАТУС: <span style="color:#09c372;text-shadow:0 0 10px #09c372;">СОБСТВЕННАЯ РАЗРАБОТКА ЭФФЕКТИВНА</span><br><br>
            ▸ Фактический коэффициент эффективности E<sub>ф</sub> = <span style="color:#fff;text-shadow:0 0 10px #fff;">${e_f.toFixed(2)}</span><br>
            ▸ Нормативный коэффициент E<sub>н</sub> = <span style="color:#ffb347;">${en}</span><br>
            ▸ Срок окупаемости: <span style="color:#00f0ff;text-shadow:0 0 10px #00f0ff;">${t_ok.toFixed(2)} года</span><br><br>
            <span style="font-size:12px;color:#a0a0c0;">/// Превышение норматива подтверждено. Проект рекомендуется к внедрению.</span>`;
        } else {
            verdictBox.className = "verdict";
            verdictBox.style.backgroundColor = "rgba(255, 56, 96, 0.15)";
            verdictBox.style.color = "#ffb3b3";
            verdictBox.style.border = "1px solid rgba(255, 56, 96, 0.4)";
            verdictBox.innerHTML = `▶ ЗАКЛЮЧЕНИЕ ЭКСПЕРТНОЙ СИСТЕМЫ ◀<br><br>
            СТАТУС: <span style="color:#ff6b6b;text-shadow:0 0 10px #ff6b6b;">ЭФФЕКТИВНОСТЬ НИЖЕ НОРМАТИВА</span><br><br>
            ▸ Фактический коэффициент эффективности E<sub>ф</sub> = <span style="color:#fff;text-shadow:0 0 10px #fff;">${e_f.toFixed(2)}</span><br>
            ▸ Нормативный коэффициент E<sub>н</sub> = <span style="color:#ffb347;">${en}</span><br>
            ▸ Срок окупаемости: <span style="color:#ff6b6b;text-shadow:0 0 10px #ff6b6b;">${t_ok.toFixed(2)} года</span><br><br>
            <span style="font-size:12px;color:#a0a0c0;">/// Рекомендуется рассмотреть покупку готового решения.</span>`;
        }
    }
}

// --- ФУНКЦИИ ДЛЯ ТАБЛИЦЫ МАТЕРИАЛОВ ---
function addMaterialRow() {
    let tbody = document.getElementById("materialsTable")?.getElementsByTagName('tbody')[0];
    if (!tbody) return;
    
    let row = tbody.insertRow();
    row.innerHTML = `
        <td><input type="text" value="Новый материал" class="table-input" onchange="calculateAll()"></td>
        <td><input type="text" value="шт." class="table-input" onchange="calculateAll()"></td>
        <td><input type="number" step="1" class="mat-qty" value="1" onchange="calculateAll()"></td>
        <td><input type="number" step="0.01" class="mat-price" value="0" onchange="calculateAll()"></td>
        <td class="mat-sum">0.00</td>
        <td><button class="btn btn-delete" onclick="deleteMaterialRow(this)">X</button></td>
    `;
    calculateAll();
}

function deleteMaterialRow(btn) {
    let row = btn.closest('tr');
    let tbody = row.parentNode;
    if (tbody.getElementsByTagName('tr').length > 1) {
        row.remove();
        calculateAll();
    } else {
        alert("Должна остаться хотя бы одна строка в таблице материалов.");
    }
}

// --- НАВИГАЦИЯ ---
function toggleNav() {
    const nav = document.getElementById('sideNav');
    const openBtn = document.getElementById('navOpenBtn');
    const content = document.getElementById('appContent');
    
    if (nav) nav.classList.toggle('collapsed');
    
    if (nav && nav.classList.contains('collapsed')) {
        if (openBtn) openBtn.style.display = 'flex';
        if (content) content.classList.remove('app-content-shifted');
    } else {
        if (openBtn) openBtn.style.display = 'none';
        if (content) content.classList.add('app-content-shifted');
    }
}

function returnToLicense() {
    const appContent = document.getElementById('appContent');
    if (appContent) appContent.classList.add('app-hidden');
    
    const eulaModal = document.getElementById('eulaModal');
    if (eulaModal) eulaModal.style.display = 'flex';
    
    const checkbox = document.getElementById('acceptCheckbox');
    const proceedBtn = document.getElementById('proceedBtn');
    if (checkbox) checkbox.checked = false;
    if (proceedBtn) proceedBtn.disabled = true;
}

function scrollToBlock(blockId) {
    const block = document.getElementById(blockId);
    if (block) {
        block.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Отслеживание скролла для подсветки
window.addEventListener('scroll', () => {
    const blocks = document.querySelectorAll('.tab-content');
    const navLinks = document.querySelectorAll('.nav-list a');
    
    let current = '';
    
    blocks.forEach(block => {
        const blockTop = block.offsetTop;
        if (pageYOffset >= blockTop - 100) {
            current = block.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});