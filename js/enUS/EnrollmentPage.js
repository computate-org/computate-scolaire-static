
// POST //

async function postSchoolEnrollment($formValues, success, error) {
	var vals = {};
	if(success == null) {
		success = function( data, textStatus, jQxhr ) {
			addGlow($formValues.next('button'));
			var url = data['pageUrlPk'];
			if(url)
				window.location.href = url;
		};
	}
	if(error == null) {
		error = function( jqXhr, textStatus, errorThrown ) {
			addError($formValues.next('button'));
		};
	}

	var valuePk = $formValues.find('.valuePk').val();
	if(valuePk != null && valuePk !== '')
		vals['pk'] = valuePk;

	var valueCreated = $formValues.find('.valueCreated').val();
	if(valueCreated != null && valueCreated !== '')
		vals['created'] = valueCreated;

	var valueModified = $formValues.find('.valueModified').val();
	if(valueModified != null && valueModified !== '')
		vals['modified'] = valueModified;

	var valueObjectId = $formValues.find('.valueObjectId').val();
	if(valueObjectId != null && valueObjectId !== '')
		vals['objectId'] = valueObjectId;

	var valueArchived = $formValues.find('.valueArchived').prop('checked');
	if(valueArchived != null && valueArchived !== '')
		vals['archived'] = valueArchived;

	var valueDeleted = $formValues.find('.valueDeleted').prop('checked');
	if(valueDeleted != null && valueDeleted !== '')
		vals['deleted'] = valueDeleted;

	var valuePhoto = $formValues.find('.valuePhoto').val();
	if(valuePhoto != null && valuePhoto !== '')
		vals['photo'] = valuePhoto;

	var valueEnrollmentGroupName = $formValues.find('.valueEnrollmentGroupName').val();
	if(valueEnrollmentGroupName != null && valueEnrollmentGroupName !== '')
		vals['enrollmentGroupName'] = valueEnrollmentGroupName;

	var valueCustomerProfileId = $formValues.find('.valueCustomerProfileId').val();
	if(valueCustomerProfileId != null && valueCustomerProfileId !== '')
		vals['customerProfileId'] = valueCustomerProfileId;

	var valueEnrollmentPaymentComplete = $formValues.find('.valueEnrollmentPaymentComplete').prop('checked');
	if(valueEnrollmentPaymentComplete != null && valueEnrollmentPaymentComplete !== '')
		vals['enrollmentPaymentComplete'] = valueEnrollmentPaymentComplete;

	var valueChildPottyTrained = $formValues.find('.valueChildPottyTrained').prop('checked');
	if(valueChildPottyTrained != null && valueChildPottyTrained !== '')
		vals['childPottyTrained'] = valueChildPottyTrained;

	var valueEnrollmentPaymentEachMonth = $formValues.find('.valueEnrollmentPaymentEachMonth').prop('checked');
	if(valueEnrollmentPaymentEachMonth != null && valueEnrollmentPaymentEachMonth !== '')
		vals['enrollmentPaymentEachMonth'] = valueEnrollmentPaymentEachMonth;

	var valueEnrollmentImmunizations = $formValues.find('.valueEnrollmentImmunizations').prop('checked');
	if(valueEnrollmentImmunizations != null && valueEnrollmentImmunizations !== '')
		vals['enrollmentImmunizations'] = valueEnrollmentImmunizations;

	var valueEnrollmentApproved = $formValues.find('.valueEnrollmentApproved').prop('checked');
	if(valueEnrollmentApproved != null && valueEnrollmentApproved !== '')
		vals['enrollmentApproved'] = valueEnrollmentApproved;

	var valueFamilyMarried = $formValues.find('.valueFamilyMarried').prop('checked');
	if(valueFamilyMarried != null && valueFamilyMarried !== '')
		vals['familyMarried'] = valueFamilyMarried;

	var valueFamilySeparated = $formValues.find('.valueFamilySeparated').prop('checked');
	if(valueFamilySeparated != null && valueFamilySeparated !== '')
		vals['familySeparated'] = valueFamilySeparated;

	var valueFamilyDivorced = $formValues.find('.valueFamilyDivorced').prop('checked');
	if(valueFamilyDivorced != null && valueFamilyDivorced !== '')
		vals['familyDivorced'] = valueFamilyDivorced;

	var valueFamilyAddress = $formValues.find('.valueFamilyAddress').val();
	if(valueFamilyAddress != null && valueFamilyAddress !== '')
		vals['familyAddress'] = valueFamilyAddress;

	var valueEnrollmentSpecialConsiderations = $formValues.find('.valueEnrollmentSpecialConsiderations').val();
	if(valueEnrollmentSpecialConsiderations != null && valueEnrollmentSpecialConsiderations !== '')
		vals['enrollmentSpecialConsiderations'] = valueEnrollmentSpecialConsiderations;

	var valueChildMedicalConditions = $formValues.find('.valueChildMedicalConditions').val();
	if(valueChildMedicalConditions != null && valueChildMedicalConditions !== '')
		vals['childMedicalConditions'] = valueChildMedicalConditions;

	var valueChildPreviousSchoolsAttended = $formValues.find('.valueChildPreviousSchoolsAttended').val();
	if(valueChildPreviousSchoolsAttended != null && valueChildPreviousSchoolsAttended !== '')
		vals['childPreviousSchoolsAttended'] = valueChildPreviousSchoolsAttended;

	var valueFamilyHowDoYouKnowTheSchool = $formValues.find('.valueFamilyHowDoYouKnowTheSchool').val();
	if(valueFamilyHowDoYouKnowTheSchool != null && valueFamilyHowDoYouKnowTheSchool !== '')
		vals['familyHowDoYouKnowTheSchool'] = valueFamilyHowDoYouKnowTheSchool;

	var valueChildDescription = $formValues.find('.valueChildDescription').val();
	if(valueChildDescription != null && valueChildDescription !== '')
		vals['childDescription'] = valueChildDescription;

	var valueChildObjectives = $formValues.find('.valueChildObjectives').val();
	if(valueChildObjectives != null && valueChildObjectives !== '')
		vals['childObjectives'] = valueChildObjectives;

	var valueYearKey = $formValues.find('.valueYearKey').val();
	if(valueYearKey != null && valueYearKey !== '')
		vals['yearKey'] = valueYearKey;

	var valueBlockKeys = [];
	$formValues.find('input.valueBlockKeys:checked').each(function(index) {
		valueBlockKeys.push($(this).val());
	});
	if(valueBlockKeys.length > 0)
		vals['blockKeys'] = valueBlockKeys;

	var valueChildKey = $formValues.find('.valueChildKey').val();
	if(valueChildKey != null && valueChildKey !== '')
		vals['childKey'] = valueChildKey;

	var valueGuardianKeys = [];
	$formValues.find('input.valueGuardianKeys:checked').each(function(index) {
		valueGuardianKeys.push($(this).val());
	});
	if(valueGuardianKeys.length > 0)
		vals['guardianKeys'] = valueGuardianKeys;

	var valueMomKeys = [];
	$formValues.find('input.valueMomKeys:checked').each(function(index) {
		valueMomKeys.push($(this).val());
	});
	if(valueMomKeys.length > 0)
		vals['momKeys'] = valueMomKeys;

	var valueDadKeys = [];
	$formValues.find('input.valueDadKeys:checked').each(function(index) {
		valueDadKeys.push($(this).val());
	});
	if(valueDadKeys.length > 0)
		vals['dadKeys'] = valueDadKeys;

	var valueUserKeys = [];
	$formValues.find('input.valueUserKeys:checked').each(function(index) {
		valueUserKeys.push($(this).val());
	});
	if(valueUserKeys.length > 0)
		vals['userKeys'] = valueUserKeys;

	var valuePaymentKeys = [];
	$formValues.find('input.valuePaymentKeys:checked').each(function(index) {
		valuePaymentKeys.push($(this).val());
	});
	if(valuePaymentKeys.length > 0)
		vals['paymentKeys'] = valuePaymentKeys;

	var valueInheritPk = $formValues.find('.valueInheritPk').val();
	if(valueInheritPk != null && valueInheritPk !== '')
		vals['inheritPk'] = valueInheritPk;

	var valueSessionId = $formValues.find('.valueSessionId').val();
	if(valueSessionId != null && valueSessionId !== '')
		vals['sessionId'] = valueSessionId;

	var valueUserId = $formValues.find('.valueUserId').val();
	if(valueUserId != null && valueUserId !== '')
		vals['userId'] = valueUserId;

	var valueUserKey = $formValues.find('.valueUserKey').val();
	if(valueUserKey != null && valueUserKey !== '')
		vals['userKey'] = valueUserKey;

	var valueObjectTitle = $formValues.find('.valueObjectTitle').val();
	if(valueObjectTitle != null && valueObjectTitle !== '')
		vals['objectTitle'] = valueObjectTitle;

	var valueChildCompleteName = $formValues.find('.valueChildCompleteName').val();
	if(valueChildCompleteName != null && valueChildCompleteName !== '')
		vals['childCompleteName'] = valueChildCompleteName;

	var valueChildCompleteNamePreferred = $formValues.find('.valueChildCompleteNamePreferred').val();
	if(valueChildCompleteNamePreferred != null && valueChildCompleteNamePreferred !== '')
		vals['childCompleteNamePreferred'] = valueChildCompleteNamePreferred;

	var valueChildBirthDate = $formValues.find('.valueChildBirthDate').val();
	if(valueChildBirthDate != null && valueChildBirthDate !== '')
		vals['childBirthDate'] = valueChildBirthDate;

	var valueSchoolAddress = $formValues.find('.valueSchoolAddress').val();
	if(valueSchoolAddress != null && valueSchoolAddress !== '')
		vals['schoolAddress'] = valueSchoolAddress;

	var valueEnrollmentChargeDate = $formValues.find('.valueEnrollmentChargeDate').val();
	if(valueEnrollmentChargeDate != null && valueEnrollmentChargeDate !== '')
		vals['enrollmentChargeDate'] = valueEnrollmentChargeDate;

	var valueEnrollmentParentNames = $formValues.find('.valueEnrollmentParentNames').val();
	if(valueEnrollmentParentNames != null && valueEnrollmentParentNames !== '')
		vals['enrollmentParentNames'] = valueEnrollmentParentNames;

	var valueEnrollmentSignature1 = $formValues.find('.valueEnrollmentSignature1').val();
	if(valueEnrollmentSignature1 != null && valueEnrollmentSignature1 !== '')
		vals['enrollmentSignature1'] = valueEnrollmentSignature1;

	var valueEnrollmentSignature2 = $formValues.find('.valueEnrollmentSignature2').val();
	if(valueEnrollmentSignature2 != null && valueEnrollmentSignature2 !== '')
		vals['enrollmentSignature2'] = valueEnrollmentSignature2;

	var valueEnrollmentSignature3 = $formValues.find('.valueEnrollmentSignature3').val();
	if(valueEnrollmentSignature3 != null && valueEnrollmentSignature3 !== '')
		vals['enrollmentSignature3'] = valueEnrollmentSignature3;

	var valueEnrollmentSignature4 = $formValues.find('.valueEnrollmentSignature4').val();
	if(valueEnrollmentSignature4 != null && valueEnrollmentSignature4 !== '')
		vals['enrollmentSignature4'] = valueEnrollmentSignature4;

	var valueEnrollmentSignature5 = $formValues.find('.valueEnrollmentSignature5').val();
	if(valueEnrollmentSignature5 != null && valueEnrollmentSignature5 !== '')
		vals['enrollmentSignature5'] = valueEnrollmentSignature5;

	var valueEnrollmentSignature6 = $formValues.find('.valueEnrollmentSignature6').val();
	if(valueEnrollmentSignature6 != null && valueEnrollmentSignature6 !== '')
		vals['enrollmentSignature6'] = valueEnrollmentSignature6;

	var valueEnrollmentSignature7 = $formValues.find('.valueEnrollmentSignature7').val();
	if(valueEnrollmentSignature7 != null && valueEnrollmentSignature7 !== '')
		vals['enrollmentSignature7'] = valueEnrollmentSignature7;

	var valueEnrollmentSignature8 = $formValues.find('.valueEnrollmentSignature8').val();
	if(valueEnrollmentSignature8 != null && valueEnrollmentSignature8 !== '')
		vals['enrollmentSignature8'] = valueEnrollmentSignature8;

	var valueEnrollmentSignature9 = $formValues.find('.valueEnrollmentSignature9').val();
	if(valueEnrollmentSignature9 != null && valueEnrollmentSignature9 !== '')
		vals['enrollmentSignature9'] = valueEnrollmentSignature9;

	var valueEnrollmentSignature10 = $formValues.find('.valueEnrollmentSignature10').val();
	if(valueEnrollmentSignature10 != null && valueEnrollmentSignature10 !== '')
		vals['enrollmentSignature10'] = valueEnrollmentSignature10;

	var valueEnrollmentDate1 = $formValues.find('.valueEnrollmentDate1').val();
	if(valueEnrollmentDate1 != null && valueEnrollmentDate1 !== '')
		vals['enrollmentDate1'] = valueEnrollmentDate1;

	var valueEnrollmentDate2 = $formValues.find('.valueEnrollmentDate2').val();
	if(valueEnrollmentDate2 != null && valueEnrollmentDate2 !== '')
		vals['enrollmentDate2'] = valueEnrollmentDate2;

	var valueEnrollmentDate3 = $formValues.find('.valueEnrollmentDate3').val();
	if(valueEnrollmentDate3 != null && valueEnrollmentDate3 !== '')
		vals['enrollmentDate3'] = valueEnrollmentDate3;

	var valueEnrollmentDate4 = $formValues.find('.valueEnrollmentDate4').val();
	if(valueEnrollmentDate4 != null && valueEnrollmentDate4 !== '')
		vals['enrollmentDate4'] = valueEnrollmentDate4;

	var valueEnrollmentDate5 = $formValues.find('.valueEnrollmentDate5').val();
	if(valueEnrollmentDate5 != null && valueEnrollmentDate5 !== '')
		vals['enrollmentDate5'] = valueEnrollmentDate5;

	var valueEnrollmentDate6 = $formValues.find('.valueEnrollmentDate6').val();
	if(valueEnrollmentDate6 != null && valueEnrollmentDate6 !== '')
		vals['enrollmentDate6'] = valueEnrollmentDate6;

	var valueEnrollmentDate7 = $formValues.find('.valueEnrollmentDate7').val();
	if(valueEnrollmentDate7 != null && valueEnrollmentDate7 !== '')
		vals['enrollmentDate7'] = valueEnrollmentDate7;

	var valueEnrollmentDate8 = $formValues.find('.valueEnrollmentDate8').val();
	if(valueEnrollmentDate8 != null && valueEnrollmentDate8 !== '')
		vals['enrollmentDate8'] = valueEnrollmentDate8;

	var valueEnrollmentDate9 = $formValues.find('.valueEnrollmentDate9').val();
	if(valueEnrollmentDate9 != null && valueEnrollmentDate9 !== '')
		vals['enrollmentDate9'] = valueEnrollmentDate9;

	var valueEnrollmentDate10 = $formValues.find('.valueEnrollmentDate10').val();
	if(valueEnrollmentDate10 != null && valueEnrollmentDate10 !== '')
		vals['enrollmentDate10'] = valueEnrollmentDate10;

	$.ajax({
		url: '/api/enrollment'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

function postSchoolEnrollmentVals(vals, success, error) {
	$.ajax({
		url: '/api/enrollment'
		, dataType: 'json'
		, type: 'POST'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// PUTImport //

async function putimportSchoolEnrollment($formValues, pk, success, error) {
	var json = $formValues.find('.PUTImport_list').val();
	if(json != null && json !== '')
		putimportSchoolEnrollmentVals(JSON.parse(json), success, error);
}

function putimportSchoolEnrollmentVals(json, success, error) {
	$.ajax({
		url: '/api/enrollment/import'
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(json)
		, success: success
		, error: error
	});
}

// PUTMerge //

async function putmergeSchoolEnrollment($formValues, pk, success, error) {
	var json = $formValues.find('.PUTMerge_list').val();
	if(json != null && json !== '')
		putmergeSchoolEnrollmentVals(JSON.parse(json), success, error);
}

function putmergeSchoolEnrollmentVals(json, success, error) {
	$.ajax({
		url: '/api/enrollment/merge'
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(json)
		, success: success
		, error: error
	});
}

// PUTCopy //

async function putcopySchoolEnrollment($formValues, pk, success, error) {
	var vals = {};

	var valuePk = $formValues.find('.valuePk').val();
	if(valuePk != null && valuePk !== '')
		vals['pk'] = valuePk;

	var valueCreated = $formValues.find('.valueCreated').val();
	if(valueCreated != null && valueCreated !== '')
		vals['created'] = valueCreated;

	var valueModified = $formValues.find('.valueModified').val();
	if(valueModified != null && valueModified !== '')
		vals['modified'] = valueModified;

	var valueObjectId = $formValues.find('.valueObjectId').val();
	if(valueObjectId != null && valueObjectId !== '')
		vals['objectId'] = valueObjectId;

	var valueArchived = $formValues.find('.valueArchived').prop('checked');
	if(valueArchived != null && valueArchived !== '')
		vals['archived'] = valueArchived;

	var valueDeleted = $formValues.find('.valueDeleted').prop('checked');
	if(valueDeleted != null && valueDeleted !== '')
		vals['deleted'] = valueDeleted;

	var valuePhoto = $formValues.find('.valuePhoto').val();
	if(valuePhoto != null && valuePhoto !== '')
		vals['photo'] = valuePhoto;

	var valueEnrollmentGroupName = $formValues.find('.valueEnrollmentGroupName').val();
	if(valueEnrollmentGroupName != null && valueEnrollmentGroupName !== '')
		vals['enrollmentGroupName'] = valueEnrollmentGroupName;

	var valueCustomerProfileId = $formValues.find('.valueCustomerProfileId').val();
	if(valueCustomerProfileId != null && valueCustomerProfileId !== '')
		vals['customerProfileId'] = valueCustomerProfileId;

	var valueEnrollmentPaymentComplete = $formValues.find('.valueEnrollmentPaymentComplete').prop('checked');
	if(valueEnrollmentPaymentComplete != null && valueEnrollmentPaymentComplete !== '')
		vals['enrollmentPaymentComplete'] = valueEnrollmentPaymentComplete;

	var valueChildPottyTrained = $formValues.find('.valueChildPottyTrained').prop('checked');
	if(valueChildPottyTrained != null && valueChildPottyTrained !== '')
		vals['childPottyTrained'] = valueChildPottyTrained;

	var valueEnrollmentPaymentEachMonth = $formValues.find('.valueEnrollmentPaymentEachMonth').prop('checked');
	if(valueEnrollmentPaymentEachMonth != null && valueEnrollmentPaymentEachMonth !== '')
		vals['enrollmentPaymentEachMonth'] = valueEnrollmentPaymentEachMonth;

	var valueEnrollmentImmunizations = $formValues.find('.valueEnrollmentImmunizations').prop('checked');
	if(valueEnrollmentImmunizations != null && valueEnrollmentImmunizations !== '')
		vals['enrollmentImmunizations'] = valueEnrollmentImmunizations;

	var valueEnrollmentApproved = $formValues.find('.valueEnrollmentApproved').prop('checked');
	if(valueEnrollmentApproved != null && valueEnrollmentApproved !== '')
		vals['enrollmentApproved'] = valueEnrollmentApproved;

	var valueFamilyMarried = $formValues.find('.valueFamilyMarried').prop('checked');
	if(valueFamilyMarried != null && valueFamilyMarried !== '')
		vals['familyMarried'] = valueFamilyMarried;

	var valueFamilySeparated = $formValues.find('.valueFamilySeparated').prop('checked');
	if(valueFamilySeparated != null && valueFamilySeparated !== '')
		vals['familySeparated'] = valueFamilySeparated;

	var valueFamilyDivorced = $formValues.find('.valueFamilyDivorced').prop('checked');
	if(valueFamilyDivorced != null && valueFamilyDivorced !== '')
		vals['familyDivorced'] = valueFamilyDivorced;

	var valueFamilyAddress = $formValues.find('.valueFamilyAddress').val();
	if(valueFamilyAddress != null && valueFamilyAddress !== '')
		vals['familyAddress'] = valueFamilyAddress;

	var valueEnrollmentSpecialConsiderations = $formValues.find('.valueEnrollmentSpecialConsiderations').val();
	if(valueEnrollmentSpecialConsiderations != null && valueEnrollmentSpecialConsiderations !== '')
		vals['enrollmentSpecialConsiderations'] = valueEnrollmentSpecialConsiderations;

	var valueChildMedicalConditions = $formValues.find('.valueChildMedicalConditions').val();
	if(valueChildMedicalConditions != null && valueChildMedicalConditions !== '')
		vals['childMedicalConditions'] = valueChildMedicalConditions;

	var valueChildPreviousSchoolsAttended = $formValues.find('.valueChildPreviousSchoolsAttended').val();
	if(valueChildPreviousSchoolsAttended != null && valueChildPreviousSchoolsAttended !== '')
		vals['childPreviousSchoolsAttended'] = valueChildPreviousSchoolsAttended;

	var valueFamilyHowDoYouKnowTheSchool = $formValues.find('.valueFamilyHowDoYouKnowTheSchool').val();
	if(valueFamilyHowDoYouKnowTheSchool != null && valueFamilyHowDoYouKnowTheSchool !== '')
		vals['familyHowDoYouKnowTheSchool'] = valueFamilyHowDoYouKnowTheSchool;

	var valueChildDescription = $formValues.find('.valueChildDescription').val();
	if(valueChildDescription != null && valueChildDescription !== '')
		vals['childDescription'] = valueChildDescription;

	var valueChildObjectives = $formValues.find('.valueChildObjectives').val();
	if(valueChildObjectives != null && valueChildObjectives !== '')
		vals['childObjectives'] = valueChildObjectives;

	var valueYearKey = $formValues.find('input.valueYearKey:checked').val();
	if(valueYearKey != null && valueYearKey !== '')
		vals['yearKey'] = valueYearKey;

	var valueBlockKeys = $formValues.find('input.valueBlockKeys:checked').val();
	if(valueBlockKeys != null && valueBlockKeys !== '')
		vals['blockKeys'] = [valueBlockKeys];

	var valueChildKey = $formValues.find('input.valueChildKey:checked').val();
	if(valueChildKey != null && valueChildKey !== '')
		vals['childKey'] = valueChildKey;

	var valueGuardianKeys = $formValues.find('input.valueGuardianKeys:checked').val();
	if(valueGuardianKeys != null && valueGuardianKeys !== '')
		vals['guardianKeys'] = [valueGuardianKeys];

	var valueMomKeys = $formValues.find('input.valueMomKeys:checked').val();
	if(valueMomKeys != null && valueMomKeys !== '')
		vals['momKeys'] = [valueMomKeys];

	var valueDadKeys = $formValues.find('input.valueDadKeys:checked').val();
	if(valueDadKeys != null && valueDadKeys !== '')
		vals['dadKeys'] = [valueDadKeys];

	var valueUserKeys = $formValues.find('input.valueUserKeys:checked').val();
	if(valueUserKeys != null && valueUserKeys !== '')
		vals['userKeys'] = [valueUserKeys];

	var valuePaymentKeys = $formValues.find('input.valuePaymentKeys:checked').val();
	if(valuePaymentKeys != null && valuePaymentKeys !== '')
		vals['paymentKeys'] = [valuePaymentKeys];

	var valueInheritPk = $formValues.find('.valueInheritPk').val();
	if(valueInheritPk != null && valueInheritPk !== '')
		vals['inheritPk'] = valueInheritPk;

	var valueSessionId = $formValues.find('.valueSessionId').val();
	if(valueSessionId != null && valueSessionId !== '')
		vals['sessionId'] = valueSessionId;

	var valueUserId = $formValues.find('.valueUserId').val();
	if(valueUserId != null && valueUserId !== '')
		vals['userId'] = valueUserId;

	var valueUserKey = $formValues.find('.valueUserKey').val();
	if(valueUserKey != null && valueUserKey !== '')
		vals['userKey'] = valueUserKey;

	var valueObjectTitle = $formValues.find('.valueObjectTitle').val();
	if(valueObjectTitle != null && valueObjectTitle !== '')
		vals['objectTitle'] = valueObjectTitle;

	var valueChildCompleteName = $formValues.find('.valueChildCompleteName').val();
	if(valueChildCompleteName != null && valueChildCompleteName !== '')
		vals['childCompleteName'] = valueChildCompleteName;

	var valueChildCompleteNamePreferred = $formValues.find('.valueChildCompleteNamePreferred').val();
	if(valueChildCompleteNamePreferred != null && valueChildCompleteNamePreferred !== '')
		vals['childCompleteNamePreferred'] = valueChildCompleteNamePreferred;

	var valueChildBirthDate = $formValues.find('.valueChildBirthDate').val();
	if(valueChildBirthDate != null && valueChildBirthDate !== '')
		vals['childBirthDate'] = valueChildBirthDate;

	var valueSchoolAddress = $formValues.find('.valueSchoolAddress').val();
	if(valueSchoolAddress != null && valueSchoolAddress !== '')
		vals['schoolAddress'] = valueSchoolAddress;

	var valueEnrollmentChargeDate = $formValues.find('.valueEnrollmentChargeDate').val();
	if(valueEnrollmentChargeDate != null && valueEnrollmentChargeDate !== '')
		vals['enrollmentChargeDate'] = valueEnrollmentChargeDate;

	var valueEnrollmentParentNames = $formValues.find('.valueEnrollmentParentNames').val();
	if(valueEnrollmentParentNames != null && valueEnrollmentParentNames !== '')
		vals['enrollmentParentNames'] = valueEnrollmentParentNames;

	var valueEnrollmentSignature1 = $formValues.find('.valueEnrollmentSignature1').val();
	if(valueEnrollmentSignature1 != null && valueEnrollmentSignature1 !== '')
		vals['enrollmentSignature1'] = valueEnrollmentSignature1;

	var valueEnrollmentSignature2 = $formValues.find('.valueEnrollmentSignature2').val();
	if(valueEnrollmentSignature2 != null && valueEnrollmentSignature2 !== '')
		vals['enrollmentSignature2'] = valueEnrollmentSignature2;

	var valueEnrollmentSignature3 = $formValues.find('.valueEnrollmentSignature3').val();
	if(valueEnrollmentSignature3 != null && valueEnrollmentSignature3 !== '')
		vals['enrollmentSignature3'] = valueEnrollmentSignature3;

	var valueEnrollmentSignature4 = $formValues.find('.valueEnrollmentSignature4').val();
	if(valueEnrollmentSignature4 != null && valueEnrollmentSignature4 !== '')
		vals['enrollmentSignature4'] = valueEnrollmentSignature4;

	var valueEnrollmentSignature5 = $formValues.find('.valueEnrollmentSignature5').val();
	if(valueEnrollmentSignature5 != null && valueEnrollmentSignature5 !== '')
		vals['enrollmentSignature5'] = valueEnrollmentSignature5;

	var valueEnrollmentSignature6 = $formValues.find('.valueEnrollmentSignature6').val();
	if(valueEnrollmentSignature6 != null && valueEnrollmentSignature6 !== '')
		vals['enrollmentSignature6'] = valueEnrollmentSignature6;

	var valueEnrollmentSignature7 = $formValues.find('.valueEnrollmentSignature7').val();
	if(valueEnrollmentSignature7 != null && valueEnrollmentSignature7 !== '')
		vals['enrollmentSignature7'] = valueEnrollmentSignature7;

	var valueEnrollmentSignature8 = $formValues.find('.valueEnrollmentSignature8').val();
	if(valueEnrollmentSignature8 != null && valueEnrollmentSignature8 !== '')
		vals['enrollmentSignature8'] = valueEnrollmentSignature8;

	var valueEnrollmentSignature9 = $formValues.find('.valueEnrollmentSignature9').val();
	if(valueEnrollmentSignature9 != null && valueEnrollmentSignature9 !== '')
		vals['enrollmentSignature9'] = valueEnrollmentSignature9;

	var valueEnrollmentSignature10 = $formValues.find('.valueEnrollmentSignature10').val();
	if(valueEnrollmentSignature10 != null && valueEnrollmentSignature10 !== '')
		vals['enrollmentSignature10'] = valueEnrollmentSignature10;

	var valueEnrollmentDate1 = $formValues.find('.valueEnrollmentDate1').val();
	if(valueEnrollmentDate1 != null && valueEnrollmentDate1 !== '')
		vals['enrollmentDate1'] = valueEnrollmentDate1;

	var valueEnrollmentDate2 = $formValues.find('.valueEnrollmentDate2').val();
	if(valueEnrollmentDate2 != null && valueEnrollmentDate2 !== '')
		vals['enrollmentDate2'] = valueEnrollmentDate2;

	var valueEnrollmentDate3 = $formValues.find('.valueEnrollmentDate3').val();
	if(valueEnrollmentDate3 != null && valueEnrollmentDate3 !== '')
		vals['enrollmentDate3'] = valueEnrollmentDate3;

	var valueEnrollmentDate4 = $formValues.find('.valueEnrollmentDate4').val();
	if(valueEnrollmentDate4 != null && valueEnrollmentDate4 !== '')
		vals['enrollmentDate4'] = valueEnrollmentDate4;

	var valueEnrollmentDate5 = $formValues.find('.valueEnrollmentDate5').val();
	if(valueEnrollmentDate5 != null && valueEnrollmentDate5 !== '')
		vals['enrollmentDate5'] = valueEnrollmentDate5;

	var valueEnrollmentDate6 = $formValues.find('.valueEnrollmentDate6').val();
	if(valueEnrollmentDate6 != null && valueEnrollmentDate6 !== '')
		vals['enrollmentDate6'] = valueEnrollmentDate6;

	var valueEnrollmentDate7 = $formValues.find('.valueEnrollmentDate7').val();
	if(valueEnrollmentDate7 != null && valueEnrollmentDate7 !== '')
		vals['enrollmentDate7'] = valueEnrollmentDate7;

	var valueEnrollmentDate8 = $formValues.find('.valueEnrollmentDate8').val();
	if(valueEnrollmentDate8 != null && valueEnrollmentDate8 !== '')
		vals['enrollmentDate8'] = valueEnrollmentDate8;

	var valueEnrollmentDate9 = $formValues.find('.valueEnrollmentDate9').val();
	if(valueEnrollmentDate9 != null && valueEnrollmentDate9 !== '')
		vals['enrollmentDate9'] = valueEnrollmentDate9;

	var valueEnrollmentDate10 = $formValues.find('.valueEnrollmentDate10').val();
	if(valueEnrollmentDate10 != null && valueEnrollmentDate10 !== '')
		vals['enrollmentDate10'] = valueEnrollmentDate10;

	putcopySchoolEnrollmentVals(pk == null ? $.deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'pk:' + pk}], vals, success, error);
}

function putcopySchoolEnrollmentVals(filters, vals, success, error) {
	$.ajax({
		url: '/api/enrollment/copy?' + $.param(filters)
		, dataType: 'json'
		, type: 'PUT'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify({patch: vals})
		, success: success
		, error: error
	});
}

// PATCH //

async function patchSchoolEnrollment($formFilters, $formValues, pk, success, error) {
	var filters = patchSchoolEnrollmentFilters($formFilters);

	var vals = {};

	var valuePk = $formValues.find('.valuePk').val();
	var removePk = $formValues.find('.removePk').val() === 'true';
	var setPk = removePk ? null : $formValues.find('.setPk').val();
	var addPk = $formValues.find('.addPk').val();
	if(removePk || setPk != null && setPk !== '')
		vals['setPk'] = setPk;
	if(addPk != null && addPk !== '')
		vals['addPk'] = addPk;
	var removePk = $formValues.find('.removePk').val();
	if(removePk != null && removePk !== '')
		vals['removePk'] = removePk;

	var valueCreated = $formValues.find('.valueCreated').val();
	var removeCreated = $formValues.find('.removeCreated').val() === 'true';
	var setCreated = removeCreated ? null : $formValues.find('.setCreated').val();
	var addCreated = $formValues.find('.addCreated').val();
	if(removeCreated || setCreated != null && setCreated !== '')
		vals['setCreated'] = setCreated;
	if(addCreated != null && addCreated !== '')
		vals['addCreated'] = addCreated;
	var removeCreated = $formValues.find('.removeCreated').val();
	if(removeCreated != null && removeCreated !== '')
		vals['removeCreated'] = removeCreated;

	var valueModified = $formValues.find('.valueModified').val();
	var removeModified = $formValues.find('.removeModified').val() === 'true';
	var setModified = removeModified ? null : $formValues.find('.setModified').val();
	var addModified = $formValues.find('.addModified').val();
	if(removeModified || setModified != null && setModified !== '')
		vals['setModified'] = setModified;
	if(addModified != null && addModified !== '')
		vals['addModified'] = addModified;
	var removeModified = $formValues.find('.removeModified').val();
	if(removeModified != null && removeModified !== '')
		vals['removeModified'] = removeModified;

	var valueObjectId = $formValues.find('.valueObjectId').val();
	var removeObjectId = $formValues.find('.removeObjectId').val() === 'true';
	var setObjectId = removeObjectId ? null : $formValues.find('.setObjectId').val();
	var addObjectId = $formValues.find('.addObjectId').val();
	if(removeObjectId || setObjectId != null && setObjectId !== '')
		vals['setObjectId'] = setObjectId;
	if(addObjectId != null && addObjectId !== '')
		vals['addObjectId'] = addObjectId;
	var removeObjectId = $formValues.find('.removeObjectId').val();
	if(removeObjectId != null && removeObjectId !== '')
		vals['removeObjectId'] = removeObjectId;

	var valueArchived = $formValues.find('.valueArchived').prop('checked');
	var removeArchived = $formValues.find('.removeArchived').val() === 'true';
	var valueArchivedSelectVal = $formValues.find('select.setArchived').val();
	var valueArchived = null;
	if(valueArchivedSelectVal != null && valueArchivedSelectVal !== '')
		valueArchived = valueArchivedSelectVal == 'true';
	var setArchived = removeArchived ? null : valueArchived;
	var addArchived = $formValues.find('.addArchived').prop('checked');
	if(removeArchived || setArchived != null && setArchived !== '')
		vals['setArchived'] = setArchived;
	if(addArchived != null && addArchived !== '')
		vals['addArchived'] = addArchived;
	var removeArchived = $formValues.find('.removeArchived').prop('checked');
	if(removeArchived != null && removeArchived !== '')
		vals['removeArchived'] = removeArchived;

	var valueDeleted = $formValues.find('.valueDeleted').prop('checked');
	var removeDeleted = $formValues.find('.removeDeleted').val() === 'true';
	var valueDeletedSelectVal = $formValues.find('select.setDeleted').val();
	var valueDeleted = null;
	if(valueDeletedSelectVal != null && valueDeletedSelectVal !== '')
		valueDeleted = valueDeletedSelectVal == 'true';
	var setDeleted = removeDeleted ? null : valueDeleted;
	var addDeleted = $formValues.find('.addDeleted').prop('checked');
	if(removeDeleted || setDeleted != null && setDeleted !== '')
		vals['setDeleted'] = setDeleted;
	if(addDeleted != null && addDeleted !== '')
		vals['addDeleted'] = addDeleted;
	var removeDeleted = $formValues.find('.removeDeleted').prop('checked');
	if(removeDeleted != null && removeDeleted !== '')
		vals['removeDeleted'] = removeDeleted;

	var valuePhoto = $formValues.find('.valuePhoto').val();
	var removePhoto = $formValues.find('.removePhoto').val() === 'true';
	var setPhoto = removePhoto ? null : $formValues.find('.setPhoto').val();
	var addPhoto = $formValues.find('.addPhoto').val();
	if(removePhoto || setPhoto != null && setPhoto !== '')
		vals['setPhoto'] = setPhoto;
	if(addPhoto != null && addPhoto !== '')
		vals['addPhoto'] = addPhoto;
	var removePhoto = $formValues.find('.removePhoto').val();
	if(removePhoto != null && removePhoto !== '')
		vals['removePhoto'] = removePhoto;

	var valueEnrollmentGroupName = $formValues.find('.valueEnrollmentGroupName').val();
	var removeEnrollmentGroupName = $formValues.find('.removeEnrollmentGroupName').val() === 'true';
	var setEnrollmentGroupName = removeEnrollmentGroupName ? null : $formValues.find('.setEnrollmentGroupName').val();
	var addEnrollmentGroupName = $formValues.find('.addEnrollmentGroupName').val();
	if(removeEnrollmentGroupName || setEnrollmentGroupName != null && setEnrollmentGroupName !== '')
		vals['setEnrollmentGroupName'] = setEnrollmentGroupName;
	if(addEnrollmentGroupName != null && addEnrollmentGroupName !== '')
		vals['addEnrollmentGroupName'] = addEnrollmentGroupName;
	var removeEnrollmentGroupName = $formValues.find('.removeEnrollmentGroupName').val();
	if(removeEnrollmentGroupName != null && removeEnrollmentGroupName !== '')
		vals['removeEnrollmentGroupName'] = removeEnrollmentGroupName;

	var valueCustomerProfileId = $formValues.find('.valueCustomerProfileId').val();
	var removeCustomerProfileId = $formValues.find('.removeCustomerProfileId').val() === 'true';
	var setCustomerProfileId = removeCustomerProfileId ? null : $formValues.find('.setCustomerProfileId').val();
	var addCustomerProfileId = $formValues.find('.addCustomerProfileId').val();
	if(removeCustomerProfileId || setCustomerProfileId != null && setCustomerProfileId !== '')
		vals['setCustomerProfileId'] = setCustomerProfileId;
	if(addCustomerProfileId != null && addCustomerProfileId !== '')
		vals['addCustomerProfileId'] = addCustomerProfileId;
	var removeCustomerProfileId = $formValues.find('.removeCustomerProfileId').val();
	if(removeCustomerProfileId != null && removeCustomerProfileId !== '')
		vals['removeCustomerProfileId'] = removeCustomerProfileId;

	var valueEnrollmentPaymentComplete = $formValues.find('.valueEnrollmentPaymentComplete').prop('checked');
	var removeEnrollmentPaymentComplete = $formValues.find('.removeEnrollmentPaymentComplete').val() === 'true';
	var valueEnrollmentPaymentCompleteSelectVal = $formValues.find('select.setEnrollmentPaymentComplete').val();
	var valueEnrollmentPaymentComplete = null;
	if(valueEnrollmentPaymentCompleteSelectVal != null && valueEnrollmentPaymentCompleteSelectVal !== '')
		valueEnrollmentPaymentComplete = valueEnrollmentPaymentCompleteSelectVal == 'true';
	var setEnrollmentPaymentComplete = removeEnrollmentPaymentComplete ? null : valueEnrollmentPaymentComplete;
	var addEnrollmentPaymentComplete = $formValues.find('.addEnrollmentPaymentComplete').prop('checked');
	if(removeEnrollmentPaymentComplete || setEnrollmentPaymentComplete != null && setEnrollmentPaymentComplete !== '')
		vals['setEnrollmentPaymentComplete'] = setEnrollmentPaymentComplete;
	if(addEnrollmentPaymentComplete != null && addEnrollmentPaymentComplete !== '')
		vals['addEnrollmentPaymentComplete'] = addEnrollmentPaymentComplete;
	var removeEnrollmentPaymentComplete = $formValues.find('.removeEnrollmentPaymentComplete').prop('checked');
	if(removeEnrollmentPaymentComplete != null && removeEnrollmentPaymentComplete !== '')
		vals['removeEnrollmentPaymentComplete'] = removeEnrollmentPaymentComplete;

	var valueChildPottyTrained = $formValues.find('.valueChildPottyTrained').prop('checked');
	var removeChildPottyTrained = $formValues.find('.removeChildPottyTrained').val() === 'true';
	var valueChildPottyTrainedSelectVal = $formValues.find('select.setChildPottyTrained').val();
	var valueChildPottyTrained = null;
	if(valueChildPottyTrainedSelectVal != null && valueChildPottyTrainedSelectVal !== '')
		valueChildPottyTrained = valueChildPottyTrainedSelectVal == 'true';
	var setChildPottyTrained = removeChildPottyTrained ? null : valueChildPottyTrained;
	var addChildPottyTrained = $formValues.find('.addChildPottyTrained').prop('checked');
	if(removeChildPottyTrained || setChildPottyTrained != null && setChildPottyTrained !== '')
		vals['setChildPottyTrained'] = setChildPottyTrained;
	if(addChildPottyTrained != null && addChildPottyTrained !== '')
		vals['addChildPottyTrained'] = addChildPottyTrained;
	var removeChildPottyTrained = $formValues.find('.removeChildPottyTrained').prop('checked');
	if(removeChildPottyTrained != null && removeChildPottyTrained !== '')
		vals['removeChildPottyTrained'] = removeChildPottyTrained;

	var valueEnrollmentPaymentEachMonth = $formValues.find('.valueEnrollmentPaymentEachMonth').prop('checked');
	var removeEnrollmentPaymentEachMonth = $formValues.find('.removeEnrollmentPaymentEachMonth').val() === 'true';
	var valueEnrollmentPaymentEachMonthSelectVal = $formValues.find('select.setEnrollmentPaymentEachMonth').val();
	var valueEnrollmentPaymentEachMonth = null;
	if(valueEnrollmentPaymentEachMonthSelectVal != null && valueEnrollmentPaymentEachMonthSelectVal !== '')
		valueEnrollmentPaymentEachMonth = valueEnrollmentPaymentEachMonthSelectVal == 'true';
	var setEnrollmentPaymentEachMonth = removeEnrollmentPaymentEachMonth ? null : valueEnrollmentPaymentEachMonth;
	var addEnrollmentPaymentEachMonth = $formValues.find('.addEnrollmentPaymentEachMonth').prop('checked');
	if(removeEnrollmentPaymentEachMonth || setEnrollmentPaymentEachMonth != null && setEnrollmentPaymentEachMonth !== '')
		vals['setEnrollmentPaymentEachMonth'] = setEnrollmentPaymentEachMonth;
	if(addEnrollmentPaymentEachMonth != null && addEnrollmentPaymentEachMonth !== '')
		vals['addEnrollmentPaymentEachMonth'] = addEnrollmentPaymentEachMonth;
	var removeEnrollmentPaymentEachMonth = $formValues.find('.removeEnrollmentPaymentEachMonth').prop('checked');
	if(removeEnrollmentPaymentEachMonth != null && removeEnrollmentPaymentEachMonth !== '')
		vals['removeEnrollmentPaymentEachMonth'] = removeEnrollmentPaymentEachMonth;

	var valueEnrollmentImmunizations = $formValues.find('.valueEnrollmentImmunizations').prop('checked');
	var removeEnrollmentImmunizations = $formValues.find('.removeEnrollmentImmunizations').val() === 'true';
	var valueEnrollmentImmunizationsSelectVal = $formValues.find('select.setEnrollmentImmunizations').val();
	var valueEnrollmentImmunizations = null;
	if(valueEnrollmentImmunizationsSelectVal != null && valueEnrollmentImmunizationsSelectVal !== '')
		valueEnrollmentImmunizations = valueEnrollmentImmunizationsSelectVal == 'true';
	var setEnrollmentImmunizations = removeEnrollmentImmunizations ? null : valueEnrollmentImmunizations;
	var addEnrollmentImmunizations = $formValues.find('.addEnrollmentImmunizations').prop('checked');
	if(removeEnrollmentImmunizations || setEnrollmentImmunizations != null && setEnrollmentImmunizations !== '')
		vals['setEnrollmentImmunizations'] = setEnrollmentImmunizations;
	if(addEnrollmentImmunizations != null && addEnrollmentImmunizations !== '')
		vals['addEnrollmentImmunizations'] = addEnrollmentImmunizations;
	var removeEnrollmentImmunizations = $formValues.find('.removeEnrollmentImmunizations').prop('checked');
	if(removeEnrollmentImmunizations != null && removeEnrollmentImmunizations !== '')
		vals['removeEnrollmentImmunizations'] = removeEnrollmentImmunizations;

	var valueEnrollmentApproved = $formValues.find('.valueEnrollmentApproved').prop('checked');
	var removeEnrollmentApproved = $formValues.find('.removeEnrollmentApproved').val() === 'true';
	var valueEnrollmentApprovedSelectVal = $formValues.find('select.setEnrollmentApproved').val();
	var valueEnrollmentApproved = null;
	if(valueEnrollmentApprovedSelectVal != null && valueEnrollmentApprovedSelectVal !== '')
		valueEnrollmentApproved = valueEnrollmentApprovedSelectVal == 'true';
	var setEnrollmentApproved = removeEnrollmentApproved ? null : valueEnrollmentApproved;
	var addEnrollmentApproved = $formValues.find('.addEnrollmentApproved').prop('checked');
	if(removeEnrollmentApproved || setEnrollmentApproved != null && setEnrollmentApproved !== '')
		vals['setEnrollmentApproved'] = setEnrollmentApproved;
	if(addEnrollmentApproved != null && addEnrollmentApproved !== '')
		vals['addEnrollmentApproved'] = addEnrollmentApproved;
	var removeEnrollmentApproved = $formValues.find('.removeEnrollmentApproved').prop('checked');
	if(removeEnrollmentApproved != null && removeEnrollmentApproved !== '')
		vals['removeEnrollmentApproved'] = removeEnrollmentApproved;

	var valueFamilyMarried = $formValues.find('.valueFamilyMarried').prop('checked');
	var removeFamilyMarried = $formValues.find('.removeFamilyMarried').val() === 'true';
	var valueFamilyMarriedSelectVal = $formValues.find('select.setFamilyMarried').val();
	var valueFamilyMarried = null;
	if(valueFamilyMarriedSelectVal != null && valueFamilyMarriedSelectVal !== '')
		valueFamilyMarried = valueFamilyMarriedSelectVal == 'true';
	var setFamilyMarried = removeFamilyMarried ? null : valueFamilyMarried;
	var addFamilyMarried = $formValues.find('.addFamilyMarried').prop('checked');
	if(removeFamilyMarried || setFamilyMarried != null && setFamilyMarried !== '')
		vals['setFamilyMarried'] = setFamilyMarried;
	if(addFamilyMarried != null && addFamilyMarried !== '')
		vals['addFamilyMarried'] = addFamilyMarried;
	var removeFamilyMarried = $formValues.find('.removeFamilyMarried').prop('checked');
	if(removeFamilyMarried != null && removeFamilyMarried !== '')
		vals['removeFamilyMarried'] = removeFamilyMarried;

	var valueFamilySeparated = $formValues.find('.valueFamilySeparated').prop('checked');
	var removeFamilySeparated = $formValues.find('.removeFamilySeparated').val() === 'true';
	var valueFamilySeparatedSelectVal = $formValues.find('select.setFamilySeparated').val();
	var valueFamilySeparated = null;
	if(valueFamilySeparatedSelectVal != null && valueFamilySeparatedSelectVal !== '')
		valueFamilySeparated = valueFamilySeparatedSelectVal == 'true';
	var setFamilySeparated = removeFamilySeparated ? null : valueFamilySeparated;
	var addFamilySeparated = $formValues.find('.addFamilySeparated').prop('checked');
	if(removeFamilySeparated || setFamilySeparated != null && setFamilySeparated !== '')
		vals['setFamilySeparated'] = setFamilySeparated;
	if(addFamilySeparated != null && addFamilySeparated !== '')
		vals['addFamilySeparated'] = addFamilySeparated;
	var removeFamilySeparated = $formValues.find('.removeFamilySeparated').prop('checked');
	if(removeFamilySeparated != null && removeFamilySeparated !== '')
		vals['removeFamilySeparated'] = removeFamilySeparated;

	var valueFamilyDivorced = $formValues.find('.valueFamilyDivorced').prop('checked');
	var removeFamilyDivorced = $formValues.find('.removeFamilyDivorced').val() === 'true';
	var valueFamilyDivorcedSelectVal = $formValues.find('select.setFamilyDivorced').val();
	var valueFamilyDivorced = null;
	if(valueFamilyDivorcedSelectVal != null && valueFamilyDivorcedSelectVal !== '')
		valueFamilyDivorced = valueFamilyDivorcedSelectVal == 'true';
	var setFamilyDivorced = removeFamilyDivorced ? null : valueFamilyDivorced;
	var addFamilyDivorced = $formValues.find('.addFamilyDivorced').prop('checked');
	if(removeFamilyDivorced || setFamilyDivorced != null && setFamilyDivorced !== '')
		vals['setFamilyDivorced'] = setFamilyDivorced;
	if(addFamilyDivorced != null && addFamilyDivorced !== '')
		vals['addFamilyDivorced'] = addFamilyDivorced;
	var removeFamilyDivorced = $formValues.find('.removeFamilyDivorced').prop('checked');
	if(removeFamilyDivorced != null && removeFamilyDivorced !== '')
		vals['removeFamilyDivorced'] = removeFamilyDivorced;

	var valueFamilyAddress = $formValues.find('.valueFamilyAddress').val();
	var removeFamilyAddress = $formValues.find('.removeFamilyAddress').val() === 'true';
	var setFamilyAddress = removeFamilyAddress ? null : $formValues.find('.setFamilyAddress').val();
	var addFamilyAddress = $formValues.find('.addFamilyAddress').val();
	if(removeFamilyAddress || setFamilyAddress != null && setFamilyAddress !== '')
		vals['setFamilyAddress'] = setFamilyAddress;
	if(addFamilyAddress != null && addFamilyAddress !== '')
		vals['addFamilyAddress'] = addFamilyAddress;
	var removeFamilyAddress = $formValues.find('.removeFamilyAddress').val();
	if(removeFamilyAddress != null && removeFamilyAddress !== '')
		vals['removeFamilyAddress'] = removeFamilyAddress;

	var valueEnrollmentSpecialConsiderations = $formValues.find('.valueEnrollmentSpecialConsiderations').val();
	var removeEnrollmentSpecialConsiderations = $formValues.find('.removeEnrollmentSpecialConsiderations').val() === 'true';
	var setEnrollmentSpecialConsiderations = removeEnrollmentSpecialConsiderations ? null : $formValues.find('.setEnrollmentSpecialConsiderations').val();
	var addEnrollmentSpecialConsiderations = $formValues.find('.addEnrollmentSpecialConsiderations').val();
	if(removeEnrollmentSpecialConsiderations || setEnrollmentSpecialConsiderations != null && setEnrollmentSpecialConsiderations !== '')
		vals['setEnrollmentSpecialConsiderations'] = setEnrollmentSpecialConsiderations;
	if(addEnrollmentSpecialConsiderations != null && addEnrollmentSpecialConsiderations !== '')
		vals['addEnrollmentSpecialConsiderations'] = addEnrollmentSpecialConsiderations;
	var removeEnrollmentSpecialConsiderations = $formValues.find('.removeEnrollmentSpecialConsiderations').val();
	if(removeEnrollmentSpecialConsiderations != null && removeEnrollmentSpecialConsiderations !== '')
		vals['removeEnrollmentSpecialConsiderations'] = removeEnrollmentSpecialConsiderations;

	var valueChildMedicalConditions = $formValues.find('.valueChildMedicalConditions').val();
	var removeChildMedicalConditions = $formValues.find('.removeChildMedicalConditions').val() === 'true';
	var setChildMedicalConditions = removeChildMedicalConditions ? null : $formValues.find('.setChildMedicalConditions').val();
	var addChildMedicalConditions = $formValues.find('.addChildMedicalConditions').val();
	if(removeChildMedicalConditions || setChildMedicalConditions != null && setChildMedicalConditions !== '')
		vals['setChildMedicalConditions'] = setChildMedicalConditions;
	if(addChildMedicalConditions != null && addChildMedicalConditions !== '')
		vals['addChildMedicalConditions'] = addChildMedicalConditions;
	var removeChildMedicalConditions = $formValues.find('.removeChildMedicalConditions').val();
	if(removeChildMedicalConditions != null && removeChildMedicalConditions !== '')
		vals['removeChildMedicalConditions'] = removeChildMedicalConditions;

	var valueChildPreviousSchoolsAttended = $formValues.find('.valueChildPreviousSchoolsAttended').val();
	var removeChildPreviousSchoolsAttended = $formValues.find('.removeChildPreviousSchoolsAttended').val() === 'true';
	var setChildPreviousSchoolsAttended = removeChildPreviousSchoolsAttended ? null : $formValues.find('.setChildPreviousSchoolsAttended').val();
	var addChildPreviousSchoolsAttended = $formValues.find('.addChildPreviousSchoolsAttended').val();
	if(removeChildPreviousSchoolsAttended || setChildPreviousSchoolsAttended != null && setChildPreviousSchoolsAttended !== '')
		vals['setChildPreviousSchoolsAttended'] = setChildPreviousSchoolsAttended;
	if(addChildPreviousSchoolsAttended != null && addChildPreviousSchoolsAttended !== '')
		vals['addChildPreviousSchoolsAttended'] = addChildPreviousSchoolsAttended;
	var removeChildPreviousSchoolsAttended = $formValues.find('.removeChildPreviousSchoolsAttended').val();
	if(removeChildPreviousSchoolsAttended != null && removeChildPreviousSchoolsAttended !== '')
		vals['removeChildPreviousSchoolsAttended'] = removeChildPreviousSchoolsAttended;

	var valueFamilyHowDoYouKnowTheSchool = $formValues.find('.valueFamilyHowDoYouKnowTheSchool').val();
	var removeFamilyHowDoYouKnowTheSchool = $formValues.find('.removeFamilyHowDoYouKnowTheSchool').val() === 'true';
	var setFamilyHowDoYouKnowTheSchool = removeFamilyHowDoYouKnowTheSchool ? null : $formValues.find('.setFamilyHowDoYouKnowTheSchool').val();
	var addFamilyHowDoYouKnowTheSchool = $formValues.find('.addFamilyHowDoYouKnowTheSchool').val();
	if(removeFamilyHowDoYouKnowTheSchool || setFamilyHowDoYouKnowTheSchool != null && setFamilyHowDoYouKnowTheSchool !== '')
		vals['setFamilyHowDoYouKnowTheSchool'] = setFamilyHowDoYouKnowTheSchool;
	if(addFamilyHowDoYouKnowTheSchool != null && addFamilyHowDoYouKnowTheSchool !== '')
		vals['addFamilyHowDoYouKnowTheSchool'] = addFamilyHowDoYouKnowTheSchool;
	var removeFamilyHowDoYouKnowTheSchool = $formValues.find('.removeFamilyHowDoYouKnowTheSchool').val();
	if(removeFamilyHowDoYouKnowTheSchool != null && removeFamilyHowDoYouKnowTheSchool !== '')
		vals['removeFamilyHowDoYouKnowTheSchool'] = removeFamilyHowDoYouKnowTheSchool;

	var valueChildDescription = $formValues.find('.valueChildDescription').val();
	var removeChildDescription = $formValues.find('.removeChildDescription').val() === 'true';
	var setChildDescription = removeChildDescription ? null : $formValues.find('.setChildDescription').val();
	var addChildDescription = $formValues.find('.addChildDescription').val();
	if(removeChildDescription || setChildDescription != null && setChildDescription !== '')
		vals['setChildDescription'] = setChildDescription;
	if(addChildDescription != null && addChildDescription !== '')
		vals['addChildDescription'] = addChildDescription;
	var removeChildDescription = $formValues.find('.removeChildDescription').val();
	if(removeChildDescription != null && removeChildDescription !== '')
		vals['removeChildDescription'] = removeChildDescription;

	var valueChildObjectives = $formValues.find('.valueChildObjectives').val();
	var removeChildObjectives = $formValues.find('.removeChildObjectives').val() === 'true';
	var setChildObjectives = removeChildObjectives ? null : $formValues.find('.setChildObjectives').val();
	var addChildObjectives = $formValues.find('.addChildObjectives').val();
	if(removeChildObjectives || setChildObjectives != null && setChildObjectives !== '')
		vals['setChildObjectives'] = setChildObjectives;
	if(addChildObjectives != null && addChildObjectives !== '')
		vals['addChildObjectives'] = addChildObjectives;
	var removeChildObjectives = $formValues.find('.removeChildObjectives').val();
	if(removeChildObjectives != null && removeChildObjectives !== '')
		vals['removeChildObjectives'] = removeChildObjectives;

	var valueYearKey = $formValues.find('input.valueYearKey:checked').val();
	if(valueYearKey != null && valueYearKey !== '')
		vals['setYearKey'] = valueYearKey;

	var valueBlockKeys = $formValues.find('input.valueBlockKeys:checked').val();
	if(valueBlockKeys != null && valueBlockKeys !== '')
		vals['addBlockKeys'] = valueBlockKeys;

	var valueChildKey = $formValues.find('input.valueChildKey:checked').val();
	if(valueChildKey != null && valueChildKey !== '')
		vals['setChildKey'] = valueChildKey;

	var valueGuardianKeys = $formValues.find('input.valueGuardianKeys:checked').val();
	if(valueGuardianKeys != null && valueGuardianKeys !== '')
		vals['addGuardianKeys'] = valueGuardianKeys;

	var valueMomKeys = $formValues.find('input.valueMomKeys:checked').val();
	if(valueMomKeys != null && valueMomKeys !== '')
		vals['addMomKeys'] = valueMomKeys;

	var valueDadKeys = $formValues.find('input.valueDadKeys:checked').val();
	if(valueDadKeys != null && valueDadKeys !== '')
		vals['addDadKeys'] = valueDadKeys;

	var valueUserKeys = $formValues.find('input.valueUserKeys:checked').val();
	if(valueUserKeys != null && valueUserKeys !== '')
		vals['addUserKeys'] = valueUserKeys;

	var valuePaymentKeys = $formValues.find('input.valuePaymentKeys:checked').val();
	if(valuePaymentKeys != null && valuePaymentKeys !== '')
		vals['addPaymentKeys'] = valuePaymentKeys;

	var valueInheritPk = $formValues.find('.valueInheritPk').val();
	var removeInheritPk = $formValues.find('.removeInheritPk').val() === 'true';
	var setInheritPk = removeInheritPk ? null : $formValues.find('.setInheritPk').val();
	var addInheritPk = $formValues.find('.addInheritPk').val();
	if(removeInheritPk || setInheritPk != null && setInheritPk !== '')
		vals['setInheritPk'] = setInheritPk;
	if(addInheritPk != null && addInheritPk !== '')
		vals['addInheritPk'] = addInheritPk;
	var removeInheritPk = $formValues.find('.removeInheritPk').val();
	if(removeInheritPk != null && removeInheritPk !== '')
		vals['removeInheritPk'] = removeInheritPk;

	var valueSessionId = $formValues.find('.valueSessionId').val();
	var removeSessionId = $formValues.find('.removeSessionId').val() === 'true';
	var setSessionId = removeSessionId ? null : $formValues.find('.setSessionId').val();
	var addSessionId = $formValues.find('.addSessionId').val();
	if(removeSessionId || setSessionId != null && setSessionId !== '')
		vals['setSessionId'] = setSessionId;
	if(addSessionId != null && addSessionId !== '')
		vals['addSessionId'] = addSessionId;
	var removeSessionId = $formValues.find('.removeSessionId').val();
	if(removeSessionId != null && removeSessionId !== '')
		vals['removeSessionId'] = removeSessionId;

	var valueUserId = $formValues.find('.valueUserId').val();
	var removeUserId = $formValues.find('.removeUserId').val() === 'true';
	var setUserId = removeUserId ? null : $formValues.find('.setUserId').val();
	var addUserId = $formValues.find('.addUserId').val();
	if(removeUserId || setUserId != null && setUserId !== '')
		vals['setUserId'] = setUserId;
	if(addUserId != null && addUserId !== '')
		vals['addUserId'] = addUserId;
	var removeUserId = $formValues.find('.removeUserId').val();
	if(removeUserId != null && removeUserId !== '')
		vals['removeUserId'] = removeUserId;

	var valueUserKey = $formValues.find('.valueUserKey').val();
	var removeUserKey = $formValues.find('.removeUserKey').val() === 'true';
	var setUserKey = removeUserKey ? null : $formValues.find('.setUserKey').val();
	var addUserKey = $formValues.find('.addUserKey').val();
	if(removeUserKey || setUserKey != null && setUserKey !== '')
		vals['setUserKey'] = setUserKey;
	if(addUserKey != null && addUserKey !== '')
		vals['addUserKey'] = addUserKey;
	var removeUserKey = $formValues.find('.removeUserKey').val();
	if(removeUserKey != null && removeUserKey !== '')
		vals['removeUserKey'] = removeUserKey;

	var valueObjectTitle = $formValues.find('.valueObjectTitle').val();
	var removeObjectTitle = $formValues.find('.removeObjectTitle').val() === 'true';
	var setObjectTitle = removeObjectTitle ? null : $formValues.find('.setObjectTitle').val();
	var addObjectTitle = $formValues.find('.addObjectTitle').val();
	if(removeObjectTitle || setObjectTitle != null && setObjectTitle !== '')
		vals['setObjectTitle'] = setObjectTitle;
	if(addObjectTitle != null && addObjectTitle !== '')
		vals['addObjectTitle'] = addObjectTitle;
	var removeObjectTitle = $formValues.find('.removeObjectTitle').val();
	if(removeObjectTitle != null && removeObjectTitle !== '')
		vals['removeObjectTitle'] = removeObjectTitle;

	var valueChildCompleteName = $formValues.find('.valueChildCompleteName').val();
	var removeChildCompleteName = $formValues.find('.removeChildCompleteName').val() === 'true';
	var setChildCompleteName = removeChildCompleteName ? null : $formValues.find('.setChildCompleteName').val();
	var addChildCompleteName = $formValues.find('.addChildCompleteName').val();
	if(removeChildCompleteName || setChildCompleteName != null && setChildCompleteName !== '')
		vals['setChildCompleteName'] = setChildCompleteName;
	if(addChildCompleteName != null && addChildCompleteName !== '')
		vals['addChildCompleteName'] = addChildCompleteName;
	var removeChildCompleteName = $formValues.find('.removeChildCompleteName').val();
	if(removeChildCompleteName != null && removeChildCompleteName !== '')
		vals['removeChildCompleteName'] = removeChildCompleteName;

	var valueChildCompleteNamePreferred = $formValues.find('.valueChildCompleteNamePreferred').val();
	var removeChildCompleteNamePreferred = $formValues.find('.removeChildCompleteNamePreferred').val() === 'true';
	var setChildCompleteNamePreferred = removeChildCompleteNamePreferred ? null : $formValues.find('.setChildCompleteNamePreferred').val();
	var addChildCompleteNamePreferred = $formValues.find('.addChildCompleteNamePreferred').val();
	if(removeChildCompleteNamePreferred || setChildCompleteNamePreferred != null && setChildCompleteNamePreferred !== '')
		vals['setChildCompleteNamePreferred'] = setChildCompleteNamePreferred;
	if(addChildCompleteNamePreferred != null && addChildCompleteNamePreferred !== '')
		vals['addChildCompleteNamePreferred'] = addChildCompleteNamePreferred;
	var removeChildCompleteNamePreferred = $formValues.find('.removeChildCompleteNamePreferred').val();
	if(removeChildCompleteNamePreferred != null && removeChildCompleteNamePreferred !== '')
		vals['removeChildCompleteNamePreferred'] = removeChildCompleteNamePreferred;

	var valueChildBirthDate = $formValues.find('.valueChildBirthDate').val();
	var removeChildBirthDate = $formValues.find('.removeChildBirthDate').val() === 'true';
	var setChildBirthDate = removeChildBirthDate ? null : $formValues.find('.setChildBirthDate').val();
	var addChildBirthDate = $formValues.find('.addChildBirthDate').val();
	var setMoment = setChildBirthDate ? moment(setChildBirthDate, 'MM/DD/YYYY') : null; 
	var addMoment = addChildBirthDate ? moment(addChildBirthDate, 'MM/DD/YYYY') : null; 
	if(setMoment) { 
		var s = setMoment.format('YYYY-MM-DD'); 
		setChildBirthDate = s;
	} 
	if(addMoment) { 
		var s = addMoment.format('YYYY-MM-DD'); 
		addChildBirthDate = s;
	} 
	if(removeChildBirthDate || setChildBirthDate != null && setChildBirthDate !== '')
		vals['setChildBirthDate'] = setChildBirthDate;
	if(addChildBirthDate != null && addChildBirthDate !== '')
		vals['addChildBirthDate'] = addChildBirthDate;
	var removeChildBirthDate = $formValues.find('.removeChildBirthDate').val();
	if(removeChildBirthDate != null && removeChildBirthDate !== '')
		vals['removeChildBirthDate'] = removeChildBirthDate;

	var valueSchoolAddress = $formValues.find('.valueSchoolAddress').val();
	var removeSchoolAddress = $formValues.find('.removeSchoolAddress').val() === 'true';
	var setSchoolAddress = removeSchoolAddress ? null : $formValues.find('.setSchoolAddress').val();
	var addSchoolAddress = $formValues.find('.addSchoolAddress').val();
	if(removeSchoolAddress || setSchoolAddress != null && setSchoolAddress !== '')
		vals['setSchoolAddress'] = setSchoolAddress;
	if(addSchoolAddress != null && addSchoolAddress !== '')
		vals['addSchoolAddress'] = addSchoolAddress;
	var removeSchoolAddress = $formValues.find('.removeSchoolAddress').val();
	if(removeSchoolAddress != null && removeSchoolAddress !== '')
		vals['removeSchoolAddress'] = removeSchoolAddress;

	var valueEnrollmentChargeDate = $formValues.find('.valueEnrollmentChargeDate').val();
	var removeEnrollmentChargeDate = $formValues.find('.removeEnrollmentChargeDate').val() === 'true';
	var setEnrollmentChargeDate = removeEnrollmentChargeDate ? null : $formValues.find('.setEnrollmentChargeDate').val();
	var addEnrollmentChargeDate = $formValues.find('.addEnrollmentChargeDate').val();
	var setMoment = setEnrollmentChargeDate ? moment(setEnrollmentChargeDate, 'MM/DD/YYYY') : null; 
	var addMoment = addEnrollmentChargeDate ? moment(addEnrollmentChargeDate, 'MM/DD/YYYY') : null; 
	if(setMoment) { 
		var s = setMoment.format('YYYY-MM-DD'); 
		setEnrollmentChargeDate = s;
	} 
	if(addMoment) { 
		var s = addMoment.format('YYYY-MM-DD'); 
		addEnrollmentChargeDate = s;
	} 
	if(removeEnrollmentChargeDate || setEnrollmentChargeDate != null && setEnrollmentChargeDate !== '')
		vals['setEnrollmentChargeDate'] = setEnrollmentChargeDate;
	if(addEnrollmentChargeDate != null && addEnrollmentChargeDate !== '')
		vals['addEnrollmentChargeDate'] = addEnrollmentChargeDate;
	var removeEnrollmentChargeDate = $formValues.find('.removeEnrollmentChargeDate').val();
	if(removeEnrollmentChargeDate != null && removeEnrollmentChargeDate !== '')
		vals['removeEnrollmentChargeDate'] = removeEnrollmentChargeDate;

	var valueEnrollmentParentNames = $formValues.find('.valueEnrollmentParentNames').val();
	var removeEnrollmentParentNames = $formValues.find('.removeEnrollmentParentNames').val() === 'true';
	var setEnrollmentParentNames = removeEnrollmentParentNames ? null : $formValues.find('.setEnrollmentParentNames').val();
	var addEnrollmentParentNames = $formValues.find('.addEnrollmentParentNames').val();
	if(removeEnrollmentParentNames || setEnrollmentParentNames != null && setEnrollmentParentNames !== '')
		vals['setEnrollmentParentNames'] = setEnrollmentParentNames;
	if(addEnrollmentParentNames != null && addEnrollmentParentNames !== '')
		vals['addEnrollmentParentNames'] = addEnrollmentParentNames;
	var removeEnrollmentParentNames = $formValues.find('.removeEnrollmentParentNames').val();
	if(removeEnrollmentParentNames != null && removeEnrollmentParentNames !== '')
		vals['removeEnrollmentParentNames'] = removeEnrollmentParentNames;

	var valueEnrollmentSignature1 = $formValues.find('.valueEnrollmentSignature1').val();
	var removeEnrollmentSignature1 = $formValues.find('.removeEnrollmentSignature1').val() === 'true';
	var setEnrollmentSignature1 = removeEnrollmentSignature1 ? null : $formValues.find('.setEnrollmentSignature1').val();
	var addEnrollmentSignature1 = $formValues.find('.addEnrollmentSignature1').val();
	if(removeEnrollmentSignature1 || setEnrollmentSignature1 != null && setEnrollmentSignature1 !== '')
		vals['setEnrollmentSignature1'] = setEnrollmentSignature1;
	if(addEnrollmentSignature1 != null && addEnrollmentSignature1 !== '')
		vals['addEnrollmentSignature1'] = addEnrollmentSignature1;
	var removeEnrollmentSignature1 = $formValues.find('.removeEnrollmentSignature1').val();
	if(removeEnrollmentSignature1 != null && removeEnrollmentSignature1 !== '')
		vals['removeEnrollmentSignature1'] = removeEnrollmentSignature1;

	var valueEnrollmentSignature2 = $formValues.find('.valueEnrollmentSignature2').val();
	var removeEnrollmentSignature2 = $formValues.find('.removeEnrollmentSignature2').val() === 'true';
	var setEnrollmentSignature2 = removeEnrollmentSignature2 ? null : $formValues.find('.setEnrollmentSignature2').val();
	var addEnrollmentSignature2 = $formValues.find('.addEnrollmentSignature2').val();
	if(removeEnrollmentSignature2 || setEnrollmentSignature2 != null && setEnrollmentSignature2 !== '')
		vals['setEnrollmentSignature2'] = setEnrollmentSignature2;
	if(addEnrollmentSignature2 != null && addEnrollmentSignature2 !== '')
		vals['addEnrollmentSignature2'] = addEnrollmentSignature2;
	var removeEnrollmentSignature2 = $formValues.find('.removeEnrollmentSignature2').val();
	if(removeEnrollmentSignature2 != null && removeEnrollmentSignature2 !== '')
		vals['removeEnrollmentSignature2'] = removeEnrollmentSignature2;

	var valueEnrollmentSignature3 = $formValues.find('.valueEnrollmentSignature3').val();
	var removeEnrollmentSignature3 = $formValues.find('.removeEnrollmentSignature3').val() === 'true';
	var setEnrollmentSignature3 = removeEnrollmentSignature3 ? null : $formValues.find('.setEnrollmentSignature3').val();
	var addEnrollmentSignature3 = $formValues.find('.addEnrollmentSignature3').val();
	if(removeEnrollmentSignature3 || setEnrollmentSignature3 != null && setEnrollmentSignature3 !== '')
		vals['setEnrollmentSignature3'] = setEnrollmentSignature3;
	if(addEnrollmentSignature3 != null && addEnrollmentSignature3 !== '')
		vals['addEnrollmentSignature3'] = addEnrollmentSignature3;
	var removeEnrollmentSignature3 = $formValues.find('.removeEnrollmentSignature3').val();
	if(removeEnrollmentSignature3 != null && removeEnrollmentSignature3 !== '')
		vals['removeEnrollmentSignature3'] = removeEnrollmentSignature3;

	var valueEnrollmentSignature4 = $formValues.find('.valueEnrollmentSignature4').val();
	var removeEnrollmentSignature4 = $formValues.find('.removeEnrollmentSignature4').val() === 'true';
	var setEnrollmentSignature4 = removeEnrollmentSignature4 ? null : $formValues.find('.setEnrollmentSignature4').val();
	var addEnrollmentSignature4 = $formValues.find('.addEnrollmentSignature4').val();
	if(removeEnrollmentSignature4 || setEnrollmentSignature4 != null && setEnrollmentSignature4 !== '')
		vals['setEnrollmentSignature4'] = setEnrollmentSignature4;
	if(addEnrollmentSignature4 != null && addEnrollmentSignature4 !== '')
		vals['addEnrollmentSignature4'] = addEnrollmentSignature4;
	var removeEnrollmentSignature4 = $formValues.find('.removeEnrollmentSignature4').val();
	if(removeEnrollmentSignature4 != null && removeEnrollmentSignature4 !== '')
		vals['removeEnrollmentSignature4'] = removeEnrollmentSignature4;

	var valueEnrollmentSignature5 = $formValues.find('.valueEnrollmentSignature5').val();
	var removeEnrollmentSignature5 = $formValues.find('.removeEnrollmentSignature5').val() === 'true';
	var setEnrollmentSignature5 = removeEnrollmentSignature5 ? null : $formValues.find('.setEnrollmentSignature5').val();
	var addEnrollmentSignature5 = $formValues.find('.addEnrollmentSignature5').val();
	if(removeEnrollmentSignature5 || setEnrollmentSignature5 != null && setEnrollmentSignature5 !== '')
		vals['setEnrollmentSignature5'] = setEnrollmentSignature5;
	if(addEnrollmentSignature5 != null && addEnrollmentSignature5 !== '')
		vals['addEnrollmentSignature5'] = addEnrollmentSignature5;
	var removeEnrollmentSignature5 = $formValues.find('.removeEnrollmentSignature5').val();
	if(removeEnrollmentSignature5 != null && removeEnrollmentSignature5 !== '')
		vals['removeEnrollmentSignature5'] = removeEnrollmentSignature5;

	var valueEnrollmentSignature6 = $formValues.find('.valueEnrollmentSignature6').val();
	var removeEnrollmentSignature6 = $formValues.find('.removeEnrollmentSignature6').val() === 'true';
	var setEnrollmentSignature6 = removeEnrollmentSignature6 ? null : $formValues.find('.setEnrollmentSignature6').val();
	var addEnrollmentSignature6 = $formValues.find('.addEnrollmentSignature6').val();
	if(removeEnrollmentSignature6 || setEnrollmentSignature6 != null && setEnrollmentSignature6 !== '')
		vals['setEnrollmentSignature6'] = setEnrollmentSignature6;
	if(addEnrollmentSignature6 != null && addEnrollmentSignature6 !== '')
		vals['addEnrollmentSignature6'] = addEnrollmentSignature6;
	var removeEnrollmentSignature6 = $formValues.find('.removeEnrollmentSignature6').val();
	if(removeEnrollmentSignature6 != null && removeEnrollmentSignature6 !== '')
		vals['removeEnrollmentSignature6'] = removeEnrollmentSignature6;

	var valueEnrollmentSignature7 = $formValues.find('.valueEnrollmentSignature7').val();
	var removeEnrollmentSignature7 = $formValues.find('.removeEnrollmentSignature7').val() === 'true';
	var setEnrollmentSignature7 = removeEnrollmentSignature7 ? null : $formValues.find('.setEnrollmentSignature7').val();
	var addEnrollmentSignature7 = $formValues.find('.addEnrollmentSignature7').val();
	if(removeEnrollmentSignature7 || setEnrollmentSignature7 != null && setEnrollmentSignature7 !== '')
		vals['setEnrollmentSignature7'] = setEnrollmentSignature7;
	if(addEnrollmentSignature7 != null && addEnrollmentSignature7 !== '')
		vals['addEnrollmentSignature7'] = addEnrollmentSignature7;
	var removeEnrollmentSignature7 = $formValues.find('.removeEnrollmentSignature7').val();
	if(removeEnrollmentSignature7 != null && removeEnrollmentSignature7 !== '')
		vals['removeEnrollmentSignature7'] = removeEnrollmentSignature7;

	var valueEnrollmentSignature8 = $formValues.find('.valueEnrollmentSignature8').val();
	var removeEnrollmentSignature8 = $formValues.find('.removeEnrollmentSignature8').val() === 'true';
	var setEnrollmentSignature8 = removeEnrollmentSignature8 ? null : $formValues.find('.setEnrollmentSignature8').val();
	var addEnrollmentSignature8 = $formValues.find('.addEnrollmentSignature8').val();
	if(removeEnrollmentSignature8 || setEnrollmentSignature8 != null && setEnrollmentSignature8 !== '')
		vals['setEnrollmentSignature8'] = setEnrollmentSignature8;
	if(addEnrollmentSignature8 != null && addEnrollmentSignature8 !== '')
		vals['addEnrollmentSignature8'] = addEnrollmentSignature8;
	var removeEnrollmentSignature8 = $formValues.find('.removeEnrollmentSignature8').val();
	if(removeEnrollmentSignature8 != null && removeEnrollmentSignature8 !== '')
		vals['removeEnrollmentSignature8'] = removeEnrollmentSignature8;

	var valueEnrollmentSignature9 = $formValues.find('.valueEnrollmentSignature9').val();
	var removeEnrollmentSignature9 = $formValues.find('.removeEnrollmentSignature9').val() === 'true';
	var setEnrollmentSignature9 = removeEnrollmentSignature9 ? null : $formValues.find('.setEnrollmentSignature9').val();
	var addEnrollmentSignature9 = $formValues.find('.addEnrollmentSignature9').val();
	if(removeEnrollmentSignature9 || setEnrollmentSignature9 != null && setEnrollmentSignature9 !== '')
		vals['setEnrollmentSignature9'] = setEnrollmentSignature9;
	if(addEnrollmentSignature9 != null && addEnrollmentSignature9 !== '')
		vals['addEnrollmentSignature9'] = addEnrollmentSignature9;
	var removeEnrollmentSignature9 = $formValues.find('.removeEnrollmentSignature9').val();
	if(removeEnrollmentSignature9 != null && removeEnrollmentSignature9 !== '')
		vals['removeEnrollmentSignature9'] = removeEnrollmentSignature9;

	var valueEnrollmentSignature10 = $formValues.find('.valueEnrollmentSignature10').val();
	var removeEnrollmentSignature10 = $formValues.find('.removeEnrollmentSignature10').val() === 'true';
	var setEnrollmentSignature10 = removeEnrollmentSignature10 ? null : $formValues.find('.setEnrollmentSignature10').val();
	var addEnrollmentSignature10 = $formValues.find('.addEnrollmentSignature10').val();
	if(removeEnrollmentSignature10 || setEnrollmentSignature10 != null && setEnrollmentSignature10 !== '')
		vals['setEnrollmentSignature10'] = setEnrollmentSignature10;
	if(addEnrollmentSignature10 != null && addEnrollmentSignature10 !== '')
		vals['addEnrollmentSignature10'] = addEnrollmentSignature10;
	var removeEnrollmentSignature10 = $formValues.find('.removeEnrollmentSignature10').val();
	if(removeEnrollmentSignature10 != null && removeEnrollmentSignature10 !== '')
		vals['removeEnrollmentSignature10'] = removeEnrollmentSignature10;

	var valueEnrollmentDate1 = $formValues.find('.valueEnrollmentDate1').val();
	var removeEnrollmentDate1 = $formValues.find('.removeEnrollmentDate1').val() === 'true';
	var setEnrollmentDate1 = removeEnrollmentDate1 ? null : $formValues.find('.setEnrollmentDate1').val();
	var addEnrollmentDate1 = $formValues.find('.addEnrollmentDate1').val();
	var setMoment = setEnrollmentDate1 ? moment(setEnrollmentDate1, 'MM/DD/YYYY') : null; 
	var addMoment = addEnrollmentDate1 ? moment(addEnrollmentDate1, 'MM/DD/YYYY') : null; 
	if(setMoment) { 
		var s = setMoment.format('YYYY-MM-DD'); 
		setEnrollmentDate1 = s;
	} 
	if(addMoment) { 
		var s = addMoment.format('YYYY-MM-DD'); 
		addEnrollmentDate1 = s;
	} 
	if(removeEnrollmentDate1 || setEnrollmentDate1 != null && setEnrollmentDate1 !== '')
		vals['setEnrollmentDate1'] = setEnrollmentDate1;
	if(addEnrollmentDate1 != null && addEnrollmentDate1 !== '')
		vals['addEnrollmentDate1'] = addEnrollmentDate1;
	var removeEnrollmentDate1 = $formValues.find('.removeEnrollmentDate1').val();
	if(removeEnrollmentDate1 != null && removeEnrollmentDate1 !== '')
		vals['removeEnrollmentDate1'] = removeEnrollmentDate1;

	var valueEnrollmentDate2 = $formValues.find('.valueEnrollmentDate2').val();
	var removeEnrollmentDate2 = $formValues.find('.removeEnrollmentDate2').val() === 'true';
	var setEnrollmentDate2 = removeEnrollmentDate2 ? null : $formValues.find('.setEnrollmentDate2').val();
	var addEnrollmentDate2 = $formValues.find('.addEnrollmentDate2').val();
	var setMoment = setEnrollmentDate2 ? moment(setEnrollmentDate2, 'MM/DD/YYYY') : null; 
	var addMoment = addEnrollmentDate2 ? moment(addEnrollmentDate2, 'MM/DD/YYYY') : null; 
	if(setMoment) { 
		var s = setMoment.format('YYYY-MM-DD'); 
		setEnrollmentDate2 = s;
	} 
	if(addMoment) { 
		var s = addMoment.format('YYYY-MM-DD'); 
		addEnrollmentDate2 = s;
	} 
	if(removeEnrollmentDate2 || setEnrollmentDate2 != null && setEnrollmentDate2 !== '')
		vals['setEnrollmentDate2'] = setEnrollmentDate2;
	if(addEnrollmentDate2 != null && addEnrollmentDate2 !== '')
		vals['addEnrollmentDate2'] = addEnrollmentDate2;
	var removeEnrollmentDate2 = $formValues.find('.removeEnrollmentDate2').val();
	if(removeEnrollmentDate2 != null && removeEnrollmentDate2 !== '')
		vals['removeEnrollmentDate2'] = removeEnrollmentDate2;

	var valueEnrollmentDate3 = $formValues.find('.valueEnrollmentDate3').val();
	var removeEnrollmentDate3 = $formValues.find('.removeEnrollmentDate3').val() === 'true';
	var setEnrollmentDate3 = removeEnrollmentDate3 ? null : $formValues.find('.setEnrollmentDate3').val();
	var addEnrollmentDate3 = $formValues.find('.addEnrollmentDate3').val();
	var setMoment = setEnrollmentDate3 ? moment(setEnrollmentDate3, 'MM/DD/YYYY') : null; 
	var addMoment = addEnrollmentDate3 ? moment(addEnrollmentDate3, 'MM/DD/YYYY') : null; 
	if(setMoment) { 
		var s = setMoment.format('YYYY-MM-DD'); 
		setEnrollmentDate3 = s;
	} 
	if(addMoment) { 
		var s = addMoment.format('YYYY-MM-DD'); 
		addEnrollmentDate3 = s;
	} 
	if(removeEnrollmentDate3 || setEnrollmentDate3 != null && setEnrollmentDate3 !== '')
		vals['setEnrollmentDate3'] = setEnrollmentDate3;
	if(addEnrollmentDate3 != null && addEnrollmentDate3 !== '')
		vals['addEnrollmentDate3'] = addEnrollmentDate3;
	var removeEnrollmentDate3 = $formValues.find('.removeEnrollmentDate3').val();
	if(removeEnrollmentDate3 != null && removeEnrollmentDate3 !== '')
		vals['removeEnrollmentDate3'] = removeEnrollmentDate3;

	var valueEnrollmentDate4 = $formValues.find('.valueEnrollmentDate4').val();
	var removeEnrollmentDate4 = $formValues.find('.removeEnrollmentDate4').val() === 'true';
	var setEnrollmentDate4 = removeEnrollmentDate4 ? null : $formValues.find('.setEnrollmentDate4').val();
	var addEnrollmentDate4 = $formValues.find('.addEnrollmentDate4').val();
	var setMoment = setEnrollmentDate4 ? moment(setEnrollmentDate4, 'MM/DD/YYYY') : null; 
	var addMoment = addEnrollmentDate4 ? moment(addEnrollmentDate4, 'MM/DD/YYYY') : null; 
	if(setMoment) { 
		var s = setMoment.format('YYYY-MM-DD'); 
		setEnrollmentDate4 = s;
	} 
	if(addMoment) { 
		var s = addMoment.format('YYYY-MM-DD'); 
		addEnrollmentDate4 = s;
	} 
	if(removeEnrollmentDate4 || setEnrollmentDate4 != null && setEnrollmentDate4 !== '')
		vals['setEnrollmentDate4'] = setEnrollmentDate4;
	if(addEnrollmentDate4 != null && addEnrollmentDate4 !== '')
		vals['addEnrollmentDate4'] = addEnrollmentDate4;
	var removeEnrollmentDate4 = $formValues.find('.removeEnrollmentDate4').val();
	if(removeEnrollmentDate4 != null && removeEnrollmentDate4 !== '')
		vals['removeEnrollmentDate4'] = removeEnrollmentDate4;

	var valueEnrollmentDate5 = $formValues.find('.valueEnrollmentDate5').val();
	var removeEnrollmentDate5 = $formValues.find('.removeEnrollmentDate5').val() === 'true';
	var setEnrollmentDate5 = removeEnrollmentDate5 ? null : $formValues.find('.setEnrollmentDate5').val();
	var addEnrollmentDate5 = $formValues.find('.addEnrollmentDate5').val();
	var setMoment = setEnrollmentDate5 ? moment(setEnrollmentDate5, 'MM/DD/YYYY') : null; 
	var addMoment = addEnrollmentDate5 ? moment(addEnrollmentDate5, 'MM/DD/YYYY') : null; 
	if(setMoment) { 
		var s = setMoment.format('YYYY-MM-DD'); 
		setEnrollmentDate5 = s;
	} 
	if(addMoment) { 
		var s = addMoment.format('YYYY-MM-DD'); 
		addEnrollmentDate5 = s;
	} 
	if(removeEnrollmentDate5 || setEnrollmentDate5 != null && setEnrollmentDate5 !== '')
		vals['setEnrollmentDate5'] = setEnrollmentDate5;
	if(addEnrollmentDate5 != null && addEnrollmentDate5 !== '')
		vals['addEnrollmentDate5'] = addEnrollmentDate5;
	var removeEnrollmentDate5 = $formValues.find('.removeEnrollmentDate5').val();
	if(removeEnrollmentDate5 != null && removeEnrollmentDate5 !== '')
		vals['removeEnrollmentDate5'] = removeEnrollmentDate5;

	var valueEnrollmentDate6 = $formValues.find('.valueEnrollmentDate6').val();
	var removeEnrollmentDate6 = $formValues.find('.removeEnrollmentDate6').val() === 'true';
	var setEnrollmentDate6 = removeEnrollmentDate6 ? null : $formValues.find('.setEnrollmentDate6').val();
	var addEnrollmentDate6 = $formValues.find('.addEnrollmentDate6').val();
	var setMoment = setEnrollmentDate6 ? moment(setEnrollmentDate6, 'MM/DD/YYYY') : null; 
	var addMoment = addEnrollmentDate6 ? moment(addEnrollmentDate6, 'MM/DD/YYYY') : null; 
	if(setMoment) { 
		var s = setMoment.format('YYYY-MM-DD'); 
		setEnrollmentDate6 = s;
	} 
	if(addMoment) { 
		var s = addMoment.format('YYYY-MM-DD'); 
		addEnrollmentDate6 = s;
	} 
	if(removeEnrollmentDate6 || setEnrollmentDate6 != null && setEnrollmentDate6 !== '')
		vals['setEnrollmentDate6'] = setEnrollmentDate6;
	if(addEnrollmentDate6 != null && addEnrollmentDate6 !== '')
		vals['addEnrollmentDate6'] = addEnrollmentDate6;
	var removeEnrollmentDate6 = $formValues.find('.removeEnrollmentDate6').val();
	if(removeEnrollmentDate6 != null && removeEnrollmentDate6 !== '')
		vals['removeEnrollmentDate6'] = removeEnrollmentDate6;

	var valueEnrollmentDate7 = $formValues.find('.valueEnrollmentDate7').val();
	var removeEnrollmentDate7 = $formValues.find('.removeEnrollmentDate7').val() === 'true';
	var setEnrollmentDate7 = removeEnrollmentDate7 ? null : $formValues.find('.setEnrollmentDate7').val();
	var addEnrollmentDate7 = $formValues.find('.addEnrollmentDate7').val();
	var setMoment = setEnrollmentDate7 ? moment(setEnrollmentDate7, 'MM/DD/YYYY') : null; 
	var addMoment = addEnrollmentDate7 ? moment(addEnrollmentDate7, 'MM/DD/YYYY') : null; 
	if(setMoment) { 
		var s = setMoment.format('YYYY-MM-DD'); 
		setEnrollmentDate7 = s;
	} 
	if(addMoment) { 
		var s = addMoment.format('YYYY-MM-DD'); 
		addEnrollmentDate7 = s;
	} 
	if(removeEnrollmentDate7 || setEnrollmentDate7 != null && setEnrollmentDate7 !== '')
		vals['setEnrollmentDate7'] = setEnrollmentDate7;
	if(addEnrollmentDate7 != null && addEnrollmentDate7 !== '')
		vals['addEnrollmentDate7'] = addEnrollmentDate7;
	var removeEnrollmentDate7 = $formValues.find('.removeEnrollmentDate7').val();
	if(removeEnrollmentDate7 != null && removeEnrollmentDate7 !== '')
		vals['removeEnrollmentDate7'] = removeEnrollmentDate7;

	var valueEnrollmentDate8 = $formValues.find('.valueEnrollmentDate8').val();
	var removeEnrollmentDate8 = $formValues.find('.removeEnrollmentDate8').val() === 'true';
	var setEnrollmentDate8 = removeEnrollmentDate8 ? null : $formValues.find('.setEnrollmentDate8').val();
	var addEnrollmentDate8 = $formValues.find('.addEnrollmentDate8').val();
	var setMoment = setEnrollmentDate8 ? moment(setEnrollmentDate8, 'MM/DD/YYYY') : null; 
	var addMoment = addEnrollmentDate8 ? moment(addEnrollmentDate8, 'MM/DD/YYYY') : null; 
	if(setMoment) { 
		var s = setMoment.format('YYYY-MM-DD'); 
		setEnrollmentDate8 = s;
	} 
	if(addMoment) { 
		var s = addMoment.format('YYYY-MM-DD'); 
		addEnrollmentDate8 = s;
	} 
	if(removeEnrollmentDate8 || setEnrollmentDate8 != null && setEnrollmentDate8 !== '')
		vals['setEnrollmentDate8'] = setEnrollmentDate8;
	if(addEnrollmentDate8 != null && addEnrollmentDate8 !== '')
		vals['addEnrollmentDate8'] = addEnrollmentDate8;
	var removeEnrollmentDate8 = $formValues.find('.removeEnrollmentDate8').val();
	if(removeEnrollmentDate8 != null && removeEnrollmentDate8 !== '')
		vals['removeEnrollmentDate8'] = removeEnrollmentDate8;

	var valueEnrollmentDate9 = $formValues.find('.valueEnrollmentDate9').val();
	var removeEnrollmentDate9 = $formValues.find('.removeEnrollmentDate9').val() === 'true';
	var setEnrollmentDate9 = removeEnrollmentDate9 ? null : $formValues.find('.setEnrollmentDate9').val();
	var addEnrollmentDate9 = $formValues.find('.addEnrollmentDate9').val();
	var setMoment = setEnrollmentDate9 ? moment(setEnrollmentDate9, 'MM/DD/YYYY') : null; 
	var addMoment = addEnrollmentDate9 ? moment(addEnrollmentDate9, 'MM/DD/YYYY') : null; 
	if(setMoment) { 
		var s = setMoment.format('YYYY-MM-DD'); 
		setEnrollmentDate9 = s;
	} 
	if(addMoment) { 
		var s = addMoment.format('YYYY-MM-DD'); 
		addEnrollmentDate9 = s;
	} 
	if(removeEnrollmentDate9 || setEnrollmentDate9 != null && setEnrollmentDate9 !== '')
		vals['setEnrollmentDate9'] = setEnrollmentDate9;
	if(addEnrollmentDate9 != null && addEnrollmentDate9 !== '')
		vals['addEnrollmentDate9'] = addEnrollmentDate9;
	var removeEnrollmentDate9 = $formValues.find('.removeEnrollmentDate9').val();
	if(removeEnrollmentDate9 != null && removeEnrollmentDate9 !== '')
		vals['removeEnrollmentDate9'] = removeEnrollmentDate9;

	var valueEnrollmentDate10 = $formValues.find('.valueEnrollmentDate10').val();
	var removeEnrollmentDate10 = $formValues.find('.removeEnrollmentDate10').val() === 'true';
	var setEnrollmentDate10 = removeEnrollmentDate10 ? null : $formValues.find('.setEnrollmentDate10').val();
	var addEnrollmentDate10 = $formValues.find('.addEnrollmentDate10').val();
	var setMoment = setEnrollmentDate10 ? moment(setEnrollmentDate10, 'MM/DD/YYYY') : null; 
	var addMoment = addEnrollmentDate10 ? moment(addEnrollmentDate10, 'MM/DD/YYYY') : null; 
	if(setMoment) { 
		var s = setMoment.format('YYYY-MM-DD'); 
		setEnrollmentDate10 = s;
	} 
	if(addMoment) { 
		var s = addMoment.format('YYYY-MM-DD'); 
		addEnrollmentDate10 = s;
	} 
	if(removeEnrollmentDate10 || setEnrollmentDate10 != null && setEnrollmentDate10 !== '')
		vals['setEnrollmentDate10'] = setEnrollmentDate10;
	if(addEnrollmentDate10 != null && addEnrollmentDate10 !== '')
		vals['addEnrollmentDate10'] = addEnrollmentDate10;
	var removeEnrollmentDate10 = $formValues.find('.removeEnrollmentDate10').val();
	if(removeEnrollmentDate10 != null && removeEnrollmentDate10 !== '')
		vals['removeEnrollmentDate10'] = removeEnrollmentDate10;

	patchSchoolEnrollmentVals(pk == null ? $.deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'pk:' + pk}], vals, success, error);
}

function patchSchoolEnrollmentFilters($formFilters) {
	var filters = [];
	if($formFilters) {

		var filterPk = $formFilters.find('.valuePk').val();
		if(filterPk != null && filterPk !== '')
			filters.push({ name: 'fq', value: 'pk:' + filterPk });

		var filterCreated = $formFilters.find('.valueCreated').val();
		if(filterCreated != null && filterCreated !== '')
			filters.push({ name: 'fq', value: 'created:' + filterCreated });

		var filterModified = $formFilters.find('.valueModified').val();
		if(filterModified != null && filterModified !== '')
			filters.push({ name: 'fq', value: 'modified:' + filterModified });

		var filterObjectId = $formFilters.find('.valueObjectId').val();
		if(filterObjectId != null && filterObjectId !== '')
			filters.push({ name: 'fq', value: 'objectId:' + filterObjectId });

		var $filterArchivedCheckbox = $formFilters.find('input.valueArchived[type = "checkbox"]');
		var $filterArchivedSelect = $formFilters.find('select.valueArchived');
		var filterArchived = $filterArchivedSelect.length ? $filterArchivedSelect.val() : $filterArchivedCheckbox.prop('checked');
		var filterArchivedSelectVal = $formFilters.find('select.filterArchived').val();
		var filterArchived = null;
		if(filterArchivedSelectVal !== '')
			filterArchived = filterArchivedSelectVal == 'true';
		if(filterArchived != null && filterArchived === true)
			filters.push({ name: 'fq', value: 'archived:' + filterArchived });

		var $filterDeletedCheckbox = $formFilters.find('input.valueDeleted[type = "checkbox"]');
		var $filterDeletedSelect = $formFilters.find('select.valueDeleted');
		var filterDeleted = $filterDeletedSelect.length ? $filterDeletedSelect.val() : $filterDeletedCheckbox.prop('checked');
		var filterDeletedSelectVal = $formFilters.find('select.filterDeleted').val();
		var filterDeleted = null;
		if(filterDeletedSelectVal !== '')
			filterDeleted = filterDeletedSelectVal == 'true';
		if(filterDeleted != null && filterDeleted === true)
			filters.push({ name: 'fq', value: 'deleted:' + filterDeleted });

		var filterEnrollmentGroupName = $formFilters.find('.valueEnrollmentGroupName').val();
		if(filterEnrollmentGroupName != null && filterEnrollmentGroupName !== '')
			filters.push({ name: 'fq', value: 'enrollmentGroupName:' + filterEnrollmentGroupName });

		var filterCustomerProfileId = $formFilters.find('.valueCustomerProfileId').val();
		if(filterCustomerProfileId != null && filterCustomerProfileId !== '')
			filters.push({ name: 'fq', value: 'customerProfileId:' + filterCustomerProfileId });

		var $filterEnrollmentPaymentCompleteCheckbox = $formFilters.find('input.valueEnrollmentPaymentComplete[type = "checkbox"]');
		var $filterEnrollmentPaymentCompleteSelect = $formFilters.find('select.valueEnrollmentPaymentComplete');
		var filterEnrollmentPaymentComplete = $filterEnrollmentPaymentCompleteSelect.length ? $filterEnrollmentPaymentCompleteSelect.val() : $filterEnrollmentPaymentCompleteCheckbox.prop('checked');
		var filterEnrollmentPaymentCompleteSelectVal = $formFilters.find('select.filterEnrollmentPaymentComplete').val();
		var filterEnrollmentPaymentComplete = null;
		if(filterEnrollmentPaymentCompleteSelectVal !== '')
			filterEnrollmentPaymentComplete = filterEnrollmentPaymentCompleteSelectVal == 'true';
		if(filterEnrollmentPaymentComplete != null && filterEnrollmentPaymentComplete === true)
			filters.push({ name: 'fq', value: 'enrollmentPaymentComplete:' + filterEnrollmentPaymentComplete });

		var $filterChildPottyTrainedCheckbox = $formFilters.find('input.valueChildPottyTrained[type = "checkbox"]');
		var $filterChildPottyTrainedSelect = $formFilters.find('select.valueChildPottyTrained');
		var filterChildPottyTrained = $filterChildPottyTrainedSelect.length ? $filterChildPottyTrainedSelect.val() : $filterChildPottyTrainedCheckbox.prop('checked');
		var filterChildPottyTrainedSelectVal = $formFilters.find('select.filterChildPottyTrained').val();
		var filterChildPottyTrained = null;
		if(filterChildPottyTrainedSelectVal !== '')
			filterChildPottyTrained = filterChildPottyTrainedSelectVal == 'true';
		if(filterChildPottyTrained != null && filterChildPottyTrained === true)
			filters.push({ name: 'fq', value: 'childPottyTrained:' + filterChildPottyTrained });

		var $filterEnrollmentPaymentEachMonthCheckbox = $formFilters.find('input.valueEnrollmentPaymentEachMonth[type = "checkbox"]');
		var $filterEnrollmentPaymentEachMonthSelect = $formFilters.find('select.valueEnrollmentPaymentEachMonth');
		var filterEnrollmentPaymentEachMonth = $filterEnrollmentPaymentEachMonthSelect.length ? $filterEnrollmentPaymentEachMonthSelect.val() : $filterEnrollmentPaymentEachMonthCheckbox.prop('checked');
		var filterEnrollmentPaymentEachMonthSelectVal = $formFilters.find('select.filterEnrollmentPaymentEachMonth').val();
		var filterEnrollmentPaymentEachMonth = null;
		if(filterEnrollmentPaymentEachMonthSelectVal !== '')
			filterEnrollmentPaymentEachMonth = filterEnrollmentPaymentEachMonthSelectVal == 'true';
		if(filterEnrollmentPaymentEachMonth != null && filterEnrollmentPaymentEachMonth === true)
			filters.push({ name: 'fq', value: 'enrollmentPaymentEachMonth:' + filterEnrollmentPaymentEachMonth });

		var $filterEnrollmentImmunizationsCheckbox = $formFilters.find('input.valueEnrollmentImmunizations[type = "checkbox"]');
		var $filterEnrollmentImmunizationsSelect = $formFilters.find('select.valueEnrollmentImmunizations');
		var filterEnrollmentImmunizations = $filterEnrollmentImmunizationsSelect.length ? $filterEnrollmentImmunizationsSelect.val() : $filterEnrollmentImmunizationsCheckbox.prop('checked');
		var filterEnrollmentImmunizationsSelectVal = $formFilters.find('select.filterEnrollmentImmunizations').val();
		var filterEnrollmentImmunizations = null;
		if(filterEnrollmentImmunizationsSelectVal !== '')
			filterEnrollmentImmunizations = filterEnrollmentImmunizationsSelectVal == 'true';
		if(filterEnrollmentImmunizations != null && filterEnrollmentImmunizations === true)
			filters.push({ name: 'fq', value: 'enrollmentImmunizations:' + filterEnrollmentImmunizations });

		var $filterEnrollmentApprovedCheckbox = $formFilters.find('input.valueEnrollmentApproved[type = "checkbox"]');
		var $filterEnrollmentApprovedSelect = $formFilters.find('select.valueEnrollmentApproved');
		var filterEnrollmentApproved = $filterEnrollmentApprovedSelect.length ? $filterEnrollmentApprovedSelect.val() : $filterEnrollmentApprovedCheckbox.prop('checked');
		var filterEnrollmentApprovedSelectVal = $formFilters.find('select.filterEnrollmentApproved').val();
		var filterEnrollmentApproved = null;
		if(filterEnrollmentApprovedSelectVal !== '')
			filterEnrollmentApproved = filterEnrollmentApprovedSelectVal == 'true';
		if(filterEnrollmentApproved != null && filterEnrollmentApproved === true)
			filters.push({ name: 'fq', value: 'enrollmentApproved:' + filterEnrollmentApproved });

		var $filterFamilyMarriedCheckbox = $formFilters.find('input.valueFamilyMarried[type = "checkbox"]');
		var $filterFamilyMarriedSelect = $formFilters.find('select.valueFamilyMarried');
		var filterFamilyMarried = $filterFamilyMarriedSelect.length ? $filterFamilyMarriedSelect.val() : $filterFamilyMarriedCheckbox.prop('checked');
		var filterFamilyMarriedSelectVal = $formFilters.find('select.filterFamilyMarried').val();
		var filterFamilyMarried = null;
		if(filterFamilyMarriedSelectVal !== '')
			filterFamilyMarried = filterFamilyMarriedSelectVal == 'true';
		if(filterFamilyMarried != null && filterFamilyMarried === true)
			filters.push({ name: 'fq', value: 'familyMarried:' + filterFamilyMarried });

		var $filterFamilySeparatedCheckbox = $formFilters.find('input.valueFamilySeparated[type = "checkbox"]');
		var $filterFamilySeparatedSelect = $formFilters.find('select.valueFamilySeparated');
		var filterFamilySeparated = $filterFamilySeparatedSelect.length ? $filterFamilySeparatedSelect.val() : $filterFamilySeparatedCheckbox.prop('checked');
		var filterFamilySeparatedSelectVal = $formFilters.find('select.filterFamilySeparated').val();
		var filterFamilySeparated = null;
		if(filterFamilySeparatedSelectVal !== '')
			filterFamilySeparated = filterFamilySeparatedSelectVal == 'true';
		if(filterFamilySeparated != null && filterFamilySeparated === true)
			filters.push({ name: 'fq', value: 'familySeparated:' + filterFamilySeparated });

		var $filterFamilyDivorcedCheckbox = $formFilters.find('input.valueFamilyDivorced[type = "checkbox"]');
		var $filterFamilyDivorcedSelect = $formFilters.find('select.valueFamilyDivorced');
		var filterFamilyDivorced = $filterFamilyDivorcedSelect.length ? $filterFamilyDivorcedSelect.val() : $filterFamilyDivorcedCheckbox.prop('checked');
		var filterFamilyDivorcedSelectVal = $formFilters.find('select.filterFamilyDivorced').val();
		var filterFamilyDivorced = null;
		if(filterFamilyDivorcedSelectVal !== '')
			filterFamilyDivorced = filterFamilyDivorcedSelectVal == 'true';
		if(filterFamilyDivorced != null && filterFamilyDivorced === true)
			filters.push({ name: 'fq', value: 'familyDivorced:' + filterFamilyDivorced });

		var filterFamilyAddress = $formFilters.find('.valueFamilyAddress').val();
		if(filterFamilyAddress != null && filterFamilyAddress !== '')
			filters.push({ name: 'fq', value: 'familyAddress:' + filterFamilyAddress });

		var filterEnrollmentSpecialConsiderations = $formFilters.find('.valueEnrollmentSpecialConsiderations').val();
		if(filterEnrollmentSpecialConsiderations != null && filterEnrollmentSpecialConsiderations !== '')
			filters.push({ name: 'fq', value: 'enrollmentSpecialConsiderations:' + filterEnrollmentSpecialConsiderations });

		var filterChildMedicalConditions = $formFilters.find('.valueChildMedicalConditions').val();
		if(filterChildMedicalConditions != null && filterChildMedicalConditions !== '')
			filters.push({ name: 'fq', value: 'childMedicalConditions:' + filterChildMedicalConditions });

		var filterChildPreviousSchoolsAttended = $formFilters.find('.valueChildPreviousSchoolsAttended').val();
		if(filterChildPreviousSchoolsAttended != null && filterChildPreviousSchoolsAttended !== '')
			filters.push({ name: 'fq', value: 'childPreviousSchoolsAttended:' + filterChildPreviousSchoolsAttended });

		var filterFamilyHowDoYouKnowTheSchool = $formFilters.find('.valueFamilyHowDoYouKnowTheSchool').val();
		if(filterFamilyHowDoYouKnowTheSchool != null && filterFamilyHowDoYouKnowTheSchool !== '')
			filters.push({ name: 'fq', value: 'familyHowDoYouKnowTheSchool:' + filterFamilyHowDoYouKnowTheSchool });

		var filterChildDescription = $formFilters.find('.valueChildDescription').val();
		if(filterChildDescription != null && filterChildDescription !== '')
			filters.push({ name: 'fq', value: 'childDescription:' + filterChildDescription });

		var filterChildObjectives = $formFilters.find('.valueChildObjectives').val();
		if(filterChildObjectives != null && filterChildObjectives !== '')
			filters.push({ name: 'fq', value: 'childObjectives:' + filterChildObjectives });

		var filterYearKey = $formFilters.find('.valueYearKey').val();
		if(filterYearKey != null && filterYearKey !== '')
			filters.push({ name: 'fq', value: 'yearKey:' + filterYearKey });

		var filterBlockKeys = $formFilters.find('.valueBlockKeys').val();
		if(filterBlockKeys != null && filterBlockKeys !== '')
			filters.push({ name: 'fq', value: 'blockKeys:' + filterBlockKeys });

		var filterChildKey = $formFilters.find('.valueChildKey').val();
		if(filterChildKey != null && filterChildKey !== '')
			filters.push({ name: 'fq', value: 'childKey:' + filterChildKey });

		var filterGuardianKeys = $formFilters.find('.valueGuardianKeys').val();
		if(filterGuardianKeys != null && filterGuardianKeys !== '')
			filters.push({ name: 'fq', value: 'guardianKeys:' + filterGuardianKeys });

		var filterMomKeys = $formFilters.find('.valueMomKeys').val();
		if(filterMomKeys != null && filterMomKeys !== '')
			filters.push({ name: 'fq', value: 'momKeys:' + filterMomKeys });

		var filterDadKeys = $formFilters.find('.valueDadKeys').val();
		if(filterDadKeys != null && filterDadKeys !== '')
			filters.push({ name: 'fq', value: 'dadKeys:' + filterDadKeys });

		var filterUserKeys = $formFilters.find('.valueUserKeys').val();
		if(filterUserKeys != null && filterUserKeys !== '')
			filters.push({ name: 'fq', value: 'userKeys:' + filterUserKeys });

		var filterPaymentKeys = $formFilters.find('.valuePaymentKeys').val();
		if(filterPaymentKeys != null && filterPaymentKeys !== '')
			filters.push({ name: 'fq', value: 'paymentKeys:' + filterPaymentKeys });

		var filterInheritPk = $formFilters.find('.valueInheritPk').val();
		if(filterInheritPk != null && filterInheritPk !== '')
			filters.push({ name: 'fq', value: 'inheritPk:' + filterInheritPk });

		var filterId = $formFilters.find('.valueId').val();
		if(filterId != null && filterId !== '')
			filters.push({ name: 'fq', value: 'id:' + filterId });

		var filterClassCanonicalName = $formFilters.find('.valueClassCanonicalName').val();
		if(filterClassCanonicalName != null && filterClassCanonicalName !== '')
			filters.push({ name: 'fq', value: 'classCanonicalName:' + filterClassCanonicalName });

		var filterClassSimpleName = $formFilters.find('.valueClassSimpleName').val();
		if(filterClassSimpleName != null && filterClassSimpleName !== '')
			filters.push({ name: 'fq', value: 'classSimpleName:' + filterClassSimpleName });

		var filterClassCanonicalNames = $formFilters.find('.valueClassCanonicalNames').val();
		if(filterClassCanonicalNames != null && filterClassCanonicalNames !== '')
			filters.push({ name: 'fq', value: 'classCanonicalNames:' + filterClassCanonicalNames });

		var filterSessionId = $formFilters.find('.valueSessionId').val();
		if(filterSessionId != null && filterSessionId !== '')
			filters.push({ name: 'fq', value: 'sessionId:' + filterSessionId });

		var filterUserId = $formFilters.find('.valueUserId').val();
		if(filterUserId != null && filterUserId !== '')
			filters.push({ name: 'fq', value: 'userId:' + filterUserId });

		var filterUserKey = $formFilters.find('.valueUserKey').val();
		if(filterUserKey != null && filterUserKey !== '')
			filters.push({ name: 'fq', value: 'userKey:' + filterUserKey });

		var filterSaves = $formFilters.find('.valueSaves').val();
		if(filterSaves != null && filterSaves !== '')
			filters.push({ name: 'fq', value: 'saves:' + filterSaves });

		var filterObjectTitle = $formFilters.find('.valueObjectTitle').val();
		if(filterObjectTitle != null && filterObjectTitle !== '')
			filters.push({ name: 'fq', value: 'objectTitle:' + filterObjectTitle });

		var filterObjectSuggest = $formFilters.find('.valueObjectSuggest').val();
		if(filterObjectSuggest != null && filterObjectSuggest !== '')
			filters.push({ name: 'q', value: 'objectSuggest:' + filterObjectSuggest });

		var filterObjectText = $formFilters.find('.valueObjectText').val();
		if(filterObjectText != null && filterObjectText !== '')
			filters.push({ name: 'fq', value: 'objectText:' + filterObjectText });

		var filterPageUrlId = $formFilters.find('.valuePageUrlId').val();
		if(filterPageUrlId != null && filterPageUrlId !== '')
			filters.push({ name: 'fq', value: 'pageUrlId:' + filterPageUrlId });

		var filterPageUrlPk = $formFilters.find('.valuePageUrlPk').val();
		if(filterPageUrlPk != null && filterPageUrlPk !== '')
			filters.push({ name: 'fq', value: 'pageUrlPk:' + filterPageUrlPk });

		var filterPageUrlApi = $formFilters.find('.valuePageUrlApi').val();
		if(filterPageUrlApi != null && filterPageUrlApi !== '')
			filters.push({ name: 'fq', value: 'pageUrlApi:' + filterPageUrlApi });

		var filterEnrollmentKey = $formFilters.find('.valueEnrollmentKey').val();
		if(filterEnrollmentKey != null && filterEnrollmentKey !== '')
			filters.push({ name: 'fq', value: 'enrollmentKey:' + filterEnrollmentKey });

		var filterSchoolKey = $formFilters.find('.valueSchoolKey').val();
		if(filterSchoolKey != null && filterSchoolKey !== '')
			filters.push({ name: 'fq', value: 'schoolKey:' + filterSchoolKey });

		var filterSessionKey = $formFilters.find('.valueSessionKey').val();
		if(filterSessionKey != null && filterSessionKey !== '')
			filters.push({ name: 'fq', value: 'sessionKey:' + filterSessionKey });

		var filterAgeKey = $formFilters.find('.valueAgeKey').val();
		if(filterAgeKey != null && filterAgeKey !== '')
			filters.push({ name: 'fq', value: 'ageKey:' + filterAgeKey });

		var filterBlockKey = $formFilters.find('.valueBlockKey').val();
		if(filterBlockKey != null && filterBlockKey !== '')
			filters.push({ name: 'fq', value: 'blockKey:' + filterBlockKey });

		var filterEnrollmentFormKey = $formFilters.find('.valueEnrollmentFormKey').val();
		if(filterEnrollmentFormKey != null && filterEnrollmentFormKey !== '')
			filters.push({ name: 'fq', value: 'enrollmentFormKey:' + filterEnrollmentFormKey });

		var filterEducationSort = $formFilters.find('.valueEducationSort').val();
		if(filterEducationSort != null && filterEducationSort !== '')
			filters.push({ name: 'fq', value: 'educationSort:' + filterEducationSort });

		var filterSchoolSort = $formFilters.find('.valueSchoolSort').val();
		if(filterSchoolSort != null && filterSchoolSort !== '')
			filters.push({ name: 'fq', value: 'schoolSort:' + filterSchoolSort });

		var filterYearSort = $formFilters.find('.valueYearSort').val();
		if(filterYearSort != null && filterYearSort !== '')
			filters.push({ name: 'fq', value: 'yearSort:' + filterYearSort });

		var filterSeasonSort = $formFilters.find('.valueSeasonSort').val();
		if(filterSeasonSort != null && filterSeasonSort !== '')
			filters.push({ name: 'fq', value: 'seasonSort:' + filterSeasonSort });

		var filterSessionSort = $formFilters.find('.valueSessionSort').val();
		if(filterSessionSort != null && filterSessionSort !== '')
			filters.push({ name: 'fq', value: 'sessionSort:' + filterSessionSort });

		var filterAgeSort = $formFilters.find('.valueAgeSort').val();
		if(filterAgeSort != null && filterAgeSort !== '')
			filters.push({ name: 'fq', value: 'ageSort:' + filterAgeSort });

		var filterChildFirstName = $formFilters.find('.valueChildFirstName').val();
		if(filterChildFirstName != null && filterChildFirstName !== '')
			filters.push({ name: 'fq', value: 'childFirstName:' + filterChildFirstName });

		var filterChildFirstNamePreferred = $formFilters.find('.valueChildFirstNamePreferred').val();
		if(filterChildFirstNamePreferred != null && filterChildFirstNamePreferred !== '')
			filters.push({ name: 'fq', value: 'childFirstNamePreferred:' + filterChildFirstNamePreferred });

		var filterChildFamilyName = $formFilters.find('.valueChildFamilyName').val();
		if(filterChildFamilyName != null && filterChildFamilyName !== '')
			filters.push({ name: 'fq', value: 'childFamilyName:' + filterChildFamilyName });

		var filterMomFirstName = $formFilters.find('.valueMomFirstName').val();
		if(filterMomFirstName != null && filterMomFirstName !== '')
			filters.push({ name: 'fq', value: 'momFirstName:' + filterMomFirstName });

		var filterMomFirstNamePreferred = $formFilters.find('.valueMomFirstNamePreferred').val();
		if(filterMomFirstNamePreferred != null && filterMomFirstNamePreferred !== '')
			filters.push({ name: 'fq', value: 'momFirstNamePreferred:' + filterMomFirstNamePreferred });

		var filterMomCompleteNamePreferred = $formFilters.find('.valueMomCompleteNamePreferred').val();
		if(filterMomCompleteNamePreferred != null && filterMomCompleteNamePreferred !== '')
			filters.push({ name: 'fq', value: 'momCompleteNamePreferred:' + filterMomCompleteNamePreferred });

		var filterDadFirstName = $formFilters.find('.valueDadFirstName').val();
		if(filterDadFirstName != null && filterDadFirstName !== '')
			filters.push({ name: 'fq', value: 'dadFirstName:' + filterDadFirstName });

		var filterDadFirstNamePreferred = $formFilters.find('.valueDadFirstNamePreferred').val();
		if(filterDadFirstNamePreferred != null && filterDadFirstNamePreferred !== '')
			filters.push({ name: 'fq', value: 'dadFirstNamePreferred:' + filterDadFirstNamePreferred });

		var filterDadCompleteNamePreferred = $formFilters.find('.valueDadCompleteNamePreferred').val();
		if(filterDadCompleteNamePreferred != null && filterDadCompleteNamePreferred !== '')
			filters.push({ name: 'fq', value: 'dadCompleteNamePreferred:' + filterDadCompleteNamePreferred });

		var filterChildCompleteName = $formFilters.find('.valueChildCompleteName').val();
		if(filterChildCompleteName != null && filterChildCompleteName !== '')
			filters.push({ name: 'fq', value: 'childCompleteName:' + filterChildCompleteName });

		var filterChildCompleteNamePreferred = $formFilters.find('.valueChildCompleteNamePreferred').val();
		if(filterChildCompleteNamePreferred != null && filterChildCompleteNamePreferred !== '')
			filters.push({ name: 'fq', value: 'childCompleteNamePreferred:' + filterChildCompleteNamePreferred });

		var filterChildBirthDate = $formFilters.find('.valueChildBirthDate').val();
		if(filterChildBirthDate != null && filterChildBirthDate !== '')
			filters.push({ name: 'fq', value: 'childBirthDate:' + filterChildBirthDate });

		var filterChildBirthDateYear = $formFilters.find('.valueChildBirthDateYear').val();
		if(filterChildBirthDateYear != null && filterChildBirthDateYear !== '')
			filters.push({ name: 'fq', value: 'childBirthDateYear:' + filterChildBirthDateYear });

		var filterChildBirthDateMonthOfYear = $formFilters.find('.valueChildBirthDateMonthOfYear').val();
		if(filterChildBirthDateMonthOfYear != null && filterChildBirthDateMonthOfYear !== '')
			filters.push({ name: 'fq', value: 'childBirthDateMonthOfYear:' + filterChildBirthDateMonthOfYear });

		var filterChildBirthDateDayOfWeek = $formFilters.find('.valueChildBirthDateDayOfWeek').val();
		if(filterChildBirthDateDayOfWeek != null && filterChildBirthDateDayOfWeek !== '')
			filters.push({ name: 'fq', value: 'childBirthDateDayOfWeek:' + filterChildBirthDateDayOfWeek });

		var filterChildBirthMonth = $formFilters.find('.valueChildBirthMonth').val();
		if(filterChildBirthMonth != null && filterChildBirthMonth !== '')
			filters.push({ name: 'fq', value: 'childBirthMonth:' + filterChildBirthMonth });

		var filterChildBirthDay = $formFilters.find('.valueChildBirthDay').val();
		if(filterChildBirthDay != null && filterChildBirthDay !== '')
			filters.push({ name: 'fq', value: 'childBirthDay:' + filterChildBirthDay });

		var filterSchoolName = $formFilters.find('.valueSchoolName').val();
		if(filterSchoolName != null && filterSchoolName !== '')
			filters.push({ name: 'fq', value: 'schoolName:' + filterSchoolName });

		var filterSchoolCompleteName = $formFilters.find('.valueSchoolCompleteName').val();
		if(filterSchoolCompleteName != null && filterSchoolCompleteName !== '')
			filters.push({ name: 'fq', value: 'schoolCompleteName:' + filterSchoolCompleteName });

		var filterSchoolLocation = $formFilters.find('.valueSchoolLocation').val();
		if(filterSchoolLocation != null && filterSchoolLocation !== '')
			filters.push({ name: 'fq', value: 'schoolLocation:' + filterSchoolLocation });

		var filterSchoolAddress = $formFilters.find('.valueSchoolAddress').val();
		if(filterSchoolAddress != null && filterSchoolAddress !== '')
			filters.push({ name: 'fq', value: 'schoolAddress:' + filterSchoolAddress });

		var filterSchoolPhoneNumber = $formFilters.find('.valueSchoolPhoneNumber').val();
		if(filterSchoolPhoneNumber != null && filterSchoolPhoneNumber !== '')
			filters.push({ name: 'fq', value: 'schoolPhoneNumber:' + filterSchoolPhoneNumber });

		var filterSchoolForm = $formFilters.find('.valueSchoolForm').val();
		if(filterSchoolForm != null && filterSchoolForm !== '')
			filters.push({ name: 'fq', value: 'schoolForm:' + filterSchoolForm });

		var filterSchoolNumber = $formFilters.find('.valueSchoolNumber').val();
		if(filterSchoolNumber != null && filterSchoolNumber !== '')
			filters.push({ name: 'fq', value: 'schoolNumber:' + filterSchoolNumber });

		var filterSchoolAdministratorName = $formFilters.find('.valueSchoolAdministratorName').val();
		if(filterSchoolAdministratorName != null && filterSchoolAdministratorName !== '')
			filters.push({ name: 'fq', value: 'schoolAdministratorName:' + filterSchoolAdministratorName });

		var filterYearStart = $formFilters.find('.valueYearStart').val();
		if(filterYearStart != null && filterYearStart !== '')
			filters.push({ name: 'fq', value: 'yearStart:' + filterYearStart });

		var filterYearEnd = $formFilters.find('.valueYearEnd').val();
		if(filterYearEnd != null && filterYearEnd !== '')
			filters.push({ name: 'fq', value: 'yearEnd:' + filterYearEnd });

		var filterSeasonStartDate = $formFilters.find('.valueSeasonStartDate').val();
		if(filterSeasonStartDate != null && filterSeasonStartDate !== '')
			filters.push({ name: 'fq', value: 'seasonStartDate:' + filterSeasonStartDate });

		var filterYearEnrollmentFee = $formFilters.find('.valueYearEnrollmentFee').val();
		if(filterYearEnrollmentFee != null && filterYearEnrollmentFee !== '')
			filters.push({ name: 'fq', value: 'yearEnrollmentFee:' + filterYearEnrollmentFee });

		var filterSessionStartDate = $formFilters.find('.valueSessionStartDate').val();
		if(filterSessionStartDate != null && filterSessionStartDate !== '')
			filters.push({ name: 'fq', value: 'sessionStartDate:' + filterSessionStartDate });

		var filterSessionEndDate = $formFilters.find('.valueSessionEndDate').val();
		if(filterSessionEndDate != null && filterSessionEndDate !== '')
			filters.push({ name: 'fq', value: 'sessionEndDate:' + filterSessionEndDate });

		var filterAgeCompleteName = $formFilters.find('.valueAgeCompleteName').val();
		if(filterAgeCompleteName != null && filterAgeCompleteName !== '')
			filters.push({ name: 'fq', value: 'ageCompleteName:' + filterAgeCompleteName });

		var filterAgeStart = $formFilters.find('.valueAgeStart').val();
		if(filterAgeStart != null && filterAgeStart !== '')
			filters.push({ name: 'fq', value: 'ageStart:' + filterAgeStart });

		var filterAgeEnd = $formFilters.find('.valueAgeEnd').val();
		if(filterAgeEnd != null && filterAgeEnd !== '')
			filters.push({ name: 'fq', value: 'ageEnd:' + filterAgeEnd });

		var filterBlockStartTime = $formFilters.find('.valueBlockStartTime').val();
		if(filterBlockStartTime != null && filterBlockStartTime !== '')
			filters.push({ name: 'fq', value: 'blockStartTime:' + filterBlockStartTime });

		var filterBlockEndTime = $formFilters.find('.valueBlockEndTime').val();
		if(filterBlockEndTime != null && filterBlockEndTime !== '')
			filters.push({ name: 'fq', value: 'blockEndTime:' + filterBlockEndTime });

		var filterBlockPricePerMonth = $formFilters.find('.valueBlockPricePerMonth').val();
		if(filterBlockPricePerMonth != null && filterBlockPricePerMonth !== '')
			filters.push({ name: 'fq', value: 'blockPricePerMonth:' + filterBlockPricePerMonth });

		var $filterBlockSundayCheckbox = $formFilters.find('input.valueBlockSunday[type = "checkbox"]');
		var $filterBlockSundaySelect = $formFilters.find('select.valueBlockSunday');
		var filterBlockSunday = $filterBlockSundaySelect.length ? $filterBlockSundaySelect.val() : $filterBlockSundayCheckbox.prop('checked');
		var filterBlockSundaySelectVal = $formFilters.find('select.filterBlockSunday').val();
		var filterBlockSunday = null;
		if(filterBlockSundaySelectVal !== '')
			filterBlockSunday = filterBlockSundaySelectVal == 'true';
		if(filterBlockSunday != null && filterBlockSunday === true)
			filters.push({ name: 'fq', value: 'blockSunday:' + filterBlockSunday });

		var $filterBlockMondayCheckbox = $formFilters.find('input.valueBlockMonday[type = "checkbox"]');
		var $filterBlockMondaySelect = $formFilters.find('select.valueBlockMonday');
		var filterBlockMonday = $filterBlockMondaySelect.length ? $filterBlockMondaySelect.val() : $filterBlockMondayCheckbox.prop('checked');
		var filterBlockMondaySelectVal = $formFilters.find('select.filterBlockMonday').val();
		var filterBlockMonday = null;
		if(filterBlockMondaySelectVal !== '')
			filterBlockMonday = filterBlockMondaySelectVal == 'true';
		if(filterBlockMonday != null && filterBlockMonday === true)
			filters.push({ name: 'fq', value: 'blockMonday:' + filterBlockMonday });

		var $filterBlockTuesdayCheckbox = $formFilters.find('input.valueBlockTuesday[type = "checkbox"]');
		var $filterBlockTuesdaySelect = $formFilters.find('select.valueBlockTuesday');
		var filterBlockTuesday = $filterBlockTuesdaySelect.length ? $filterBlockTuesdaySelect.val() : $filterBlockTuesdayCheckbox.prop('checked');
		var filterBlockTuesdaySelectVal = $formFilters.find('select.filterBlockTuesday').val();
		var filterBlockTuesday = null;
		if(filterBlockTuesdaySelectVal !== '')
			filterBlockTuesday = filterBlockTuesdaySelectVal == 'true';
		if(filterBlockTuesday != null && filterBlockTuesday === true)
			filters.push({ name: 'fq', value: 'blockTuesday:' + filterBlockTuesday });

		var $filterBlockWednesdayCheckbox = $formFilters.find('input.valueBlockWednesday[type = "checkbox"]');
		var $filterBlockWednesdaySelect = $formFilters.find('select.valueBlockWednesday');
		var filterBlockWednesday = $filterBlockWednesdaySelect.length ? $filterBlockWednesdaySelect.val() : $filterBlockWednesdayCheckbox.prop('checked');
		var filterBlockWednesdaySelectVal = $formFilters.find('select.filterBlockWednesday').val();
		var filterBlockWednesday = null;
		if(filterBlockWednesdaySelectVal !== '')
			filterBlockWednesday = filterBlockWednesdaySelectVal == 'true';
		if(filterBlockWednesday != null && filterBlockWednesday === true)
			filters.push({ name: 'fq', value: 'blockWednesday:' + filterBlockWednesday });

		var $filterBlockThursdayCheckbox = $formFilters.find('input.valueBlockThursday[type = "checkbox"]');
		var $filterBlockThursdaySelect = $formFilters.find('select.valueBlockThursday');
		var filterBlockThursday = $filterBlockThursdaySelect.length ? $filterBlockThursdaySelect.val() : $filterBlockThursdayCheckbox.prop('checked');
		var filterBlockThursdaySelectVal = $formFilters.find('select.filterBlockThursday').val();
		var filterBlockThursday = null;
		if(filterBlockThursdaySelectVal !== '')
			filterBlockThursday = filterBlockThursdaySelectVal == 'true';
		if(filterBlockThursday != null && filterBlockThursday === true)
			filters.push({ name: 'fq', value: 'blockThursday:' + filterBlockThursday });

		var $filterBlockFridayCheckbox = $formFilters.find('input.valueBlockFriday[type = "checkbox"]');
		var $filterBlockFridaySelect = $formFilters.find('select.valueBlockFriday');
		var filterBlockFriday = $filterBlockFridaySelect.length ? $filterBlockFridaySelect.val() : $filterBlockFridayCheckbox.prop('checked');
		var filterBlockFridaySelectVal = $formFilters.find('select.filterBlockFriday').val();
		var filterBlockFriday = null;
		if(filterBlockFridaySelectVal !== '')
			filterBlockFriday = filterBlockFridaySelectVal == 'true';
		if(filterBlockFriday != null && filterBlockFriday === true)
			filters.push({ name: 'fq', value: 'blockFriday:' + filterBlockFriday });

		var $filterBlockSaturdayCheckbox = $formFilters.find('input.valueBlockSaturday[type = "checkbox"]');
		var $filterBlockSaturdaySelect = $formFilters.find('select.valueBlockSaturday');
		var filterBlockSaturday = $filterBlockSaturdaySelect.length ? $filterBlockSaturdaySelect.val() : $filterBlockSaturdayCheckbox.prop('checked');
		var filterBlockSaturdaySelectVal = $formFilters.find('select.filterBlockSaturday').val();
		var filterBlockSaturday = null;
		if(filterBlockSaturdaySelectVal !== '')
			filterBlockSaturday = filterBlockSaturdaySelectVal == 'true';
		if(filterBlockSaturday != null && filterBlockSaturday === true)
			filters.push({ name: 'fq', value: 'blockSaturday:' + filterBlockSaturday });

		var filterBlockTotalPrice = $formFilters.find('.valueBlockTotalPrice').val();
		if(filterBlockTotalPrice != null && filterBlockTotalPrice !== '')
			filters.push({ name: 'fq', value: 'blockTotalPrice:' + filterBlockTotalPrice });

		var filterBlockAdminName = $formFilters.find('.valueBlockAdminName').val();
		if(filterBlockAdminName != null && filterBlockAdminName !== '')
			filters.push({ name: 'fq', value: 'blockAdminName:' + filterBlockAdminName });

		var filterBlockShortName = $formFilters.find('.valueBlockShortName').val();
		if(filterBlockShortName != null && filterBlockShortName !== '')
			filters.push({ name: 'fq', value: 'blockShortName:' + filterBlockShortName });

		var filterBlockCompleteName = $formFilters.find('.valueBlockCompleteName').val();
		if(filterBlockCompleteName != null && filterBlockCompleteName !== '')
			filters.push({ name: 'fq', value: 'blockCompleteName:' + filterBlockCompleteName });

		var filterEnrollmentGroupColor = $formFilters.find('.valueEnrollmentGroupColor').val();
		if(filterEnrollmentGroupColor != null && filterEnrollmentGroupColor !== '')
			filters.push({ name: 'fq', value: 'enrollmentGroupColor:' + filterEnrollmentGroupColor });

		var filterEnrollmentChargeDate = $formFilters.find('.valueEnrollmentChargeDate').val();
		if(filterEnrollmentChargeDate != null && filterEnrollmentChargeDate !== '')
			filters.push({ name: 'fq', value: 'enrollmentChargeDate:' + filterEnrollmentChargeDate });

		var filterPaymentLastDate = $formFilters.find('.valuePaymentLastDate').val();
		if(filterPaymentLastDate != null && filterPaymentLastDate !== '')
			filters.push({ name: 'fq', value: 'paymentLastDate:' + filterPaymentLastDate });

		var filterPaymentLastStr = $formFilters.find('.valuePaymentLastStr').val();
		if(filterPaymentLastStr != null && filterPaymentLastStr !== '')
			filters.push({ name: 'fq', value: 'paymentLastStr:' + filterPaymentLastStr });

		var filterPaymentAmount = $formFilters.find('.valuePaymentAmount').val();
		if(filterPaymentAmount != null && filterPaymentAmount !== '')
			filters.push({ name: 'fq', value: 'paymentAmount:' + filterPaymentAmount });

		var filterChargeAmount = $formFilters.find('.valueChargeAmount').val();
		if(filterChargeAmount != null && filterChargeAmount !== '')
			filters.push({ name: 'fq', value: 'chargeAmount:' + filterChargeAmount });

		var filterChargeAmountFuture = $formFilters.find('.valueChargeAmountFuture').val();
		if(filterChargeAmountFuture != null && filterChargeAmountFuture !== '')
			filters.push({ name: 'fq', value: 'chargeAmountFuture:' + filterChargeAmountFuture });

		var filterChargeAmountDue = $formFilters.find('.valueChargeAmountDue').val();
		if(filterChargeAmountDue != null && filterChargeAmountDue !== '')
			filters.push({ name: 'fq', value: 'chargeAmountDue:' + filterChargeAmountDue });

		var filterChargeAmountNotPassed = $formFilters.find('.valueChargeAmountNotPassed').val();
		if(filterChargeAmountNotPassed != null && filterChargeAmountNotPassed !== '')
			filters.push({ name: 'fq', value: 'chargeAmountNotPassed:' + filterChargeAmountNotPassed });

		var filterChargesNow = $formFilters.find('.valueChargesNow').val();
		if(filterChargesNow != null && filterChargesNow !== '')
			filters.push({ name: 'fq', value: 'chargesNow:' + filterChargesNow });

		var $filterPaymentsCurrentCheckbox = $formFilters.find('input.valuePaymentsCurrent[type = "checkbox"]');
		var $filterPaymentsCurrentSelect = $formFilters.find('select.valuePaymentsCurrent');
		var filterPaymentsCurrent = $filterPaymentsCurrentSelect.length ? $filterPaymentsCurrentSelect.val() : $filterPaymentsCurrentCheckbox.prop('checked');
		var filterPaymentsCurrentSelectVal = $formFilters.find('select.filterPaymentsCurrent').val();
		var filterPaymentsCurrent = null;
		if(filterPaymentsCurrentSelectVal !== '')
			filterPaymentsCurrent = filterPaymentsCurrentSelectVal == 'true';
		if(filterPaymentsCurrent != null && filterPaymentsCurrent === true)
			filters.push({ name: 'fq', value: 'paymentsCurrent:' + filterPaymentsCurrent });

		var $filterPaymentsLateCheckbox = $formFilters.find('input.valuePaymentsLate[type = "checkbox"]');
		var $filterPaymentsLateSelect = $formFilters.find('select.valuePaymentsLate');
		var filterPaymentsLate = $filterPaymentsLateSelect.length ? $filterPaymentsLateSelect.val() : $filterPaymentsLateCheckbox.prop('checked');
		var filterPaymentsLateSelectVal = $formFilters.find('select.filterPaymentsLate').val();
		var filterPaymentsLate = null;
		if(filterPaymentsLateSelectVal !== '')
			filterPaymentsLate = filterPaymentsLateSelectVal == 'true';
		if(filterPaymentsLate != null && filterPaymentsLate === true)
			filters.push({ name: 'fq', value: 'paymentsLate:' + filterPaymentsLate });

		var filterPaymentsLateAmount = $formFilters.find('.valuePaymentsLateAmount').val();
		if(filterPaymentsLateAmount != null && filterPaymentsLateAmount !== '')
			filters.push({ name: 'fq', value: 'paymentsLateAmount:' + filterPaymentsLateAmount });

		var $filterPaymentsAheadCheckbox = $formFilters.find('input.valuePaymentsAhead[type = "checkbox"]');
		var $filterPaymentsAheadSelect = $formFilters.find('select.valuePaymentsAhead');
		var filterPaymentsAhead = $filterPaymentsAheadSelect.length ? $filterPaymentsAheadSelect.val() : $filterPaymentsAheadCheckbox.prop('checked');
		var filterPaymentsAheadSelectVal = $formFilters.find('select.filterPaymentsAhead').val();
		var filterPaymentsAhead = null;
		if(filterPaymentsAheadSelectVal !== '')
			filterPaymentsAhead = filterPaymentsAheadSelectVal == 'true';
		if(filterPaymentsAhead != null && filterPaymentsAhead === true)
			filters.push({ name: 'fq', value: 'paymentsAhead:' + filterPaymentsAhead });

		var $filterPaymentsPastDueCheckbox = $formFilters.find('input.valuePaymentsPastDue[type = "checkbox"]');
		var $filterPaymentsPastDueSelect = $formFilters.find('select.valuePaymentsPastDue');
		var filterPaymentsPastDue = $filterPaymentsPastDueSelect.length ? $filterPaymentsPastDueSelect.val() : $filterPaymentsPastDueCheckbox.prop('checked');
		var filterPaymentsPastDueSelectVal = $formFilters.find('select.filterPaymentsPastDue').val();
		var filterPaymentsPastDue = null;
		if(filterPaymentsPastDueSelectVal !== '')
			filterPaymentsPastDue = filterPaymentsPastDueSelectVal == 'true';
		if(filterPaymentsPastDue != null && filterPaymentsPastDue === true)
			filters.push({ name: 'fq', value: 'paymentsPastDue:' + filterPaymentsPastDue });

		var filterPaymentsPastDueAmount = $formFilters.find('.valuePaymentsPastDueAmount').val();
		if(filterPaymentsPastDueAmount != null && filterPaymentsPastDueAmount !== '')
			filters.push({ name: 'fq', value: 'paymentsPastDueAmount:' + filterPaymentsPastDueAmount });

		var $filterChargesCreatedCheckbox = $formFilters.find('input.valueChargesCreated[type = "checkbox"]');
		var $filterChargesCreatedSelect = $formFilters.find('select.valueChargesCreated');
		var filterChargesCreated = $filterChargesCreatedSelect.length ? $filterChargesCreatedSelect.val() : $filterChargesCreatedCheckbox.prop('checked');
		var filterChargesCreatedSelectVal = $formFilters.find('select.filterChargesCreated').val();
		var filterChargesCreated = null;
		if(filterChargesCreatedSelectVal !== '')
			filterChargesCreated = filterChargesCreatedSelectVal == 'true';
		if(filterChargesCreated != null && filterChargesCreated === true)
			filters.push({ name: 'fq', value: 'chargesCreated:' + filterChargesCreated });

		var filterCreatedYear = $formFilters.find('.valueCreatedYear').val();
		if(filterCreatedYear != null && filterCreatedYear !== '')
			filters.push({ name: 'fq', value: 'createdYear:' + filterCreatedYear });

		var filterCreatedDayOfWeek = $formFilters.find('.valueCreatedDayOfWeek').val();
		if(filterCreatedDayOfWeek != null && filterCreatedDayOfWeek !== '')
			filters.push({ name: 'fq', value: 'createdDayOfWeek:' + filterCreatedDayOfWeek });

		var filterCreatedMonthOfYear = $formFilters.find('.valueCreatedMonthOfYear').val();
		if(filterCreatedMonthOfYear != null && filterCreatedMonthOfYear !== '')
			filters.push({ name: 'fq', value: 'createdMonthOfYear:' + filterCreatedMonthOfYear });

		var filterCreatedHourOfDay = $formFilters.find('.valueCreatedHourOfDay').val();
		if(filterCreatedHourOfDay != null && filterCreatedHourOfDay !== '')
			filters.push({ name: 'fq', value: 'createdHourOfDay:' + filterCreatedHourOfDay });

		var filterEnrollmentDaysOfWeek = $formFilters.find('.valueEnrollmentDaysOfWeek').val();
		if(filterEnrollmentDaysOfWeek != null && filterEnrollmentDaysOfWeek !== '')
			filters.push({ name: 'fq', value: 'enrollmentDaysOfWeek:' + filterEnrollmentDaysOfWeek });

		var filterEnrollmentEmails = $formFilters.find('.valueEnrollmentEmails').val();
		if(filterEnrollmentEmails != null && filterEnrollmentEmails !== '')
			filters.push({ name: 'fq', value: 'enrollmentEmails:' + filterEnrollmentEmails });

		var filterEnrollmentEmail = $formFilters.find('.valueEnrollmentEmail').val();
		if(filterEnrollmentEmail != null && filterEnrollmentEmail !== '')
			filters.push({ name: 'fq', value: 'enrollmentEmail:' + filterEnrollmentEmail });

		var filterEnrollmentPhoneNumbers = $formFilters.find('.valueEnrollmentPhoneNumbers').val();
		if(filterEnrollmentPhoneNumbers != null && filterEnrollmentPhoneNumbers !== '')
			filters.push({ name: 'fq', value: 'enrollmentPhoneNumbers:' + filterEnrollmentPhoneNumbers });

		var filterEnrollmentPhoneNumber = $formFilters.find('.valueEnrollmentPhoneNumber').val();
		if(filterEnrollmentPhoneNumber != null && filterEnrollmentPhoneNumber !== '')
			filters.push({ name: 'fq', value: 'enrollmentPhoneNumber:' + filterEnrollmentPhoneNumber });

		var filterEnrollmentParentName = $formFilters.find('.valueEnrollmentParentName').val();
		if(filterEnrollmentParentName != null && filterEnrollmentParentName !== '')
			filters.push({ name: 'fq', value: 'enrollmentParentName:' + filterEnrollmentParentName });

		var filterEnrollmentDate1 = $formFilters.find('.valueEnrollmentDate1').val();
		if(filterEnrollmentDate1 != null && filterEnrollmentDate1 !== '')
			filters.push({ name: 'fq', value: 'enrollmentDate1:' + filterEnrollmentDate1 });

		var filterEnrollmentDate2 = $formFilters.find('.valueEnrollmentDate2').val();
		if(filterEnrollmentDate2 != null && filterEnrollmentDate2 !== '')
			filters.push({ name: 'fq', value: 'enrollmentDate2:' + filterEnrollmentDate2 });

		var filterEnrollmentDate3 = $formFilters.find('.valueEnrollmentDate3').val();
		if(filterEnrollmentDate3 != null && filterEnrollmentDate3 !== '')
			filters.push({ name: 'fq', value: 'enrollmentDate3:' + filterEnrollmentDate3 });

		var filterEnrollmentDate4 = $formFilters.find('.valueEnrollmentDate4').val();
		if(filterEnrollmentDate4 != null && filterEnrollmentDate4 !== '')
			filters.push({ name: 'fq', value: 'enrollmentDate4:' + filterEnrollmentDate4 });

		var filterEnrollmentDate5 = $formFilters.find('.valueEnrollmentDate5').val();
		if(filterEnrollmentDate5 != null && filterEnrollmentDate5 !== '')
			filters.push({ name: 'fq', value: 'enrollmentDate5:' + filterEnrollmentDate5 });

		var filterEnrollmentDate6 = $formFilters.find('.valueEnrollmentDate6').val();
		if(filterEnrollmentDate6 != null && filterEnrollmentDate6 !== '')
			filters.push({ name: 'fq', value: 'enrollmentDate6:' + filterEnrollmentDate6 });

		var filterEnrollmentDate7 = $formFilters.find('.valueEnrollmentDate7').val();
		if(filterEnrollmentDate7 != null && filterEnrollmentDate7 !== '')
			filters.push({ name: 'fq', value: 'enrollmentDate7:' + filterEnrollmentDate7 });

		var filterEnrollmentDate8 = $formFilters.find('.valueEnrollmentDate8').val();
		if(filterEnrollmentDate8 != null && filterEnrollmentDate8 !== '')
			filters.push({ name: 'fq', value: 'enrollmentDate8:' + filterEnrollmentDate8 });

		var filterEnrollmentDate9 = $formFilters.find('.valueEnrollmentDate9').val();
		if(filterEnrollmentDate9 != null && filterEnrollmentDate9 !== '')
			filters.push({ name: 'fq', value: 'enrollmentDate9:' + filterEnrollmentDate9 });

		var filterEnrollmentDate10 = $formFilters.find('.valueEnrollmentDate10').val();
		if(filterEnrollmentDate10 != null && filterEnrollmentDate10 !== '')
			filters.push({ name: 'fq', value: 'enrollmentDate10:' + filterEnrollmentDate10 });

		var filterChildImmunizationsReceived = $formFilters.find('.valueChildImmunizationsReceived').val();
		if(filterChildImmunizationsReceived != null && filterChildImmunizationsReceived !== '')
			filters.push({ name: 'fq', value: 'childImmunizationsReceived:' + filterChildImmunizationsReceived });

		var filterChildPhotosApproved = $formFilters.find('.valueChildPhotosApproved').val();
		if(filterChildPhotosApproved != null && filterChildPhotosApproved !== '')
			filters.push({ name: 'fq', value: 'childPhotosApproved:' + filterChildPhotosApproved });

		var filterEnrollmentCompleteName = $formFilters.find('.valueEnrollmentCompleteName').val();
		if(filterEnrollmentCompleteName != null && filterEnrollmentCompleteName !== '')
			filters.push({ name: 'fq', value: 'enrollmentCompleteName:' + filterEnrollmentCompleteName });
	}
	return filters;
}

function patchSchoolEnrollmentVal(filters, v, val, success, error) {
	var vals = {};
	vals[v] = val;
	patchSchoolEnrollmentVals(filters, vals, success, error);
}

function patchSchoolEnrollmentVals(filters, vals, success, error) {
	$.ajax({
		url: '/api/enrollment?' + $.param(filters)
		, dataType: 'json'
		, type: 'PATCH'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// GET //

async function getSchoolEnrollment(pk) {
	$.ajax({
		url: '/api/enrollment/' + id
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

// Search //

async function searchSchoolEnrollment($formFilters, success, error) {
	var filters = searchSchoolEnrollmentFilters($formFilters);
	if(success == null)
		success = function( data, textStatus, jQxhr ) {};
	if(error == null)
		error = function( jqXhr, textStatus, errorThrown ) {};

	searchSchoolEnrollmentVals(filters, success, error);
}

function searchSchoolEnrollmentFilters($formFilters) {
	var filters = [];
	if($formFilters) {

		var filterPk = $formFilters.find('.valuePk').val();
		if(filterPk != null && filterPk !== '')
			filters.push({ name: 'fq', value: 'pk:' + filterPk });

		var filterCreated = $formFilters.find('.valueCreated').val();
		if(filterCreated != null && filterCreated !== '')
			filters.push({ name: 'fq', value: 'created:' + filterCreated });

		var filterModified = $formFilters.find('.valueModified').val();
		if(filterModified != null && filterModified !== '')
			filters.push({ name: 'fq', value: 'modified:' + filterModified });

		var filterObjectId = $formFilters.find('.valueObjectId').val();
		if(filterObjectId != null && filterObjectId !== '')
			filters.push({ name: 'fq', value: 'objectId:' + filterObjectId });

		var $filterArchivedCheckbox = $formFilters.find('input.valueArchived[type = "checkbox"]');
		var $filterArchivedSelect = $formFilters.find('select.valueArchived');
		var filterArchived = $filterArchivedSelect.length ? $filterArchivedSelect.val() : $filterArchivedCheckbox.prop('checked');
		var filterArchivedSelectVal = $formFilters.find('select.filterArchived').val();
		var filterArchived = null;
		if(filterArchivedSelectVal !== '')
			filterArchived = filterArchivedSelectVal == 'true';
		if(filterArchived != null && filterArchived === true)
			filters.push({ name: 'fq', value: 'archived:' + filterArchived });

		var $filterDeletedCheckbox = $formFilters.find('input.valueDeleted[type = "checkbox"]');
		var $filterDeletedSelect = $formFilters.find('select.valueDeleted');
		var filterDeleted = $filterDeletedSelect.length ? $filterDeletedSelect.val() : $filterDeletedCheckbox.prop('checked');
		var filterDeletedSelectVal = $formFilters.find('select.filterDeleted').val();
		var filterDeleted = null;
		if(filterDeletedSelectVal !== '')
			filterDeleted = filterDeletedSelectVal == 'true';
		if(filterDeleted != null && filterDeleted === true)
			filters.push({ name: 'fq', value: 'deleted:' + filterDeleted });

		var filterEnrollmentGroupName = $formFilters.find('.valueEnrollmentGroupName').val();
		if(filterEnrollmentGroupName != null && filterEnrollmentGroupName !== '')
			filters.push({ name: 'fq', value: 'enrollmentGroupName:' + filterEnrollmentGroupName });

		var filterCustomerProfileId = $formFilters.find('.valueCustomerProfileId').val();
		if(filterCustomerProfileId != null && filterCustomerProfileId !== '')
			filters.push({ name: 'fq', value: 'customerProfileId:' + filterCustomerProfileId });

		var $filterEnrollmentPaymentCompleteCheckbox = $formFilters.find('input.valueEnrollmentPaymentComplete[type = "checkbox"]');
		var $filterEnrollmentPaymentCompleteSelect = $formFilters.find('select.valueEnrollmentPaymentComplete');
		var filterEnrollmentPaymentComplete = $filterEnrollmentPaymentCompleteSelect.length ? $filterEnrollmentPaymentCompleteSelect.val() : $filterEnrollmentPaymentCompleteCheckbox.prop('checked');
		var filterEnrollmentPaymentCompleteSelectVal = $formFilters.find('select.filterEnrollmentPaymentComplete').val();
		var filterEnrollmentPaymentComplete = null;
		if(filterEnrollmentPaymentCompleteSelectVal !== '')
			filterEnrollmentPaymentComplete = filterEnrollmentPaymentCompleteSelectVal == 'true';
		if(filterEnrollmentPaymentComplete != null && filterEnrollmentPaymentComplete === true)
			filters.push({ name: 'fq', value: 'enrollmentPaymentComplete:' + filterEnrollmentPaymentComplete });

		var $filterChildPottyTrainedCheckbox = $formFilters.find('input.valueChildPottyTrained[type = "checkbox"]');
		var $filterChildPottyTrainedSelect = $formFilters.find('select.valueChildPottyTrained');
		var filterChildPottyTrained = $filterChildPottyTrainedSelect.length ? $filterChildPottyTrainedSelect.val() : $filterChildPottyTrainedCheckbox.prop('checked');
		var filterChildPottyTrainedSelectVal = $formFilters.find('select.filterChildPottyTrained').val();
		var filterChildPottyTrained = null;
		if(filterChildPottyTrainedSelectVal !== '')
			filterChildPottyTrained = filterChildPottyTrainedSelectVal == 'true';
		if(filterChildPottyTrained != null && filterChildPottyTrained === true)
			filters.push({ name: 'fq', value: 'childPottyTrained:' + filterChildPottyTrained });

		var $filterEnrollmentPaymentEachMonthCheckbox = $formFilters.find('input.valueEnrollmentPaymentEachMonth[type = "checkbox"]');
		var $filterEnrollmentPaymentEachMonthSelect = $formFilters.find('select.valueEnrollmentPaymentEachMonth');
		var filterEnrollmentPaymentEachMonth = $filterEnrollmentPaymentEachMonthSelect.length ? $filterEnrollmentPaymentEachMonthSelect.val() : $filterEnrollmentPaymentEachMonthCheckbox.prop('checked');
		var filterEnrollmentPaymentEachMonthSelectVal = $formFilters.find('select.filterEnrollmentPaymentEachMonth').val();
		var filterEnrollmentPaymentEachMonth = null;
		if(filterEnrollmentPaymentEachMonthSelectVal !== '')
			filterEnrollmentPaymentEachMonth = filterEnrollmentPaymentEachMonthSelectVal == 'true';
		if(filterEnrollmentPaymentEachMonth != null && filterEnrollmentPaymentEachMonth === true)
			filters.push({ name: 'fq', value: 'enrollmentPaymentEachMonth:' + filterEnrollmentPaymentEachMonth });

		var $filterEnrollmentImmunizationsCheckbox = $formFilters.find('input.valueEnrollmentImmunizations[type = "checkbox"]');
		var $filterEnrollmentImmunizationsSelect = $formFilters.find('select.valueEnrollmentImmunizations');
		var filterEnrollmentImmunizations = $filterEnrollmentImmunizationsSelect.length ? $filterEnrollmentImmunizationsSelect.val() : $filterEnrollmentImmunizationsCheckbox.prop('checked');
		var filterEnrollmentImmunizationsSelectVal = $formFilters.find('select.filterEnrollmentImmunizations').val();
		var filterEnrollmentImmunizations = null;
		if(filterEnrollmentImmunizationsSelectVal !== '')
			filterEnrollmentImmunizations = filterEnrollmentImmunizationsSelectVal == 'true';
		if(filterEnrollmentImmunizations != null && filterEnrollmentImmunizations === true)
			filters.push({ name: 'fq', value: 'enrollmentImmunizations:' + filterEnrollmentImmunizations });

		var $filterEnrollmentApprovedCheckbox = $formFilters.find('input.valueEnrollmentApproved[type = "checkbox"]');
		var $filterEnrollmentApprovedSelect = $formFilters.find('select.valueEnrollmentApproved');
		var filterEnrollmentApproved = $filterEnrollmentApprovedSelect.length ? $filterEnrollmentApprovedSelect.val() : $filterEnrollmentApprovedCheckbox.prop('checked');
		var filterEnrollmentApprovedSelectVal = $formFilters.find('select.filterEnrollmentApproved').val();
		var filterEnrollmentApproved = null;
		if(filterEnrollmentApprovedSelectVal !== '')
			filterEnrollmentApproved = filterEnrollmentApprovedSelectVal == 'true';
		if(filterEnrollmentApproved != null && filterEnrollmentApproved === true)
			filters.push({ name: 'fq', value: 'enrollmentApproved:' + filterEnrollmentApproved });

		var $filterFamilyMarriedCheckbox = $formFilters.find('input.valueFamilyMarried[type = "checkbox"]');
		var $filterFamilyMarriedSelect = $formFilters.find('select.valueFamilyMarried');
		var filterFamilyMarried = $filterFamilyMarriedSelect.length ? $filterFamilyMarriedSelect.val() : $filterFamilyMarriedCheckbox.prop('checked');
		var filterFamilyMarriedSelectVal = $formFilters.find('select.filterFamilyMarried').val();
		var filterFamilyMarried = null;
		if(filterFamilyMarriedSelectVal !== '')
			filterFamilyMarried = filterFamilyMarriedSelectVal == 'true';
		if(filterFamilyMarried != null && filterFamilyMarried === true)
			filters.push({ name: 'fq', value: 'familyMarried:' + filterFamilyMarried });

		var $filterFamilySeparatedCheckbox = $formFilters.find('input.valueFamilySeparated[type = "checkbox"]');
		var $filterFamilySeparatedSelect = $formFilters.find('select.valueFamilySeparated');
		var filterFamilySeparated = $filterFamilySeparatedSelect.length ? $filterFamilySeparatedSelect.val() : $filterFamilySeparatedCheckbox.prop('checked');
		var filterFamilySeparatedSelectVal = $formFilters.find('select.filterFamilySeparated').val();
		var filterFamilySeparated = null;
		if(filterFamilySeparatedSelectVal !== '')
			filterFamilySeparated = filterFamilySeparatedSelectVal == 'true';
		if(filterFamilySeparated != null && filterFamilySeparated === true)
			filters.push({ name: 'fq', value: 'familySeparated:' + filterFamilySeparated });

		var $filterFamilyDivorcedCheckbox = $formFilters.find('input.valueFamilyDivorced[type = "checkbox"]');
		var $filterFamilyDivorcedSelect = $formFilters.find('select.valueFamilyDivorced');
		var filterFamilyDivorced = $filterFamilyDivorcedSelect.length ? $filterFamilyDivorcedSelect.val() : $filterFamilyDivorcedCheckbox.prop('checked');
		var filterFamilyDivorcedSelectVal = $formFilters.find('select.filterFamilyDivorced').val();
		var filterFamilyDivorced = null;
		if(filterFamilyDivorcedSelectVal !== '')
			filterFamilyDivorced = filterFamilyDivorcedSelectVal == 'true';
		if(filterFamilyDivorced != null && filterFamilyDivorced === true)
			filters.push({ name: 'fq', value: 'familyDivorced:' + filterFamilyDivorced });

		var filterFamilyAddress = $formFilters.find('.valueFamilyAddress').val();
		if(filterFamilyAddress != null && filterFamilyAddress !== '')
			filters.push({ name: 'fq', value: 'familyAddress:' + filterFamilyAddress });

		var filterEnrollmentSpecialConsiderations = $formFilters.find('.valueEnrollmentSpecialConsiderations').val();
		if(filterEnrollmentSpecialConsiderations != null && filterEnrollmentSpecialConsiderations !== '')
			filters.push({ name: 'fq', value: 'enrollmentSpecialConsiderations:' + filterEnrollmentSpecialConsiderations });

		var filterChildMedicalConditions = $formFilters.find('.valueChildMedicalConditions').val();
		if(filterChildMedicalConditions != null && filterChildMedicalConditions !== '')
			filters.push({ name: 'fq', value: 'childMedicalConditions:' + filterChildMedicalConditions });

		var filterChildPreviousSchoolsAttended = $formFilters.find('.valueChildPreviousSchoolsAttended').val();
		if(filterChildPreviousSchoolsAttended != null && filterChildPreviousSchoolsAttended !== '')
			filters.push({ name: 'fq', value: 'childPreviousSchoolsAttended:' + filterChildPreviousSchoolsAttended });

		var filterFamilyHowDoYouKnowTheSchool = $formFilters.find('.valueFamilyHowDoYouKnowTheSchool').val();
		if(filterFamilyHowDoYouKnowTheSchool != null && filterFamilyHowDoYouKnowTheSchool !== '')
			filters.push({ name: 'fq', value: 'familyHowDoYouKnowTheSchool:' + filterFamilyHowDoYouKnowTheSchool });

		var filterChildDescription = $formFilters.find('.valueChildDescription').val();
		if(filterChildDescription != null && filterChildDescription !== '')
			filters.push({ name: 'fq', value: 'childDescription:' + filterChildDescription });

		var filterChildObjectives = $formFilters.find('.valueChildObjectives').val();
		if(filterChildObjectives != null && filterChildObjectives !== '')
			filters.push({ name: 'fq', value: 'childObjectives:' + filterChildObjectives });

		var filterYearKey = $formFilters.find('.valueYearKey').val();
		if(filterYearKey != null && filterYearKey !== '')
			filters.push({ name: 'fq', value: 'yearKey:' + filterYearKey });

		var filterBlockKeys = $formFilters.find('.valueBlockKeys').val();
		if(filterBlockKeys != null && filterBlockKeys !== '')
			filters.push({ name: 'fq', value: 'blockKeys:' + filterBlockKeys });

		var filterChildKey = $formFilters.find('.valueChildKey').val();
		if(filterChildKey != null && filterChildKey !== '')
			filters.push({ name: 'fq', value: 'childKey:' + filterChildKey });

		var filterGuardianKeys = $formFilters.find('.valueGuardianKeys').val();
		if(filterGuardianKeys != null && filterGuardianKeys !== '')
			filters.push({ name: 'fq', value: 'guardianKeys:' + filterGuardianKeys });

		var filterMomKeys = $formFilters.find('.valueMomKeys').val();
		if(filterMomKeys != null && filterMomKeys !== '')
			filters.push({ name: 'fq', value: 'momKeys:' + filterMomKeys });

		var filterDadKeys = $formFilters.find('.valueDadKeys').val();
		if(filterDadKeys != null && filterDadKeys !== '')
			filters.push({ name: 'fq', value: 'dadKeys:' + filterDadKeys });

		var filterUserKeys = $formFilters.find('.valueUserKeys').val();
		if(filterUserKeys != null && filterUserKeys !== '')
			filters.push({ name: 'fq', value: 'userKeys:' + filterUserKeys });

		var filterPaymentKeys = $formFilters.find('.valuePaymentKeys').val();
		if(filterPaymentKeys != null && filterPaymentKeys !== '')
			filters.push({ name: 'fq', value: 'paymentKeys:' + filterPaymentKeys });

		var filterInheritPk = $formFilters.find('.valueInheritPk').val();
		if(filterInheritPk != null && filterInheritPk !== '')
			filters.push({ name: 'fq', value: 'inheritPk:' + filterInheritPk });

		var filterId = $formFilters.find('.valueId').val();
		if(filterId != null && filterId !== '')
			filters.push({ name: 'fq', value: 'id:' + filterId });

		var filterClassCanonicalName = $formFilters.find('.valueClassCanonicalName').val();
		if(filterClassCanonicalName != null && filterClassCanonicalName !== '')
			filters.push({ name: 'fq', value: 'classCanonicalName:' + filterClassCanonicalName });

		var filterClassSimpleName = $formFilters.find('.valueClassSimpleName').val();
		if(filterClassSimpleName != null && filterClassSimpleName !== '')
			filters.push({ name: 'fq', value: 'classSimpleName:' + filterClassSimpleName });

		var filterClassCanonicalNames = $formFilters.find('.valueClassCanonicalNames').val();
		if(filterClassCanonicalNames != null && filterClassCanonicalNames !== '')
			filters.push({ name: 'fq', value: 'classCanonicalNames:' + filterClassCanonicalNames });

		var filterSessionId = $formFilters.find('.valueSessionId').val();
		if(filterSessionId != null && filterSessionId !== '')
			filters.push({ name: 'fq', value: 'sessionId:' + filterSessionId });

		var filterUserId = $formFilters.find('.valueUserId').val();
		if(filterUserId != null && filterUserId !== '')
			filters.push({ name: 'fq', value: 'userId:' + filterUserId });

		var filterUserKey = $formFilters.find('.valueUserKey').val();
		if(filterUserKey != null && filterUserKey !== '')
			filters.push({ name: 'fq', value: 'userKey:' + filterUserKey });

		var filterSaves = $formFilters.find('.valueSaves').val();
		if(filterSaves != null && filterSaves !== '')
			filters.push({ name: 'fq', value: 'saves:' + filterSaves });

		var filterObjectTitle = $formFilters.find('.valueObjectTitle').val();
		if(filterObjectTitle != null && filterObjectTitle !== '')
			filters.push({ name: 'fq', value: 'objectTitle:' + filterObjectTitle });

		var filterObjectSuggest = $formFilters.find('.valueObjectSuggest').val();
		if(filterObjectSuggest != null && filterObjectSuggest !== '')
			filters.push({ name: 'q', value: 'objectSuggest:' + filterObjectSuggest });

		var filterObjectText = $formFilters.find('.valueObjectText').val();
		if(filterObjectText != null && filterObjectText !== '')
			filters.push({ name: 'fq', value: 'objectText:' + filterObjectText });

		var filterPageUrlId = $formFilters.find('.valuePageUrlId').val();
		if(filterPageUrlId != null && filterPageUrlId !== '')
			filters.push({ name: 'fq', value: 'pageUrlId:' + filterPageUrlId });

		var filterPageUrlPk = $formFilters.find('.valuePageUrlPk').val();
		if(filterPageUrlPk != null && filterPageUrlPk !== '')
			filters.push({ name: 'fq', value: 'pageUrlPk:' + filterPageUrlPk });

		var filterPageUrlApi = $formFilters.find('.valuePageUrlApi').val();
		if(filterPageUrlApi != null && filterPageUrlApi !== '')
			filters.push({ name: 'fq', value: 'pageUrlApi:' + filterPageUrlApi });

		var filterEnrollmentKey = $formFilters.find('.valueEnrollmentKey').val();
		if(filterEnrollmentKey != null && filterEnrollmentKey !== '')
			filters.push({ name: 'fq', value: 'enrollmentKey:' + filterEnrollmentKey });

		var filterSchoolKey = $formFilters.find('.valueSchoolKey').val();
		if(filterSchoolKey != null && filterSchoolKey !== '')
			filters.push({ name: 'fq', value: 'schoolKey:' + filterSchoolKey });

		var filterSessionKey = $formFilters.find('.valueSessionKey').val();
		if(filterSessionKey != null && filterSessionKey !== '')
			filters.push({ name: 'fq', value: 'sessionKey:' + filterSessionKey });

		var filterAgeKey = $formFilters.find('.valueAgeKey').val();
		if(filterAgeKey != null && filterAgeKey !== '')
			filters.push({ name: 'fq', value: 'ageKey:' + filterAgeKey });

		var filterBlockKey = $formFilters.find('.valueBlockKey').val();
		if(filterBlockKey != null && filterBlockKey !== '')
			filters.push({ name: 'fq', value: 'blockKey:' + filterBlockKey });

		var filterEnrollmentFormKey = $formFilters.find('.valueEnrollmentFormKey').val();
		if(filterEnrollmentFormKey != null && filterEnrollmentFormKey !== '')
			filters.push({ name: 'fq', value: 'enrollmentFormKey:' + filterEnrollmentFormKey });

		var filterEducationSort = $formFilters.find('.valueEducationSort').val();
		if(filterEducationSort != null && filterEducationSort !== '')
			filters.push({ name: 'fq', value: 'educationSort:' + filterEducationSort });

		var filterSchoolSort = $formFilters.find('.valueSchoolSort').val();
		if(filterSchoolSort != null && filterSchoolSort !== '')
			filters.push({ name: 'fq', value: 'schoolSort:' + filterSchoolSort });

		var filterYearSort = $formFilters.find('.valueYearSort').val();
		if(filterYearSort != null && filterYearSort !== '')
			filters.push({ name: 'fq', value: 'yearSort:' + filterYearSort });

		var filterSeasonSort = $formFilters.find('.valueSeasonSort').val();
		if(filterSeasonSort != null && filterSeasonSort !== '')
			filters.push({ name: 'fq', value: 'seasonSort:' + filterSeasonSort });

		var filterSessionSort = $formFilters.find('.valueSessionSort').val();
		if(filterSessionSort != null && filterSessionSort !== '')
			filters.push({ name: 'fq', value: 'sessionSort:' + filterSessionSort });

		var filterAgeSort = $formFilters.find('.valueAgeSort').val();
		if(filterAgeSort != null && filterAgeSort !== '')
			filters.push({ name: 'fq', value: 'ageSort:' + filterAgeSort });

		var filterChildFirstName = $formFilters.find('.valueChildFirstName').val();
		if(filterChildFirstName != null && filterChildFirstName !== '')
			filters.push({ name: 'fq', value: 'childFirstName:' + filterChildFirstName });

		var filterChildFirstNamePreferred = $formFilters.find('.valueChildFirstNamePreferred').val();
		if(filterChildFirstNamePreferred != null && filterChildFirstNamePreferred !== '')
			filters.push({ name: 'fq', value: 'childFirstNamePreferred:' + filterChildFirstNamePreferred });

		var filterChildFamilyName = $formFilters.find('.valueChildFamilyName').val();
		if(filterChildFamilyName != null && filterChildFamilyName !== '')
			filters.push({ name: 'fq', value: 'childFamilyName:' + filterChildFamilyName });

		var filterMomFirstName = $formFilters.find('.valueMomFirstName').val();
		if(filterMomFirstName != null && filterMomFirstName !== '')
			filters.push({ name: 'fq', value: 'momFirstName:' + filterMomFirstName });

		var filterMomFirstNamePreferred = $formFilters.find('.valueMomFirstNamePreferred').val();
		if(filterMomFirstNamePreferred != null && filterMomFirstNamePreferred !== '')
			filters.push({ name: 'fq', value: 'momFirstNamePreferred:' + filterMomFirstNamePreferred });

		var filterMomCompleteNamePreferred = $formFilters.find('.valueMomCompleteNamePreferred').val();
		if(filterMomCompleteNamePreferred != null && filterMomCompleteNamePreferred !== '')
			filters.push({ name: 'fq', value: 'momCompleteNamePreferred:' + filterMomCompleteNamePreferred });

		var filterDadFirstName = $formFilters.find('.valueDadFirstName').val();
		if(filterDadFirstName != null && filterDadFirstName !== '')
			filters.push({ name: 'fq', value: 'dadFirstName:' + filterDadFirstName });

		var filterDadFirstNamePreferred = $formFilters.find('.valueDadFirstNamePreferred').val();
		if(filterDadFirstNamePreferred != null && filterDadFirstNamePreferred !== '')
			filters.push({ name: 'fq', value: 'dadFirstNamePreferred:' + filterDadFirstNamePreferred });

		var filterDadCompleteNamePreferred = $formFilters.find('.valueDadCompleteNamePreferred').val();
		if(filterDadCompleteNamePreferred != null && filterDadCompleteNamePreferred !== '')
			filters.push({ name: 'fq', value: 'dadCompleteNamePreferred:' + filterDadCompleteNamePreferred });

		var filterChildCompleteName = $formFilters.find('.valueChildCompleteName').val();
		if(filterChildCompleteName != null && filterChildCompleteName !== '')
			filters.push({ name: 'fq', value: 'childCompleteName:' + filterChildCompleteName });

		var filterChildCompleteNamePreferred = $formFilters.find('.valueChildCompleteNamePreferred').val();
		if(filterChildCompleteNamePreferred != null && filterChildCompleteNamePreferred !== '')
			filters.push({ name: 'fq', value: 'childCompleteNamePreferred:' + filterChildCompleteNamePreferred });

		var filterChildBirthDate = $formFilters.find('.valueChildBirthDate').val();
		if(filterChildBirthDate != null && filterChildBirthDate !== '')
			filters.push({ name: 'fq', value: 'childBirthDate:' + filterChildBirthDate });

		var filterChildBirthDateYear = $formFilters.find('.valueChildBirthDateYear').val();
		if(filterChildBirthDateYear != null && filterChildBirthDateYear !== '')
			filters.push({ name: 'fq', value: 'childBirthDateYear:' + filterChildBirthDateYear });

		var filterChildBirthDateMonthOfYear = $formFilters.find('.valueChildBirthDateMonthOfYear').val();
		if(filterChildBirthDateMonthOfYear != null && filterChildBirthDateMonthOfYear !== '')
			filters.push({ name: 'fq', value: 'childBirthDateMonthOfYear:' + filterChildBirthDateMonthOfYear });

		var filterChildBirthDateDayOfWeek = $formFilters.find('.valueChildBirthDateDayOfWeek').val();
		if(filterChildBirthDateDayOfWeek != null && filterChildBirthDateDayOfWeek !== '')
			filters.push({ name: 'fq', value: 'childBirthDateDayOfWeek:' + filterChildBirthDateDayOfWeek });

		var filterChildBirthMonth = $formFilters.find('.valueChildBirthMonth').val();
		if(filterChildBirthMonth != null && filterChildBirthMonth !== '')
			filters.push({ name: 'fq', value: 'childBirthMonth:' + filterChildBirthMonth });

		var filterChildBirthDay = $formFilters.find('.valueChildBirthDay').val();
		if(filterChildBirthDay != null && filterChildBirthDay !== '')
			filters.push({ name: 'fq', value: 'childBirthDay:' + filterChildBirthDay });

		var filterSchoolName = $formFilters.find('.valueSchoolName').val();
		if(filterSchoolName != null && filterSchoolName !== '')
			filters.push({ name: 'fq', value: 'schoolName:' + filterSchoolName });

		var filterSchoolCompleteName = $formFilters.find('.valueSchoolCompleteName').val();
		if(filterSchoolCompleteName != null && filterSchoolCompleteName !== '')
			filters.push({ name: 'fq', value: 'schoolCompleteName:' + filterSchoolCompleteName });

		var filterSchoolLocation = $formFilters.find('.valueSchoolLocation').val();
		if(filterSchoolLocation != null && filterSchoolLocation !== '')
			filters.push({ name: 'fq', value: 'schoolLocation:' + filterSchoolLocation });

		var filterSchoolAddress = $formFilters.find('.valueSchoolAddress').val();
		if(filterSchoolAddress != null && filterSchoolAddress !== '')
			filters.push({ name: 'fq', value: 'schoolAddress:' + filterSchoolAddress });

		var filterSchoolPhoneNumber = $formFilters.find('.valueSchoolPhoneNumber').val();
		if(filterSchoolPhoneNumber != null && filterSchoolPhoneNumber !== '')
			filters.push({ name: 'fq', value: 'schoolPhoneNumber:' + filterSchoolPhoneNumber });

		var filterSchoolForm = $formFilters.find('.valueSchoolForm').val();
		if(filterSchoolForm != null && filterSchoolForm !== '')
			filters.push({ name: 'fq', value: 'schoolForm:' + filterSchoolForm });

		var filterSchoolNumber = $formFilters.find('.valueSchoolNumber').val();
		if(filterSchoolNumber != null && filterSchoolNumber !== '')
			filters.push({ name: 'fq', value: 'schoolNumber:' + filterSchoolNumber });

		var filterSchoolAdministratorName = $formFilters.find('.valueSchoolAdministratorName').val();
		if(filterSchoolAdministratorName != null && filterSchoolAdministratorName !== '')
			filters.push({ name: 'fq', value: 'schoolAdministratorName:' + filterSchoolAdministratorName });

		var filterYearStart = $formFilters.find('.valueYearStart').val();
		if(filterYearStart != null && filterYearStart !== '')
			filters.push({ name: 'fq', value: 'yearStart:' + filterYearStart });

		var filterYearEnd = $formFilters.find('.valueYearEnd').val();
		if(filterYearEnd != null && filterYearEnd !== '')
			filters.push({ name: 'fq', value: 'yearEnd:' + filterYearEnd });

		var filterSeasonStartDate = $formFilters.find('.valueSeasonStartDate').val();
		if(filterSeasonStartDate != null && filterSeasonStartDate !== '')
			filters.push({ name: 'fq', value: 'seasonStartDate:' + filterSeasonStartDate });

		var filterYearEnrollmentFee = $formFilters.find('.valueYearEnrollmentFee').val();
		if(filterYearEnrollmentFee != null && filterYearEnrollmentFee !== '')
			filters.push({ name: 'fq', value: 'yearEnrollmentFee:' + filterYearEnrollmentFee });

		var filterSessionStartDate = $formFilters.find('.valueSessionStartDate').val();
		if(filterSessionStartDate != null && filterSessionStartDate !== '')
			filters.push({ name: 'fq', value: 'sessionStartDate:' + filterSessionStartDate });

		var filterSessionEndDate = $formFilters.find('.valueSessionEndDate').val();
		if(filterSessionEndDate != null && filterSessionEndDate !== '')
			filters.push({ name: 'fq', value: 'sessionEndDate:' + filterSessionEndDate });

		var filterAgeCompleteName = $formFilters.find('.valueAgeCompleteName').val();
		if(filterAgeCompleteName != null && filterAgeCompleteName !== '')
			filters.push({ name: 'fq', value: 'ageCompleteName:' + filterAgeCompleteName });

		var filterAgeStart = $formFilters.find('.valueAgeStart').val();
		if(filterAgeStart != null && filterAgeStart !== '')
			filters.push({ name: 'fq', value: 'ageStart:' + filterAgeStart });

		var filterAgeEnd = $formFilters.find('.valueAgeEnd').val();
		if(filterAgeEnd != null && filterAgeEnd !== '')
			filters.push({ name: 'fq', value: 'ageEnd:' + filterAgeEnd });

		var filterBlockStartTime = $formFilters.find('.valueBlockStartTime').val();
		if(filterBlockStartTime != null && filterBlockStartTime !== '')
			filters.push({ name: 'fq', value: 'blockStartTime:' + filterBlockStartTime });

		var filterBlockEndTime = $formFilters.find('.valueBlockEndTime').val();
		if(filterBlockEndTime != null && filterBlockEndTime !== '')
			filters.push({ name: 'fq', value: 'blockEndTime:' + filterBlockEndTime });

		var filterBlockPricePerMonth = $formFilters.find('.valueBlockPricePerMonth').val();
		if(filterBlockPricePerMonth != null && filterBlockPricePerMonth !== '')
			filters.push({ name: 'fq', value: 'blockPricePerMonth:' + filterBlockPricePerMonth });

		var $filterBlockSundayCheckbox = $formFilters.find('input.valueBlockSunday[type = "checkbox"]');
		var $filterBlockSundaySelect = $formFilters.find('select.valueBlockSunday');
		var filterBlockSunday = $filterBlockSundaySelect.length ? $filterBlockSundaySelect.val() : $filterBlockSundayCheckbox.prop('checked');
		var filterBlockSundaySelectVal = $formFilters.find('select.filterBlockSunday').val();
		var filterBlockSunday = null;
		if(filterBlockSundaySelectVal !== '')
			filterBlockSunday = filterBlockSundaySelectVal == 'true';
		if(filterBlockSunday != null && filterBlockSunday === true)
			filters.push({ name: 'fq', value: 'blockSunday:' + filterBlockSunday });

		var $filterBlockMondayCheckbox = $formFilters.find('input.valueBlockMonday[type = "checkbox"]');
		var $filterBlockMondaySelect = $formFilters.find('select.valueBlockMonday');
		var filterBlockMonday = $filterBlockMondaySelect.length ? $filterBlockMondaySelect.val() : $filterBlockMondayCheckbox.prop('checked');
		var filterBlockMondaySelectVal = $formFilters.find('select.filterBlockMonday').val();
		var filterBlockMonday = null;
		if(filterBlockMondaySelectVal !== '')
			filterBlockMonday = filterBlockMondaySelectVal == 'true';
		if(filterBlockMonday != null && filterBlockMonday === true)
			filters.push({ name: 'fq', value: 'blockMonday:' + filterBlockMonday });

		var $filterBlockTuesdayCheckbox = $formFilters.find('input.valueBlockTuesday[type = "checkbox"]');
		var $filterBlockTuesdaySelect = $formFilters.find('select.valueBlockTuesday');
		var filterBlockTuesday = $filterBlockTuesdaySelect.length ? $filterBlockTuesdaySelect.val() : $filterBlockTuesdayCheckbox.prop('checked');
		var filterBlockTuesdaySelectVal = $formFilters.find('select.filterBlockTuesday').val();
		var filterBlockTuesday = null;
		if(filterBlockTuesdaySelectVal !== '')
			filterBlockTuesday = filterBlockTuesdaySelectVal == 'true';
		if(filterBlockTuesday != null && filterBlockTuesday === true)
			filters.push({ name: 'fq', value: 'blockTuesday:' + filterBlockTuesday });

		var $filterBlockWednesdayCheckbox = $formFilters.find('input.valueBlockWednesday[type = "checkbox"]');
		var $filterBlockWednesdaySelect = $formFilters.find('select.valueBlockWednesday');
		var filterBlockWednesday = $filterBlockWednesdaySelect.length ? $filterBlockWednesdaySelect.val() : $filterBlockWednesdayCheckbox.prop('checked');
		var filterBlockWednesdaySelectVal = $formFilters.find('select.filterBlockWednesday').val();
		var filterBlockWednesday = null;
		if(filterBlockWednesdaySelectVal !== '')
			filterBlockWednesday = filterBlockWednesdaySelectVal == 'true';
		if(filterBlockWednesday != null && filterBlockWednesday === true)
			filters.push({ name: 'fq', value: 'blockWednesday:' + filterBlockWednesday });

		var $filterBlockThursdayCheckbox = $formFilters.find('input.valueBlockThursday[type = "checkbox"]');
		var $filterBlockThursdaySelect = $formFilters.find('select.valueBlockThursday');
		var filterBlockThursday = $filterBlockThursdaySelect.length ? $filterBlockThursdaySelect.val() : $filterBlockThursdayCheckbox.prop('checked');
		var filterBlockThursdaySelectVal = $formFilters.find('select.filterBlockThursday').val();
		var filterBlockThursday = null;
		if(filterBlockThursdaySelectVal !== '')
			filterBlockThursday = filterBlockThursdaySelectVal == 'true';
		if(filterBlockThursday != null && filterBlockThursday === true)
			filters.push({ name: 'fq', value: 'blockThursday:' + filterBlockThursday });

		var $filterBlockFridayCheckbox = $formFilters.find('input.valueBlockFriday[type = "checkbox"]');
		var $filterBlockFridaySelect = $formFilters.find('select.valueBlockFriday');
		var filterBlockFriday = $filterBlockFridaySelect.length ? $filterBlockFridaySelect.val() : $filterBlockFridayCheckbox.prop('checked');
		var filterBlockFridaySelectVal = $formFilters.find('select.filterBlockFriday').val();
		var filterBlockFriday = null;
		if(filterBlockFridaySelectVal !== '')
			filterBlockFriday = filterBlockFridaySelectVal == 'true';
		if(filterBlockFriday != null && filterBlockFriday === true)
			filters.push({ name: 'fq', value: 'blockFriday:' + filterBlockFriday });

		var $filterBlockSaturdayCheckbox = $formFilters.find('input.valueBlockSaturday[type = "checkbox"]');
		var $filterBlockSaturdaySelect = $formFilters.find('select.valueBlockSaturday');
		var filterBlockSaturday = $filterBlockSaturdaySelect.length ? $filterBlockSaturdaySelect.val() : $filterBlockSaturdayCheckbox.prop('checked');
		var filterBlockSaturdaySelectVal = $formFilters.find('select.filterBlockSaturday').val();
		var filterBlockSaturday = null;
		if(filterBlockSaturdaySelectVal !== '')
			filterBlockSaturday = filterBlockSaturdaySelectVal == 'true';
		if(filterBlockSaturday != null && filterBlockSaturday === true)
			filters.push({ name: 'fq', value: 'blockSaturday:' + filterBlockSaturday });

		var filterBlockTotalPrice = $formFilters.find('.valueBlockTotalPrice').val();
		if(filterBlockTotalPrice != null && filterBlockTotalPrice !== '')
			filters.push({ name: 'fq', value: 'blockTotalPrice:' + filterBlockTotalPrice });

		var filterBlockAdminName = $formFilters.find('.valueBlockAdminName').val();
		if(filterBlockAdminName != null && filterBlockAdminName !== '')
			filters.push({ name: 'fq', value: 'blockAdminName:' + filterBlockAdminName });

		var filterBlockShortName = $formFilters.find('.valueBlockShortName').val();
		if(filterBlockShortName != null && filterBlockShortName !== '')
			filters.push({ name: 'fq', value: 'blockShortName:' + filterBlockShortName });

		var filterBlockCompleteName = $formFilters.find('.valueBlockCompleteName').val();
		if(filterBlockCompleteName != null && filterBlockCompleteName !== '')
			filters.push({ name: 'fq', value: 'blockCompleteName:' + filterBlockCompleteName });

		var filterEnrollmentGroupColor = $formFilters.find('.valueEnrollmentGroupColor').val();
		if(filterEnrollmentGroupColor != null && filterEnrollmentGroupColor !== '')
			filters.push({ name: 'fq', value: 'enrollmentGroupColor:' + filterEnrollmentGroupColor });

		var filterEnrollmentChargeDate = $formFilters.find('.valueEnrollmentChargeDate').val();
		if(filterEnrollmentChargeDate != null && filterEnrollmentChargeDate !== '')
			filters.push({ name: 'fq', value: 'enrollmentChargeDate:' + filterEnrollmentChargeDate });

		var filterPaymentLastDate = $formFilters.find('.valuePaymentLastDate').val();
		if(filterPaymentLastDate != null && filterPaymentLastDate !== '')
			filters.push({ name: 'fq', value: 'paymentLastDate:' + filterPaymentLastDate });

		var filterPaymentLastStr = $formFilters.find('.valuePaymentLastStr').val();
		if(filterPaymentLastStr != null && filterPaymentLastStr !== '')
			filters.push({ name: 'fq', value: 'paymentLastStr:' + filterPaymentLastStr });

		var filterPaymentAmount = $formFilters.find('.valuePaymentAmount').val();
		if(filterPaymentAmount != null && filterPaymentAmount !== '')
			filters.push({ name: 'fq', value: 'paymentAmount:' + filterPaymentAmount });

		var filterChargeAmount = $formFilters.find('.valueChargeAmount').val();
		if(filterChargeAmount != null && filterChargeAmount !== '')
			filters.push({ name: 'fq', value: 'chargeAmount:' + filterChargeAmount });

		var filterChargeAmountFuture = $formFilters.find('.valueChargeAmountFuture').val();
		if(filterChargeAmountFuture != null && filterChargeAmountFuture !== '')
			filters.push({ name: 'fq', value: 'chargeAmountFuture:' + filterChargeAmountFuture });

		var filterChargeAmountDue = $formFilters.find('.valueChargeAmountDue').val();
		if(filterChargeAmountDue != null && filterChargeAmountDue !== '')
			filters.push({ name: 'fq', value: 'chargeAmountDue:' + filterChargeAmountDue });

		var filterChargeAmountNotPassed = $formFilters.find('.valueChargeAmountNotPassed').val();
		if(filterChargeAmountNotPassed != null && filterChargeAmountNotPassed !== '')
			filters.push({ name: 'fq', value: 'chargeAmountNotPassed:' + filterChargeAmountNotPassed });

		var filterChargesNow = $formFilters.find('.valueChargesNow').val();
		if(filterChargesNow != null && filterChargesNow !== '')
			filters.push({ name: 'fq', value: 'chargesNow:' + filterChargesNow });

		var $filterPaymentsCurrentCheckbox = $formFilters.find('input.valuePaymentsCurrent[type = "checkbox"]');
		var $filterPaymentsCurrentSelect = $formFilters.find('select.valuePaymentsCurrent');
		var filterPaymentsCurrent = $filterPaymentsCurrentSelect.length ? $filterPaymentsCurrentSelect.val() : $filterPaymentsCurrentCheckbox.prop('checked');
		var filterPaymentsCurrentSelectVal = $formFilters.find('select.filterPaymentsCurrent').val();
		var filterPaymentsCurrent = null;
		if(filterPaymentsCurrentSelectVal !== '')
			filterPaymentsCurrent = filterPaymentsCurrentSelectVal == 'true';
		if(filterPaymentsCurrent != null && filterPaymentsCurrent === true)
			filters.push({ name: 'fq', value: 'paymentsCurrent:' + filterPaymentsCurrent });

		var $filterPaymentsLateCheckbox = $formFilters.find('input.valuePaymentsLate[type = "checkbox"]');
		var $filterPaymentsLateSelect = $formFilters.find('select.valuePaymentsLate');
		var filterPaymentsLate = $filterPaymentsLateSelect.length ? $filterPaymentsLateSelect.val() : $filterPaymentsLateCheckbox.prop('checked');
		var filterPaymentsLateSelectVal = $formFilters.find('select.filterPaymentsLate').val();
		var filterPaymentsLate = null;
		if(filterPaymentsLateSelectVal !== '')
			filterPaymentsLate = filterPaymentsLateSelectVal == 'true';
		if(filterPaymentsLate != null && filterPaymentsLate === true)
			filters.push({ name: 'fq', value: 'paymentsLate:' + filterPaymentsLate });

		var filterPaymentsLateAmount = $formFilters.find('.valuePaymentsLateAmount').val();
		if(filterPaymentsLateAmount != null && filterPaymentsLateAmount !== '')
			filters.push({ name: 'fq', value: 'paymentsLateAmount:' + filterPaymentsLateAmount });

		var $filterPaymentsAheadCheckbox = $formFilters.find('input.valuePaymentsAhead[type = "checkbox"]');
		var $filterPaymentsAheadSelect = $formFilters.find('select.valuePaymentsAhead');
		var filterPaymentsAhead = $filterPaymentsAheadSelect.length ? $filterPaymentsAheadSelect.val() : $filterPaymentsAheadCheckbox.prop('checked');
		var filterPaymentsAheadSelectVal = $formFilters.find('select.filterPaymentsAhead').val();
		var filterPaymentsAhead = null;
		if(filterPaymentsAheadSelectVal !== '')
			filterPaymentsAhead = filterPaymentsAheadSelectVal == 'true';
		if(filterPaymentsAhead != null && filterPaymentsAhead === true)
			filters.push({ name: 'fq', value: 'paymentsAhead:' + filterPaymentsAhead });

		var $filterPaymentsPastDueCheckbox = $formFilters.find('input.valuePaymentsPastDue[type = "checkbox"]');
		var $filterPaymentsPastDueSelect = $formFilters.find('select.valuePaymentsPastDue');
		var filterPaymentsPastDue = $filterPaymentsPastDueSelect.length ? $filterPaymentsPastDueSelect.val() : $filterPaymentsPastDueCheckbox.prop('checked');
		var filterPaymentsPastDueSelectVal = $formFilters.find('select.filterPaymentsPastDue').val();
		var filterPaymentsPastDue = null;
		if(filterPaymentsPastDueSelectVal !== '')
			filterPaymentsPastDue = filterPaymentsPastDueSelectVal == 'true';
		if(filterPaymentsPastDue != null && filterPaymentsPastDue === true)
			filters.push({ name: 'fq', value: 'paymentsPastDue:' + filterPaymentsPastDue });

		var filterPaymentsPastDueAmount = $formFilters.find('.valuePaymentsPastDueAmount').val();
		if(filterPaymentsPastDueAmount != null && filterPaymentsPastDueAmount !== '')
			filters.push({ name: 'fq', value: 'paymentsPastDueAmount:' + filterPaymentsPastDueAmount });

		var $filterChargesCreatedCheckbox = $formFilters.find('input.valueChargesCreated[type = "checkbox"]');
		var $filterChargesCreatedSelect = $formFilters.find('select.valueChargesCreated');
		var filterChargesCreated = $filterChargesCreatedSelect.length ? $filterChargesCreatedSelect.val() : $filterChargesCreatedCheckbox.prop('checked');
		var filterChargesCreatedSelectVal = $formFilters.find('select.filterChargesCreated').val();
		var filterChargesCreated = null;
		if(filterChargesCreatedSelectVal !== '')
			filterChargesCreated = filterChargesCreatedSelectVal == 'true';
		if(filterChargesCreated != null && filterChargesCreated === true)
			filters.push({ name: 'fq', value: 'chargesCreated:' + filterChargesCreated });

		var filterCreatedYear = $formFilters.find('.valueCreatedYear').val();
		if(filterCreatedYear != null && filterCreatedYear !== '')
			filters.push({ name: 'fq', value: 'createdYear:' + filterCreatedYear });

		var filterCreatedDayOfWeek = $formFilters.find('.valueCreatedDayOfWeek').val();
		if(filterCreatedDayOfWeek != null && filterCreatedDayOfWeek !== '')
			filters.push({ name: 'fq', value: 'createdDayOfWeek:' + filterCreatedDayOfWeek });

		var filterCreatedMonthOfYear = $formFilters.find('.valueCreatedMonthOfYear').val();
		if(filterCreatedMonthOfYear != null && filterCreatedMonthOfYear !== '')
			filters.push({ name: 'fq', value: 'createdMonthOfYear:' + filterCreatedMonthOfYear });

		var filterCreatedHourOfDay = $formFilters.find('.valueCreatedHourOfDay').val();
		if(filterCreatedHourOfDay != null && filterCreatedHourOfDay !== '')
			filters.push({ name: 'fq', value: 'createdHourOfDay:' + filterCreatedHourOfDay });

		var filterEnrollmentDaysOfWeek = $formFilters.find('.valueEnrollmentDaysOfWeek').val();
		if(filterEnrollmentDaysOfWeek != null && filterEnrollmentDaysOfWeek !== '')
			filters.push({ name: 'fq', value: 'enrollmentDaysOfWeek:' + filterEnrollmentDaysOfWeek });

		var filterEnrollmentEmails = $formFilters.find('.valueEnrollmentEmails').val();
		if(filterEnrollmentEmails != null && filterEnrollmentEmails !== '')
			filters.push({ name: 'fq', value: 'enrollmentEmails:' + filterEnrollmentEmails });

		var filterEnrollmentEmail = $formFilters.find('.valueEnrollmentEmail').val();
		if(filterEnrollmentEmail != null && filterEnrollmentEmail !== '')
			filters.push({ name: 'fq', value: 'enrollmentEmail:' + filterEnrollmentEmail });

		var filterEnrollmentPhoneNumbers = $formFilters.find('.valueEnrollmentPhoneNumbers').val();
		if(filterEnrollmentPhoneNumbers != null && filterEnrollmentPhoneNumbers !== '')
			filters.push({ name: 'fq', value: 'enrollmentPhoneNumbers:' + filterEnrollmentPhoneNumbers });

		var filterEnrollmentPhoneNumber = $formFilters.find('.valueEnrollmentPhoneNumber').val();
		if(filterEnrollmentPhoneNumber != null && filterEnrollmentPhoneNumber !== '')
			filters.push({ name: 'fq', value: 'enrollmentPhoneNumber:' + filterEnrollmentPhoneNumber });

		var filterEnrollmentParentName = $formFilters.find('.valueEnrollmentParentName').val();
		if(filterEnrollmentParentName != null && filterEnrollmentParentName !== '')
			filters.push({ name: 'fq', value: 'enrollmentParentName:' + filterEnrollmentParentName });

		var filterEnrollmentDate1 = $formFilters.find('.valueEnrollmentDate1').val();
		if(filterEnrollmentDate1 != null && filterEnrollmentDate1 !== '')
			filters.push({ name: 'fq', value: 'enrollmentDate1:' + filterEnrollmentDate1 });

		var filterEnrollmentDate2 = $formFilters.find('.valueEnrollmentDate2').val();
		if(filterEnrollmentDate2 != null && filterEnrollmentDate2 !== '')
			filters.push({ name: 'fq', value: 'enrollmentDate2:' + filterEnrollmentDate2 });

		var filterEnrollmentDate3 = $formFilters.find('.valueEnrollmentDate3').val();
		if(filterEnrollmentDate3 != null && filterEnrollmentDate3 !== '')
			filters.push({ name: 'fq', value: 'enrollmentDate3:' + filterEnrollmentDate3 });

		var filterEnrollmentDate4 = $formFilters.find('.valueEnrollmentDate4').val();
		if(filterEnrollmentDate4 != null && filterEnrollmentDate4 !== '')
			filters.push({ name: 'fq', value: 'enrollmentDate4:' + filterEnrollmentDate4 });

		var filterEnrollmentDate5 = $formFilters.find('.valueEnrollmentDate5').val();
		if(filterEnrollmentDate5 != null && filterEnrollmentDate5 !== '')
			filters.push({ name: 'fq', value: 'enrollmentDate5:' + filterEnrollmentDate5 });

		var filterEnrollmentDate6 = $formFilters.find('.valueEnrollmentDate6').val();
		if(filterEnrollmentDate6 != null && filterEnrollmentDate6 !== '')
			filters.push({ name: 'fq', value: 'enrollmentDate6:' + filterEnrollmentDate6 });

		var filterEnrollmentDate7 = $formFilters.find('.valueEnrollmentDate7').val();
		if(filterEnrollmentDate7 != null && filterEnrollmentDate7 !== '')
			filters.push({ name: 'fq', value: 'enrollmentDate7:' + filterEnrollmentDate7 });

		var filterEnrollmentDate8 = $formFilters.find('.valueEnrollmentDate8').val();
		if(filterEnrollmentDate8 != null && filterEnrollmentDate8 !== '')
			filters.push({ name: 'fq', value: 'enrollmentDate8:' + filterEnrollmentDate8 });

		var filterEnrollmentDate9 = $formFilters.find('.valueEnrollmentDate9').val();
		if(filterEnrollmentDate9 != null && filterEnrollmentDate9 !== '')
			filters.push({ name: 'fq', value: 'enrollmentDate9:' + filterEnrollmentDate9 });

		var filterEnrollmentDate10 = $formFilters.find('.valueEnrollmentDate10').val();
		if(filterEnrollmentDate10 != null && filterEnrollmentDate10 !== '')
			filters.push({ name: 'fq', value: 'enrollmentDate10:' + filterEnrollmentDate10 });

		var filterChildImmunizationsReceived = $formFilters.find('.valueChildImmunizationsReceived').val();
		if(filterChildImmunizationsReceived != null && filterChildImmunizationsReceived !== '')
			filters.push({ name: 'fq', value: 'childImmunizationsReceived:' + filterChildImmunizationsReceived });

		var filterChildPhotosApproved = $formFilters.find('.valueChildPhotosApproved').val();
		if(filterChildPhotosApproved != null && filterChildPhotosApproved !== '')
			filters.push({ name: 'fq', value: 'childPhotosApproved:' + filterChildPhotosApproved });

		var filterEnrollmentCompleteName = $formFilters.find('.valueEnrollmentCompleteName').val();
		if(filterEnrollmentCompleteName != null && filterEnrollmentCompleteName !== '')
			filters.push({ name: 'fq', value: 'enrollmentCompleteName:' + filterEnrollmentCompleteName });
	}
	return filters;
}

function searchSchoolEnrollmentVals(filters, success, error) {

	$.ajax({
		url: '/api/enrollment?' + $.param(filters)
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

function suggestSchoolEnrollmentObjectSuggest($formFilters, $list) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fas fa-edit ');
			var $span = $('<span>').attr('class', '').text(o['enrollmentCompleteName']);
			var $li = $('<li>');
			var $a = $('<a>').attr('href', o['pageUrlPk']);
			$a.append($i);
			$a.append($span);
			$li.append($a);
			$list.append($li);
		});
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchSchoolEnrollmentVals($formFilters, success, error);
}

function suggestSchoolEnrollmentYearKey(filters, $list, pk = null, attribute=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-calendar-check ');
			var $span = $('<span>').attr('class', '').text(o['yearCompleteName']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk'] + '#' + pk);
			$a.append($i);
			$a.append($span);
			var val = o['enrollmentKeys'];
			var checked = pk == null ? false : Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_yearKey_' + pk + '_enrollmentKeys_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valueYearKey w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_yearKey_" + pk + "_enrollmentKeys_" + o['pk'] + "'); patchSchoolEnrollmentVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'set' : 'remove') + 'YearKey']: \"" + o['pk'] + "\" } ); ");
				$input.attr('onclick', 'removeGlow($(this)); ');
			}
			$input.attr('type', 'checkbox');
			if(checked)
				$input.attr('checked', 'checked');
			var $li = $('<li>');
			if(attribute)
				$li.append($input);
			$li.append($a);
			$list.append($li);
		});
		var focusId = $('#SchoolEnrollmentForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchSchoolYearVals(filters, success, error);
}

function suggestSchoolEnrollmentBlockKeys(filters, $list, pk = null, attribute=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-bell ');
			var $span = $('<span>').attr('class', '').text(o['blockCompleteName']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk'] + '#' + pk);
			$a.append($i);
			$a.append($span);
			var val = o['enrollmentKeys'];
			var checked = pk == null ? false : Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_blockKeys_' + pk + '_enrollmentKeys_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valueBlockKeys w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_blockKeys_" + pk + "_enrollmentKeys_" + o['pk'] + "'); patchSchoolEnrollmentVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'add' : 'remove') + 'BlockKeys']: \"" + o['pk'] + "\" } ); ");
				$input.attr('onclick', 'removeGlow($(this)); ');
			}
			$input.attr('type', 'checkbox');
			if(checked)
				$input.attr('checked', 'checked');
			var $li = $('<li>');
			if(attribute)
				$li.append($input);
			$li.append($a);
			$list.append($li);
		});
		var focusId = $('#SchoolEnrollmentForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchSchoolBlockVals(filters, success, error);
}

function suggestSchoolEnrollmentChildKey(filters, $list, pk = null, attribute=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-child ');
			var $span = $('<span>').attr('class', '').text(o['childCompleteName']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk'] + '#' + pk);
			$a.append($i);
			$a.append($span);
			var val = o['enrollmentKeys'];
			var checked = pk == null ? false : Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_childKey_' + pk + '_enrollmentKeys_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valueChildKey w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_childKey_" + pk + "_enrollmentKeys_" + o['pk'] + "'); patchSchoolEnrollmentVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'set' : 'remove') + 'ChildKey']: \"" + o['pk'] + "\" } ); ");
				$input.attr('onclick', 'removeGlow($(this)); ');
			}
			$input.attr('type', 'checkbox');
			if(checked)
				$input.attr('checked', 'checked');
			var $li = $('<li>');
			if(attribute)
				$li.append($input);
			$li.append($a);
			$list.append($li);
		});
		var focusId = $('#SchoolEnrollmentForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchSchoolChildVals(filters, success, error);
}

function suggestSchoolEnrollmentMomKeys(filters, $list, pk = null, attribute=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-female ');
			var $span = $('<span>').attr('class', '').text(o['momCompleteName']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk'] + '#' + pk);
			$a.append($i);
			$a.append($span);
			var val = o['enrollmentKeys'];
			var checked = pk == null ? false : Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_momKeys_' + pk + '_enrollmentKeys_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valueMomKeys w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_momKeys_" + pk + "_enrollmentKeys_" + o['pk'] + "'); patchSchoolEnrollmentVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'add' : 'remove') + 'MomKeys']: \"" + o['pk'] + "\" } ); ");
				$input.attr('onclick', 'removeGlow($(this)); ');
			}
			$input.attr('type', 'checkbox');
			if(checked)
				$input.attr('checked', 'checked');
			var $li = $('<li>');
			if(attribute)
				$li.append($input);
			$li.append($a);
			$list.append($li);
		});
		var focusId = $('#SchoolEnrollmentForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchSchoolMomVals(filters, success, error);
}

function suggestSchoolEnrollmentDadKeys(filters, $list, pk = null, attribute=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-male ');
			var $span = $('<span>').attr('class', '').text(o['dadCompleteName']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk'] + '#' + pk);
			$a.append($i);
			$a.append($span);
			var val = o['enrollmentKeys'];
			var checked = pk == null ? false : Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_dadKeys_' + pk + '_enrollmentKeys_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valueDadKeys w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_dadKeys_" + pk + "_enrollmentKeys_" + o['pk'] + "'); patchSchoolEnrollmentVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'add' : 'remove') + 'DadKeys']: \"" + o['pk'] + "\" } ); ");
				$input.attr('onclick', 'removeGlow($(this)); ');
			}
			$input.attr('type', 'checkbox');
			if(checked)
				$input.attr('checked', 'checked');
			var $li = $('<li>');
			if(attribute)
				$li.append($input);
			$li.append($a);
			$list.append($li);
		});
		var focusId = $('#SchoolEnrollmentForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchSchoolDadVals(filters, success, error);
}

function suggestSchoolEnrollmentGuardianKeys(filters, $list, pk = null, attribute=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-phone ');
			var $span = $('<span>').attr('class', '').text(o['guardianCompleteName']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk'] + '#' + pk);
			$a.append($i);
			$a.append($span);
			var val = o['enrollmentKeys'];
			var checked = pk == null ? false : Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_guardianKeys_' + pk + '_enrollmentKeys_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valueGuardianKeys w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_guardianKeys_" + pk + "_enrollmentKeys_" + o['pk'] + "'); patchSchoolEnrollmentVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'add' : 'remove') + 'GuardianKeys']: \"" + o['pk'] + "\" } ); ");
				$input.attr('onclick', 'removeGlow($(this)); ');
			}
			$input.attr('type', 'checkbox');
			if(checked)
				$input.attr('checked', 'checked');
			var $li = $('<li>');
			if(attribute)
				$li.append($input);
			$li.append($a);
			$list.append($li);
		});
		var focusId = $('#SchoolEnrollmentForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchSchoolGuardianVals(filters, success, error);
}

function suggestSchoolEnrollmentPaymentKeys(filters, $list, pk = null, attribute=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-search-dollar ');
			var $span = $('<span>').attr('class', '').text(o['paymentCompleteName']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk'] + '#' + pk);
			$a.append($i);
			$a.append($span);
			var val = o['enrollmentKey'];
			var checked = pk == null ? false : Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_paymentKeys_' + pk + '_enrollmentKey_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valuePaymentKeys w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_paymentKeys_" + pk + "_enrollmentKey_" + o['pk'] + "'); patchSchoolEnrollmentVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'add' : 'remove') + 'PaymentKeys']: \"" + o['pk'] + "\" } ); ");
				$input.attr('onclick', 'removeGlow($(this)); ');
			}
			$input.attr('type', 'checkbox');
			if(checked)
				$input.attr('checked', 'checked');
			var $li = $('<li>');
			if(attribute)
				$li.append($input);
			$li.append($a);
			$list.append($li);
		});
		var focusId = $('#SchoolEnrollmentForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchSchoolPaymentVals(filters, success, error);
}

function suggestSchoolEnrollmentUserKeys(filters, $list, pk = null, attribute=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-user-cog ');
			var $span = $('<span>').attr('class', '').text(o['objectTitle']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk'] + '#' + pk);
			$a.append($i);
			$a.append($span);
			var val = o['enrollmentKeys'];
			var checked = pk == null ? false : Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_userKeys_' + pk + '_enrollmentKeys_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valueUserKeys w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_userKeys_" + pk + "_enrollmentKeys_" + o['pk'] + "'); patchSchoolEnrollmentVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'add' : 'remove') + 'UserKeys']: \"" + o['pk'] + "\" } ); ");
				$input.attr('onclick', 'removeGlow($(this)); ');
			}
			$input.attr('type', 'checkbox');
			if(checked)
				$input.attr('checked', 'checked');
			var $li = $('<li>');
			if(attribute)
				$li.append($input);
			$li.append($a);
			$list.append($li);
		});
		var focusId = $('#SchoolEnrollmentForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchSiteUserVals(filters, success, error);
}

// AdminSearch //

async function adminsearchSchoolEnrollment($formFilters, success, error) {
	var filters = adminsearchSchoolEnrollmentFilters($formFilters);
	if(success == null)
		success = function( data, textStatus, jQxhr ) {};
	if(error == null)
		error = function( jqXhr, textStatus, errorThrown ) {};

	adminsearchSchoolEnrollmentVals(filters, success, error);
}

function adminsearchSchoolEnrollmentFilters($formFilters) {
	var filters = [];
	if($formFilters) {

		var filterPk = $formFilters.find('.valuePk').val();
		if(filterPk != null && filterPk !== '')
			filters.push({ name: 'fq', value: 'pk:' + filterPk });

		var filterCreated = $formFilters.find('.valueCreated').val();
		if(filterCreated != null && filterCreated !== '')
			filters.push({ name: 'fq', value: 'created:' + filterCreated });

		var filterModified = $formFilters.find('.valueModified').val();
		if(filterModified != null && filterModified !== '')
			filters.push({ name: 'fq', value: 'modified:' + filterModified });

		var filterObjectId = $formFilters.find('.valueObjectId').val();
		if(filterObjectId != null && filterObjectId !== '')
			filters.push({ name: 'fq', value: 'objectId:' + filterObjectId });

		var $filterArchivedCheckbox = $formFilters.find('input.valueArchived[type = "checkbox"]');
		var $filterArchivedSelect = $formFilters.find('select.valueArchived');
		var filterArchived = $filterArchivedSelect.length ? $filterArchivedSelect.val() : $filterArchivedCheckbox.prop('checked');
		var filterArchivedSelectVal = $formFilters.find('select.filterArchived').val();
		var filterArchived = null;
		if(filterArchivedSelectVal !== '')
			filterArchived = filterArchivedSelectVal == 'true';
		if(filterArchived != null && filterArchived === true)
			filters.push({ name: 'fq', value: 'archived:' + filterArchived });

		var $filterDeletedCheckbox = $formFilters.find('input.valueDeleted[type = "checkbox"]');
		var $filterDeletedSelect = $formFilters.find('select.valueDeleted');
		var filterDeleted = $filterDeletedSelect.length ? $filterDeletedSelect.val() : $filterDeletedCheckbox.prop('checked');
		var filterDeletedSelectVal = $formFilters.find('select.filterDeleted').val();
		var filterDeleted = null;
		if(filterDeletedSelectVal !== '')
			filterDeleted = filterDeletedSelectVal == 'true';
		if(filterDeleted != null && filterDeleted === true)
			filters.push({ name: 'fq', value: 'deleted:' + filterDeleted });

		var filterEnrollmentGroupName = $formFilters.find('.valueEnrollmentGroupName').val();
		if(filterEnrollmentGroupName != null && filterEnrollmentGroupName !== '')
			filters.push({ name: 'fq', value: 'enrollmentGroupName:' + filterEnrollmentGroupName });

		var filterCustomerProfileId = $formFilters.find('.valueCustomerProfileId').val();
		if(filterCustomerProfileId != null && filterCustomerProfileId !== '')
			filters.push({ name: 'fq', value: 'customerProfileId:' + filterCustomerProfileId });

		var $filterEnrollmentPaymentCompleteCheckbox = $formFilters.find('input.valueEnrollmentPaymentComplete[type = "checkbox"]');
		var $filterEnrollmentPaymentCompleteSelect = $formFilters.find('select.valueEnrollmentPaymentComplete');
		var filterEnrollmentPaymentComplete = $filterEnrollmentPaymentCompleteSelect.length ? $filterEnrollmentPaymentCompleteSelect.val() : $filterEnrollmentPaymentCompleteCheckbox.prop('checked');
		var filterEnrollmentPaymentCompleteSelectVal = $formFilters.find('select.filterEnrollmentPaymentComplete').val();
		var filterEnrollmentPaymentComplete = null;
		if(filterEnrollmentPaymentCompleteSelectVal !== '')
			filterEnrollmentPaymentComplete = filterEnrollmentPaymentCompleteSelectVal == 'true';
		if(filterEnrollmentPaymentComplete != null && filterEnrollmentPaymentComplete === true)
			filters.push({ name: 'fq', value: 'enrollmentPaymentComplete:' + filterEnrollmentPaymentComplete });

		var $filterChildPottyTrainedCheckbox = $formFilters.find('input.valueChildPottyTrained[type = "checkbox"]');
		var $filterChildPottyTrainedSelect = $formFilters.find('select.valueChildPottyTrained');
		var filterChildPottyTrained = $filterChildPottyTrainedSelect.length ? $filterChildPottyTrainedSelect.val() : $filterChildPottyTrainedCheckbox.prop('checked');
		var filterChildPottyTrainedSelectVal = $formFilters.find('select.filterChildPottyTrained').val();
		var filterChildPottyTrained = null;
		if(filterChildPottyTrainedSelectVal !== '')
			filterChildPottyTrained = filterChildPottyTrainedSelectVal == 'true';
		if(filterChildPottyTrained != null && filterChildPottyTrained === true)
			filters.push({ name: 'fq', value: 'childPottyTrained:' + filterChildPottyTrained });

		var $filterEnrollmentPaymentEachMonthCheckbox = $formFilters.find('input.valueEnrollmentPaymentEachMonth[type = "checkbox"]');
		var $filterEnrollmentPaymentEachMonthSelect = $formFilters.find('select.valueEnrollmentPaymentEachMonth');
		var filterEnrollmentPaymentEachMonth = $filterEnrollmentPaymentEachMonthSelect.length ? $filterEnrollmentPaymentEachMonthSelect.val() : $filterEnrollmentPaymentEachMonthCheckbox.prop('checked');
		var filterEnrollmentPaymentEachMonthSelectVal = $formFilters.find('select.filterEnrollmentPaymentEachMonth').val();
		var filterEnrollmentPaymentEachMonth = null;
		if(filterEnrollmentPaymentEachMonthSelectVal !== '')
			filterEnrollmentPaymentEachMonth = filterEnrollmentPaymentEachMonthSelectVal == 'true';
		if(filterEnrollmentPaymentEachMonth != null && filterEnrollmentPaymentEachMonth === true)
			filters.push({ name: 'fq', value: 'enrollmentPaymentEachMonth:' + filterEnrollmentPaymentEachMonth });

		var $filterEnrollmentImmunizationsCheckbox = $formFilters.find('input.valueEnrollmentImmunizations[type = "checkbox"]');
		var $filterEnrollmentImmunizationsSelect = $formFilters.find('select.valueEnrollmentImmunizations');
		var filterEnrollmentImmunizations = $filterEnrollmentImmunizationsSelect.length ? $filterEnrollmentImmunizationsSelect.val() : $filterEnrollmentImmunizationsCheckbox.prop('checked');
		var filterEnrollmentImmunizationsSelectVal = $formFilters.find('select.filterEnrollmentImmunizations').val();
		var filterEnrollmentImmunizations = null;
		if(filterEnrollmentImmunizationsSelectVal !== '')
			filterEnrollmentImmunizations = filterEnrollmentImmunizationsSelectVal == 'true';
		if(filterEnrollmentImmunizations != null && filterEnrollmentImmunizations === true)
			filters.push({ name: 'fq', value: 'enrollmentImmunizations:' + filterEnrollmentImmunizations });

		var $filterEnrollmentApprovedCheckbox = $formFilters.find('input.valueEnrollmentApproved[type = "checkbox"]');
		var $filterEnrollmentApprovedSelect = $formFilters.find('select.valueEnrollmentApproved');
		var filterEnrollmentApproved = $filterEnrollmentApprovedSelect.length ? $filterEnrollmentApprovedSelect.val() : $filterEnrollmentApprovedCheckbox.prop('checked');
		var filterEnrollmentApprovedSelectVal = $formFilters.find('select.filterEnrollmentApproved').val();
		var filterEnrollmentApproved = null;
		if(filterEnrollmentApprovedSelectVal !== '')
			filterEnrollmentApproved = filterEnrollmentApprovedSelectVal == 'true';
		if(filterEnrollmentApproved != null && filterEnrollmentApproved === true)
			filters.push({ name: 'fq', value: 'enrollmentApproved:' + filterEnrollmentApproved });

		var $filterFamilyMarriedCheckbox = $formFilters.find('input.valueFamilyMarried[type = "checkbox"]');
		var $filterFamilyMarriedSelect = $formFilters.find('select.valueFamilyMarried');
		var filterFamilyMarried = $filterFamilyMarriedSelect.length ? $filterFamilyMarriedSelect.val() : $filterFamilyMarriedCheckbox.prop('checked');
		var filterFamilyMarriedSelectVal = $formFilters.find('select.filterFamilyMarried').val();
		var filterFamilyMarried = null;
		if(filterFamilyMarriedSelectVal !== '')
			filterFamilyMarried = filterFamilyMarriedSelectVal == 'true';
		if(filterFamilyMarried != null && filterFamilyMarried === true)
			filters.push({ name: 'fq', value: 'familyMarried:' + filterFamilyMarried });

		var $filterFamilySeparatedCheckbox = $formFilters.find('input.valueFamilySeparated[type = "checkbox"]');
		var $filterFamilySeparatedSelect = $formFilters.find('select.valueFamilySeparated');
		var filterFamilySeparated = $filterFamilySeparatedSelect.length ? $filterFamilySeparatedSelect.val() : $filterFamilySeparatedCheckbox.prop('checked');
		var filterFamilySeparatedSelectVal = $formFilters.find('select.filterFamilySeparated').val();
		var filterFamilySeparated = null;
		if(filterFamilySeparatedSelectVal !== '')
			filterFamilySeparated = filterFamilySeparatedSelectVal == 'true';
		if(filterFamilySeparated != null && filterFamilySeparated === true)
			filters.push({ name: 'fq', value: 'familySeparated:' + filterFamilySeparated });

		var $filterFamilyDivorcedCheckbox = $formFilters.find('input.valueFamilyDivorced[type = "checkbox"]');
		var $filterFamilyDivorcedSelect = $formFilters.find('select.valueFamilyDivorced');
		var filterFamilyDivorced = $filterFamilyDivorcedSelect.length ? $filterFamilyDivorcedSelect.val() : $filterFamilyDivorcedCheckbox.prop('checked');
		var filterFamilyDivorcedSelectVal = $formFilters.find('select.filterFamilyDivorced').val();
		var filterFamilyDivorced = null;
		if(filterFamilyDivorcedSelectVal !== '')
			filterFamilyDivorced = filterFamilyDivorcedSelectVal == 'true';
		if(filterFamilyDivorced != null && filterFamilyDivorced === true)
			filters.push({ name: 'fq', value: 'familyDivorced:' + filterFamilyDivorced });

		var filterFamilyAddress = $formFilters.find('.valueFamilyAddress').val();
		if(filterFamilyAddress != null && filterFamilyAddress !== '')
			filters.push({ name: 'fq', value: 'familyAddress:' + filterFamilyAddress });

		var filterEnrollmentSpecialConsiderations = $formFilters.find('.valueEnrollmentSpecialConsiderations').val();
		if(filterEnrollmentSpecialConsiderations != null && filterEnrollmentSpecialConsiderations !== '')
			filters.push({ name: 'fq', value: 'enrollmentSpecialConsiderations:' + filterEnrollmentSpecialConsiderations });

		var filterChildMedicalConditions = $formFilters.find('.valueChildMedicalConditions').val();
		if(filterChildMedicalConditions != null && filterChildMedicalConditions !== '')
			filters.push({ name: 'fq', value: 'childMedicalConditions:' + filterChildMedicalConditions });

		var filterChildPreviousSchoolsAttended = $formFilters.find('.valueChildPreviousSchoolsAttended').val();
		if(filterChildPreviousSchoolsAttended != null && filterChildPreviousSchoolsAttended !== '')
			filters.push({ name: 'fq', value: 'childPreviousSchoolsAttended:' + filterChildPreviousSchoolsAttended });

		var filterFamilyHowDoYouKnowTheSchool = $formFilters.find('.valueFamilyHowDoYouKnowTheSchool').val();
		if(filterFamilyHowDoYouKnowTheSchool != null && filterFamilyHowDoYouKnowTheSchool !== '')
			filters.push({ name: 'fq', value: 'familyHowDoYouKnowTheSchool:' + filterFamilyHowDoYouKnowTheSchool });

		var filterChildDescription = $formFilters.find('.valueChildDescription').val();
		if(filterChildDescription != null && filterChildDescription !== '')
			filters.push({ name: 'fq', value: 'childDescription:' + filterChildDescription });

		var filterChildObjectives = $formFilters.find('.valueChildObjectives').val();
		if(filterChildObjectives != null && filterChildObjectives !== '')
			filters.push({ name: 'fq', value: 'childObjectives:' + filterChildObjectives });

		var filterYearKey = $formFilters.find('.valueYearKey').val();
		if(filterYearKey != null && filterYearKey !== '')
			filters.push({ name: 'fq', value: 'yearKey:' + filterYearKey });

		var filterBlockKeys = $formFilters.find('.valueBlockKeys').val();
		if(filterBlockKeys != null && filterBlockKeys !== '')
			filters.push({ name: 'fq', value: 'blockKeys:' + filterBlockKeys });

		var filterChildKey = $formFilters.find('.valueChildKey').val();
		if(filterChildKey != null && filterChildKey !== '')
			filters.push({ name: 'fq', value: 'childKey:' + filterChildKey });

		var filterGuardianKeys = $formFilters.find('.valueGuardianKeys').val();
		if(filterGuardianKeys != null && filterGuardianKeys !== '')
			filters.push({ name: 'fq', value: 'guardianKeys:' + filterGuardianKeys });

		var filterMomKeys = $formFilters.find('.valueMomKeys').val();
		if(filterMomKeys != null && filterMomKeys !== '')
			filters.push({ name: 'fq', value: 'momKeys:' + filterMomKeys });

		var filterDadKeys = $formFilters.find('.valueDadKeys').val();
		if(filterDadKeys != null && filterDadKeys !== '')
			filters.push({ name: 'fq', value: 'dadKeys:' + filterDadKeys });

		var filterUserKeys = $formFilters.find('.valueUserKeys').val();
		if(filterUserKeys != null && filterUserKeys !== '')
			filters.push({ name: 'fq', value: 'userKeys:' + filterUserKeys });

		var filterPaymentKeys = $formFilters.find('.valuePaymentKeys').val();
		if(filterPaymentKeys != null && filterPaymentKeys !== '')
			filters.push({ name: 'fq', value: 'paymentKeys:' + filterPaymentKeys });

		var filterInheritPk = $formFilters.find('.valueInheritPk').val();
		if(filterInheritPk != null && filterInheritPk !== '')
			filters.push({ name: 'fq', value: 'inheritPk:' + filterInheritPk });

		var filterId = $formFilters.find('.valueId').val();
		if(filterId != null && filterId !== '')
			filters.push({ name: 'fq', value: 'id:' + filterId });

		var filterClassCanonicalName = $formFilters.find('.valueClassCanonicalName').val();
		if(filterClassCanonicalName != null && filterClassCanonicalName !== '')
			filters.push({ name: 'fq', value: 'classCanonicalName:' + filterClassCanonicalName });

		var filterClassSimpleName = $formFilters.find('.valueClassSimpleName').val();
		if(filterClassSimpleName != null && filterClassSimpleName !== '')
			filters.push({ name: 'fq', value: 'classSimpleName:' + filterClassSimpleName });

		var filterClassCanonicalNames = $formFilters.find('.valueClassCanonicalNames').val();
		if(filterClassCanonicalNames != null && filterClassCanonicalNames !== '')
			filters.push({ name: 'fq', value: 'classCanonicalNames:' + filterClassCanonicalNames });

		var filterSessionId = $formFilters.find('.valueSessionId').val();
		if(filterSessionId != null && filterSessionId !== '')
			filters.push({ name: 'fq', value: 'sessionId:' + filterSessionId });

		var filterUserId = $formFilters.find('.valueUserId').val();
		if(filterUserId != null && filterUserId !== '')
			filters.push({ name: 'fq', value: 'userId:' + filterUserId });

		var filterUserKey = $formFilters.find('.valueUserKey').val();
		if(filterUserKey != null && filterUserKey !== '')
			filters.push({ name: 'fq', value: 'userKey:' + filterUserKey });

		var filterSaves = $formFilters.find('.valueSaves').val();
		if(filterSaves != null && filterSaves !== '')
			filters.push({ name: 'fq', value: 'saves:' + filterSaves });

		var filterObjectTitle = $formFilters.find('.valueObjectTitle').val();
		if(filterObjectTitle != null && filterObjectTitle !== '')
			filters.push({ name: 'fq', value: 'objectTitle:' + filterObjectTitle });

		var filterObjectSuggest = $formFilters.find('.valueObjectSuggest').val();
		if(filterObjectSuggest != null && filterObjectSuggest !== '')
			filters.push({ name: 'q', value: 'objectSuggest:' + filterObjectSuggest });

		var filterObjectText = $formFilters.find('.valueObjectText').val();
		if(filterObjectText != null && filterObjectText !== '')
			filters.push({ name: 'fq', value: 'objectText:' + filterObjectText });

		var filterPageUrlId = $formFilters.find('.valuePageUrlId').val();
		if(filterPageUrlId != null && filterPageUrlId !== '')
			filters.push({ name: 'fq', value: 'pageUrlId:' + filterPageUrlId });

		var filterPageUrlPk = $formFilters.find('.valuePageUrlPk').val();
		if(filterPageUrlPk != null && filterPageUrlPk !== '')
			filters.push({ name: 'fq', value: 'pageUrlPk:' + filterPageUrlPk });

		var filterPageUrlApi = $formFilters.find('.valuePageUrlApi').val();
		if(filterPageUrlApi != null && filterPageUrlApi !== '')
			filters.push({ name: 'fq', value: 'pageUrlApi:' + filterPageUrlApi });

		var filterEnrollmentKey = $formFilters.find('.valueEnrollmentKey').val();
		if(filterEnrollmentKey != null && filterEnrollmentKey !== '')
			filters.push({ name: 'fq', value: 'enrollmentKey:' + filterEnrollmentKey });

		var filterSchoolKey = $formFilters.find('.valueSchoolKey').val();
		if(filterSchoolKey != null && filterSchoolKey !== '')
			filters.push({ name: 'fq', value: 'schoolKey:' + filterSchoolKey });

		var filterSessionKey = $formFilters.find('.valueSessionKey').val();
		if(filterSessionKey != null && filterSessionKey !== '')
			filters.push({ name: 'fq', value: 'sessionKey:' + filterSessionKey });

		var filterAgeKey = $formFilters.find('.valueAgeKey').val();
		if(filterAgeKey != null && filterAgeKey !== '')
			filters.push({ name: 'fq', value: 'ageKey:' + filterAgeKey });

		var filterBlockKey = $formFilters.find('.valueBlockKey').val();
		if(filterBlockKey != null && filterBlockKey !== '')
			filters.push({ name: 'fq', value: 'blockKey:' + filterBlockKey });

		var filterEnrollmentFormKey = $formFilters.find('.valueEnrollmentFormKey').val();
		if(filterEnrollmentFormKey != null && filterEnrollmentFormKey !== '')
			filters.push({ name: 'fq', value: 'enrollmentFormKey:' + filterEnrollmentFormKey });

		var filterEducationSort = $formFilters.find('.valueEducationSort').val();
		if(filterEducationSort != null && filterEducationSort !== '')
			filters.push({ name: 'fq', value: 'educationSort:' + filterEducationSort });

		var filterSchoolSort = $formFilters.find('.valueSchoolSort').val();
		if(filterSchoolSort != null && filterSchoolSort !== '')
			filters.push({ name: 'fq', value: 'schoolSort:' + filterSchoolSort });

		var filterYearSort = $formFilters.find('.valueYearSort').val();
		if(filterYearSort != null && filterYearSort !== '')
			filters.push({ name: 'fq', value: 'yearSort:' + filterYearSort });

		var filterSeasonSort = $formFilters.find('.valueSeasonSort').val();
		if(filterSeasonSort != null && filterSeasonSort !== '')
			filters.push({ name: 'fq', value: 'seasonSort:' + filterSeasonSort });

		var filterSessionSort = $formFilters.find('.valueSessionSort').val();
		if(filterSessionSort != null && filterSessionSort !== '')
			filters.push({ name: 'fq', value: 'sessionSort:' + filterSessionSort });

		var filterAgeSort = $formFilters.find('.valueAgeSort').val();
		if(filterAgeSort != null && filterAgeSort !== '')
			filters.push({ name: 'fq', value: 'ageSort:' + filterAgeSort });

		var filterChildFirstName = $formFilters.find('.valueChildFirstName').val();
		if(filterChildFirstName != null && filterChildFirstName !== '')
			filters.push({ name: 'fq', value: 'childFirstName:' + filterChildFirstName });

		var filterChildFirstNamePreferred = $formFilters.find('.valueChildFirstNamePreferred').val();
		if(filterChildFirstNamePreferred != null && filterChildFirstNamePreferred !== '')
			filters.push({ name: 'fq', value: 'childFirstNamePreferred:' + filterChildFirstNamePreferred });

		var filterChildFamilyName = $formFilters.find('.valueChildFamilyName').val();
		if(filterChildFamilyName != null && filterChildFamilyName !== '')
			filters.push({ name: 'fq', value: 'childFamilyName:' + filterChildFamilyName });

		var filterMomFirstName = $formFilters.find('.valueMomFirstName').val();
		if(filterMomFirstName != null && filterMomFirstName !== '')
			filters.push({ name: 'fq', value: 'momFirstName:' + filterMomFirstName });

		var filterMomFirstNamePreferred = $formFilters.find('.valueMomFirstNamePreferred').val();
		if(filterMomFirstNamePreferred != null && filterMomFirstNamePreferred !== '')
			filters.push({ name: 'fq', value: 'momFirstNamePreferred:' + filterMomFirstNamePreferred });

		var filterMomCompleteNamePreferred = $formFilters.find('.valueMomCompleteNamePreferred').val();
		if(filterMomCompleteNamePreferred != null && filterMomCompleteNamePreferred !== '')
			filters.push({ name: 'fq', value: 'momCompleteNamePreferred:' + filterMomCompleteNamePreferred });

		var filterDadFirstName = $formFilters.find('.valueDadFirstName').val();
		if(filterDadFirstName != null && filterDadFirstName !== '')
			filters.push({ name: 'fq', value: 'dadFirstName:' + filterDadFirstName });

		var filterDadFirstNamePreferred = $formFilters.find('.valueDadFirstNamePreferred').val();
		if(filterDadFirstNamePreferred != null && filterDadFirstNamePreferred !== '')
			filters.push({ name: 'fq', value: 'dadFirstNamePreferred:' + filterDadFirstNamePreferred });

		var filterDadCompleteNamePreferred = $formFilters.find('.valueDadCompleteNamePreferred').val();
		if(filterDadCompleteNamePreferred != null && filterDadCompleteNamePreferred !== '')
			filters.push({ name: 'fq', value: 'dadCompleteNamePreferred:' + filterDadCompleteNamePreferred });

		var filterChildCompleteName = $formFilters.find('.valueChildCompleteName').val();
		if(filterChildCompleteName != null && filterChildCompleteName !== '')
			filters.push({ name: 'fq', value: 'childCompleteName:' + filterChildCompleteName });

		var filterChildCompleteNamePreferred = $formFilters.find('.valueChildCompleteNamePreferred').val();
		if(filterChildCompleteNamePreferred != null && filterChildCompleteNamePreferred !== '')
			filters.push({ name: 'fq', value: 'childCompleteNamePreferred:' + filterChildCompleteNamePreferred });

		var filterChildBirthDate = $formFilters.find('.valueChildBirthDate').val();
		if(filterChildBirthDate != null && filterChildBirthDate !== '')
			filters.push({ name: 'fq', value: 'childBirthDate:' + filterChildBirthDate });

		var filterChildBirthDateYear = $formFilters.find('.valueChildBirthDateYear').val();
		if(filterChildBirthDateYear != null && filterChildBirthDateYear !== '')
			filters.push({ name: 'fq', value: 'childBirthDateYear:' + filterChildBirthDateYear });

		var filterChildBirthDateMonthOfYear = $formFilters.find('.valueChildBirthDateMonthOfYear').val();
		if(filterChildBirthDateMonthOfYear != null && filterChildBirthDateMonthOfYear !== '')
			filters.push({ name: 'fq', value: 'childBirthDateMonthOfYear:' + filterChildBirthDateMonthOfYear });

		var filterChildBirthDateDayOfWeek = $formFilters.find('.valueChildBirthDateDayOfWeek').val();
		if(filterChildBirthDateDayOfWeek != null && filterChildBirthDateDayOfWeek !== '')
			filters.push({ name: 'fq', value: 'childBirthDateDayOfWeek:' + filterChildBirthDateDayOfWeek });

		var filterChildBirthMonth = $formFilters.find('.valueChildBirthMonth').val();
		if(filterChildBirthMonth != null && filterChildBirthMonth !== '')
			filters.push({ name: 'fq', value: 'childBirthMonth:' + filterChildBirthMonth });

		var filterChildBirthDay = $formFilters.find('.valueChildBirthDay').val();
		if(filterChildBirthDay != null && filterChildBirthDay !== '')
			filters.push({ name: 'fq', value: 'childBirthDay:' + filterChildBirthDay });

		var filterSchoolName = $formFilters.find('.valueSchoolName').val();
		if(filterSchoolName != null && filterSchoolName !== '')
			filters.push({ name: 'fq', value: 'schoolName:' + filterSchoolName });

		var filterSchoolCompleteName = $formFilters.find('.valueSchoolCompleteName').val();
		if(filterSchoolCompleteName != null && filterSchoolCompleteName !== '')
			filters.push({ name: 'fq', value: 'schoolCompleteName:' + filterSchoolCompleteName });

		var filterSchoolLocation = $formFilters.find('.valueSchoolLocation').val();
		if(filterSchoolLocation != null && filterSchoolLocation !== '')
			filters.push({ name: 'fq', value: 'schoolLocation:' + filterSchoolLocation });

		var filterSchoolAddress = $formFilters.find('.valueSchoolAddress').val();
		if(filterSchoolAddress != null && filterSchoolAddress !== '')
			filters.push({ name: 'fq', value: 'schoolAddress:' + filterSchoolAddress });

		var filterSchoolPhoneNumber = $formFilters.find('.valueSchoolPhoneNumber').val();
		if(filterSchoolPhoneNumber != null && filterSchoolPhoneNumber !== '')
			filters.push({ name: 'fq', value: 'schoolPhoneNumber:' + filterSchoolPhoneNumber });

		var filterSchoolForm = $formFilters.find('.valueSchoolForm').val();
		if(filterSchoolForm != null && filterSchoolForm !== '')
			filters.push({ name: 'fq', value: 'schoolForm:' + filterSchoolForm });

		var filterSchoolNumber = $formFilters.find('.valueSchoolNumber').val();
		if(filterSchoolNumber != null && filterSchoolNumber !== '')
			filters.push({ name: 'fq', value: 'schoolNumber:' + filterSchoolNumber });

		var filterSchoolAdministratorName = $formFilters.find('.valueSchoolAdministratorName').val();
		if(filterSchoolAdministratorName != null && filterSchoolAdministratorName !== '')
			filters.push({ name: 'fq', value: 'schoolAdministratorName:' + filterSchoolAdministratorName });

		var filterYearStart = $formFilters.find('.valueYearStart').val();
		if(filterYearStart != null && filterYearStart !== '')
			filters.push({ name: 'fq', value: 'yearStart:' + filterYearStart });

		var filterYearEnd = $formFilters.find('.valueYearEnd').val();
		if(filterYearEnd != null && filterYearEnd !== '')
			filters.push({ name: 'fq', value: 'yearEnd:' + filterYearEnd });

		var filterSeasonStartDate = $formFilters.find('.valueSeasonStartDate').val();
		if(filterSeasonStartDate != null && filterSeasonStartDate !== '')
			filters.push({ name: 'fq', value: 'seasonStartDate:' + filterSeasonStartDate });

		var filterYearEnrollmentFee = $formFilters.find('.valueYearEnrollmentFee').val();
		if(filterYearEnrollmentFee != null && filterYearEnrollmentFee !== '')
			filters.push({ name: 'fq', value: 'yearEnrollmentFee:' + filterYearEnrollmentFee });

		var filterSessionStartDate = $formFilters.find('.valueSessionStartDate').val();
		if(filterSessionStartDate != null && filterSessionStartDate !== '')
			filters.push({ name: 'fq', value: 'sessionStartDate:' + filterSessionStartDate });

		var filterSessionEndDate = $formFilters.find('.valueSessionEndDate').val();
		if(filterSessionEndDate != null && filterSessionEndDate !== '')
			filters.push({ name: 'fq', value: 'sessionEndDate:' + filterSessionEndDate });

		var filterAgeCompleteName = $formFilters.find('.valueAgeCompleteName').val();
		if(filterAgeCompleteName != null && filterAgeCompleteName !== '')
			filters.push({ name: 'fq', value: 'ageCompleteName:' + filterAgeCompleteName });

		var filterAgeStart = $formFilters.find('.valueAgeStart').val();
		if(filterAgeStart != null && filterAgeStart !== '')
			filters.push({ name: 'fq', value: 'ageStart:' + filterAgeStart });

		var filterAgeEnd = $formFilters.find('.valueAgeEnd').val();
		if(filterAgeEnd != null && filterAgeEnd !== '')
			filters.push({ name: 'fq', value: 'ageEnd:' + filterAgeEnd });

		var filterBlockStartTime = $formFilters.find('.valueBlockStartTime').val();
		if(filterBlockStartTime != null && filterBlockStartTime !== '')
			filters.push({ name: 'fq', value: 'blockStartTime:' + filterBlockStartTime });

		var filterBlockEndTime = $formFilters.find('.valueBlockEndTime').val();
		if(filterBlockEndTime != null && filterBlockEndTime !== '')
			filters.push({ name: 'fq', value: 'blockEndTime:' + filterBlockEndTime });

		var filterBlockPricePerMonth = $formFilters.find('.valueBlockPricePerMonth').val();
		if(filterBlockPricePerMonth != null && filterBlockPricePerMonth !== '')
			filters.push({ name: 'fq', value: 'blockPricePerMonth:' + filterBlockPricePerMonth });

		var $filterBlockSundayCheckbox = $formFilters.find('input.valueBlockSunday[type = "checkbox"]');
		var $filterBlockSundaySelect = $formFilters.find('select.valueBlockSunday');
		var filterBlockSunday = $filterBlockSundaySelect.length ? $filterBlockSundaySelect.val() : $filterBlockSundayCheckbox.prop('checked');
		var filterBlockSundaySelectVal = $formFilters.find('select.filterBlockSunday').val();
		var filterBlockSunday = null;
		if(filterBlockSundaySelectVal !== '')
			filterBlockSunday = filterBlockSundaySelectVal == 'true';
		if(filterBlockSunday != null && filterBlockSunday === true)
			filters.push({ name: 'fq', value: 'blockSunday:' + filterBlockSunday });

		var $filterBlockMondayCheckbox = $formFilters.find('input.valueBlockMonday[type = "checkbox"]');
		var $filterBlockMondaySelect = $formFilters.find('select.valueBlockMonday');
		var filterBlockMonday = $filterBlockMondaySelect.length ? $filterBlockMondaySelect.val() : $filterBlockMondayCheckbox.prop('checked');
		var filterBlockMondaySelectVal = $formFilters.find('select.filterBlockMonday').val();
		var filterBlockMonday = null;
		if(filterBlockMondaySelectVal !== '')
			filterBlockMonday = filterBlockMondaySelectVal == 'true';
		if(filterBlockMonday != null && filterBlockMonday === true)
			filters.push({ name: 'fq', value: 'blockMonday:' + filterBlockMonday });

		var $filterBlockTuesdayCheckbox = $formFilters.find('input.valueBlockTuesday[type = "checkbox"]');
		var $filterBlockTuesdaySelect = $formFilters.find('select.valueBlockTuesday');
		var filterBlockTuesday = $filterBlockTuesdaySelect.length ? $filterBlockTuesdaySelect.val() : $filterBlockTuesdayCheckbox.prop('checked');
		var filterBlockTuesdaySelectVal = $formFilters.find('select.filterBlockTuesday').val();
		var filterBlockTuesday = null;
		if(filterBlockTuesdaySelectVal !== '')
			filterBlockTuesday = filterBlockTuesdaySelectVal == 'true';
		if(filterBlockTuesday != null && filterBlockTuesday === true)
			filters.push({ name: 'fq', value: 'blockTuesday:' + filterBlockTuesday });

		var $filterBlockWednesdayCheckbox = $formFilters.find('input.valueBlockWednesday[type = "checkbox"]');
		var $filterBlockWednesdaySelect = $formFilters.find('select.valueBlockWednesday');
		var filterBlockWednesday = $filterBlockWednesdaySelect.length ? $filterBlockWednesdaySelect.val() : $filterBlockWednesdayCheckbox.prop('checked');
		var filterBlockWednesdaySelectVal = $formFilters.find('select.filterBlockWednesday').val();
		var filterBlockWednesday = null;
		if(filterBlockWednesdaySelectVal !== '')
			filterBlockWednesday = filterBlockWednesdaySelectVal == 'true';
		if(filterBlockWednesday != null && filterBlockWednesday === true)
			filters.push({ name: 'fq', value: 'blockWednesday:' + filterBlockWednesday });

		var $filterBlockThursdayCheckbox = $formFilters.find('input.valueBlockThursday[type = "checkbox"]');
		var $filterBlockThursdaySelect = $formFilters.find('select.valueBlockThursday');
		var filterBlockThursday = $filterBlockThursdaySelect.length ? $filterBlockThursdaySelect.val() : $filterBlockThursdayCheckbox.prop('checked');
		var filterBlockThursdaySelectVal = $formFilters.find('select.filterBlockThursday').val();
		var filterBlockThursday = null;
		if(filterBlockThursdaySelectVal !== '')
			filterBlockThursday = filterBlockThursdaySelectVal == 'true';
		if(filterBlockThursday != null && filterBlockThursday === true)
			filters.push({ name: 'fq', value: 'blockThursday:' + filterBlockThursday });

		var $filterBlockFridayCheckbox = $formFilters.find('input.valueBlockFriday[type = "checkbox"]');
		var $filterBlockFridaySelect = $formFilters.find('select.valueBlockFriday');
		var filterBlockFriday = $filterBlockFridaySelect.length ? $filterBlockFridaySelect.val() : $filterBlockFridayCheckbox.prop('checked');
		var filterBlockFridaySelectVal = $formFilters.find('select.filterBlockFriday').val();
		var filterBlockFriday = null;
		if(filterBlockFridaySelectVal !== '')
			filterBlockFriday = filterBlockFridaySelectVal == 'true';
		if(filterBlockFriday != null && filterBlockFriday === true)
			filters.push({ name: 'fq', value: 'blockFriday:' + filterBlockFriday });

		var $filterBlockSaturdayCheckbox = $formFilters.find('input.valueBlockSaturday[type = "checkbox"]');
		var $filterBlockSaturdaySelect = $formFilters.find('select.valueBlockSaturday');
		var filterBlockSaturday = $filterBlockSaturdaySelect.length ? $filterBlockSaturdaySelect.val() : $filterBlockSaturdayCheckbox.prop('checked');
		var filterBlockSaturdaySelectVal = $formFilters.find('select.filterBlockSaturday').val();
		var filterBlockSaturday = null;
		if(filterBlockSaturdaySelectVal !== '')
			filterBlockSaturday = filterBlockSaturdaySelectVal == 'true';
		if(filterBlockSaturday != null && filterBlockSaturday === true)
			filters.push({ name: 'fq', value: 'blockSaturday:' + filterBlockSaturday });

		var filterBlockTotalPrice = $formFilters.find('.valueBlockTotalPrice').val();
		if(filterBlockTotalPrice != null && filterBlockTotalPrice !== '')
			filters.push({ name: 'fq', value: 'blockTotalPrice:' + filterBlockTotalPrice });

		var filterBlockAdminName = $formFilters.find('.valueBlockAdminName').val();
		if(filterBlockAdminName != null && filterBlockAdminName !== '')
			filters.push({ name: 'fq', value: 'blockAdminName:' + filterBlockAdminName });

		var filterBlockShortName = $formFilters.find('.valueBlockShortName').val();
		if(filterBlockShortName != null && filterBlockShortName !== '')
			filters.push({ name: 'fq', value: 'blockShortName:' + filterBlockShortName });

		var filterBlockCompleteName = $formFilters.find('.valueBlockCompleteName').val();
		if(filterBlockCompleteName != null && filterBlockCompleteName !== '')
			filters.push({ name: 'fq', value: 'blockCompleteName:' + filterBlockCompleteName });

		var filterEnrollmentGroupColor = $formFilters.find('.valueEnrollmentGroupColor').val();
		if(filterEnrollmentGroupColor != null && filterEnrollmentGroupColor !== '')
			filters.push({ name: 'fq', value: 'enrollmentGroupColor:' + filterEnrollmentGroupColor });

		var filterEnrollmentChargeDate = $formFilters.find('.valueEnrollmentChargeDate').val();
		if(filterEnrollmentChargeDate != null && filterEnrollmentChargeDate !== '')
			filters.push({ name: 'fq', value: 'enrollmentChargeDate:' + filterEnrollmentChargeDate });

		var filterPaymentLastDate = $formFilters.find('.valuePaymentLastDate').val();
		if(filterPaymentLastDate != null && filterPaymentLastDate !== '')
			filters.push({ name: 'fq', value: 'paymentLastDate:' + filterPaymentLastDate });

		var filterPaymentLastStr = $formFilters.find('.valuePaymentLastStr').val();
		if(filterPaymentLastStr != null && filterPaymentLastStr !== '')
			filters.push({ name: 'fq', value: 'paymentLastStr:' + filterPaymentLastStr });

		var filterPaymentAmount = $formFilters.find('.valuePaymentAmount').val();
		if(filterPaymentAmount != null && filterPaymentAmount !== '')
			filters.push({ name: 'fq', value: 'paymentAmount:' + filterPaymentAmount });

		var filterChargeAmount = $formFilters.find('.valueChargeAmount').val();
		if(filterChargeAmount != null && filterChargeAmount !== '')
			filters.push({ name: 'fq', value: 'chargeAmount:' + filterChargeAmount });

		var filterChargeAmountFuture = $formFilters.find('.valueChargeAmountFuture').val();
		if(filterChargeAmountFuture != null && filterChargeAmountFuture !== '')
			filters.push({ name: 'fq', value: 'chargeAmountFuture:' + filterChargeAmountFuture });

		var filterChargeAmountDue = $formFilters.find('.valueChargeAmountDue').val();
		if(filterChargeAmountDue != null && filterChargeAmountDue !== '')
			filters.push({ name: 'fq', value: 'chargeAmountDue:' + filterChargeAmountDue });

		var filterChargeAmountNotPassed = $formFilters.find('.valueChargeAmountNotPassed').val();
		if(filterChargeAmountNotPassed != null && filterChargeAmountNotPassed !== '')
			filters.push({ name: 'fq', value: 'chargeAmountNotPassed:' + filterChargeAmountNotPassed });

		var filterChargesNow = $formFilters.find('.valueChargesNow').val();
		if(filterChargesNow != null && filterChargesNow !== '')
			filters.push({ name: 'fq', value: 'chargesNow:' + filterChargesNow });

		var $filterPaymentsCurrentCheckbox = $formFilters.find('input.valuePaymentsCurrent[type = "checkbox"]');
		var $filterPaymentsCurrentSelect = $formFilters.find('select.valuePaymentsCurrent');
		var filterPaymentsCurrent = $filterPaymentsCurrentSelect.length ? $filterPaymentsCurrentSelect.val() : $filterPaymentsCurrentCheckbox.prop('checked');
		var filterPaymentsCurrentSelectVal = $formFilters.find('select.filterPaymentsCurrent').val();
		var filterPaymentsCurrent = null;
		if(filterPaymentsCurrentSelectVal !== '')
			filterPaymentsCurrent = filterPaymentsCurrentSelectVal == 'true';
		if(filterPaymentsCurrent != null && filterPaymentsCurrent === true)
			filters.push({ name: 'fq', value: 'paymentsCurrent:' + filterPaymentsCurrent });

		var $filterPaymentsLateCheckbox = $formFilters.find('input.valuePaymentsLate[type = "checkbox"]');
		var $filterPaymentsLateSelect = $formFilters.find('select.valuePaymentsLate');
		var filterPaymentsLate = $filterPaymentsLateSelect.length ? $filterPaymentsLateSelect.val() : $filterPaymentsLateCheckbox.prop('checked');
		var filterPaymentsLateSelectVal = $formFilters.find('select.filterPaymentsLate').val();
		var filterPaymentsLate = null;
		if(filterPaymentsLateSelectVal !== '')
			filterPaymentsLate = filterPaymentsLateSelectVal == 'true';
		if(filterPaymentsLate != null && filterPaymentsLate === true)
			filters.push({ name: 'fq', value: 'paymentsLate:' + filterPaymentsLate });

		var filterPaymentsLateAmount = $formFilters.find('.valuePaymentsLateAmount').val();
		if(filterPaymentsLateAmount != null && filterPaymentsLateAmount !== '')
			filters.push({ name: 'fq', value: 'paymentsLateAmount:' + filterPaymentsLateAmount });

		var $filterPaymentsAheadCheckbox = $formFilters.find('input.valuePaymentsAhead[type = "checkbox"]');
		var $filterPaymentsAheadSelect = $formFilters.find('select.valuePaymentsAhead');
		var filterPaymentsAhead = $filterPaymentsAheadSelect.length ? $filterPaymentsAheadSelect.val() : $filterPaymentsAheadCheckbox.prop('checked');
		var filterPaymentsAheadSelectVal = $formFilters.find('select.filterPaymentsAhead').val();
		var filterPaymentsAhead = null;
		if(filterPaymentsAheadSelectVal !== '')
			filterPaymentsAhead = filterPaymentsAheadSelectVal == 'true';
		if(filterPaymentsAhead != null && filterPaymentsAhead === true)
			filters.push({ name: 'fq', value: 'paymentsAhead:' + filterPaymentsAhead });

		var $filterPaymentsPastDueCheckbox = $formFilters.find('input.valuePaymentsPastDue[type = "checkbox"]');
		var $filterPaymentsPastDueSelect = $formFilters.find('select.valuePaymentsPastDue');
		var filterPaymentsPastDue = $filterPaymentsPastDueSelect.length ? $filterPaymentsPastDueSelect.val() : $filterPaymentsPastDueCheckbox.prop('checked');
		var filterPaymentsPastDueSelectVal = $formFilters.find('select.filterPaymentsPastDue').val();
		var filterPaymentsPastDue = null;
		if(filterPaymentsPastDueSelectVal !== '')
			filterPaymentsPastDue = filterPaymentsPastDueSelectVal == 'true';
		if(filterPaymentsPastDue != null && filterPaymentsPastDue === true)
			filters.push({ name: 'fq', value: 'paymentsPastDue:' + filterPaymentsPastDue });

		var filterPaymentsPastDueAmount = $formFilters.find('.valuePaymentsPastDueAmount').val();
		if(filterPaymentsPastDueAmount != null && filterPaymentsPastDueAmount !== '')
			filters.push({ name: 'fq', value: 'paymentsPastDueAmount:' + filterPaymentsPastDueAmount });

		var $filterChargesCreatedCheckbox = $formFilters.find('input.valueChargesCreated[type = "checkbox"]');
		var $filterChargesCreatedSelect = $formFilters.find('select.valueChargesCreated');
		var filterChargesCreated = $filterChargesCreatedSelect.length ? $filterChargesCreatedSelect.val() : $filterChargesCreatedCheckbox.prop('checked');
		var filterChargesCreatedSelectVal = $formFilters.find('select.filterChargesCreated').val();
		var filterChargesCreated = null;
		if(filterChargesCreatedSelectVal !== '')
			filterChargesCreated = filterChargesCreatedSelectVal == 'true';
		if(filterChargesCreated != null && filterChargesCreated === true)
			filters.push({ name: 'fq', value: 'chargesCreated:' + filterChargesCreated });

		var filterCreatedYear = $formFilters.find('.valueCreatedYear').val();
		if(filterCreatedYear != null && filterCreatedYear !== '')
			filters.push({ name: 'fq', value: 'createdYear:' + filterCreatedYear });

		var filterCreatedDayOfWeek = $formFilters.find('.valueCreatedDayOfWeek').val();
		if(filterCreatedDayOfWeek != null && filterCreatedDayOfWeek !== '')
			filters.push({ name: 'fq', value: 'createdDayOfWeek:' + filterCreatedDayOfWeek });

		var filterCreatedMonthOfYear = $formFilters.find('.valueCreatedMonthOfYear').val();
		if(filterCreatedMonthOfYear != null && filterCreatedMonthOfYear !== '')
			filters.push({ name: 'fq', value: 'createdMonthOfYear:' + filterCreatedMonthOfYear });

		var filterCreatedHourOfDay = $formFilters.find('.valueCreatedHourOfDay').val();
		if(filterCreatedHourOfDay != null && filterCreatedHourOfDay !== '')
			filters.push({ name: 'fq', value: 'createdHourOfDay:' + filterCreatedHourOfDay });

		var filterEnrollmentDaysOfWeek = $formFilters.find('.valueEnrollmentDaysOfWeek').val();
		if(filterEnrollmentDaysOfWeek != null && filterEnrollmentDaysOfWeek !== '')
			filters.push({ name: 'fq', value: 'enrollmentDaysOfWeek:' + filterEnrollmentDaysOfWeek });

		var filterEnrollmentEmails = $formFilters.find('.valueEnrollmentEmails').val();
		if(filterEnrollmentEmails != null && filterEnrollmentEmails !== '')
			filters.push({ name: 'fq', value: 'enrollmentEmails:' + filterEnrollmentEmails });

		var filterEnrollmentEmail = $formFilters.find('.valueEnrollmentEmail').val();
		if(filterEnrollmentEmail != null && filterEnrollmentEmail !== '')
			filters.push({ name: 'fq', value: 'enrollmentEmail:' + filterEnrollmentEmail });

		var filterEnrollmentPhoneNumbers = $formFilters.find('.valueEnrollmentPhoneNumbers').val();
		if(filterEnrollmentPhoneNumbers != null && filterEnrollmentPhoneNumbers !== '')
			filters.push({ name: 'fq', value: 'enrollmentPhoneNumbers:' + filterEnrollmentPhoneNumbers });

		var filterEnrollmentPhoneNumber = $formFilters.find('.valueEnrollmentPhoneNumber').val();
		if(filterEnrollmentPhoneNumber != null && filterEnrollmentPhoneNumber !== '')
			filters.push({ name: 'fq', value: 'enrollmentPhoneNumber:' + filterEnrollmentPhoneNumber });

		var filterEnrollmentParentName = $formFilters.find('.valueEnrollmentParentName').val();
		if(filterEnrollmentParentName != null && filterEnrollmentParentName !== '')
			filters.push({ name: 'fq', value: 'enrollmentParentName:' + filterEnrollmentParentName });

		var filterEnrollmentDate1 = $formFilters.find('.valueEnrollmentDate1').val();
		if(filterEnrollmentDate1 != null && filterEnrollmentDate1 !== '')
			filters.push({ name: 'fq', value: 'enrollmentDate1:' + filterEnrollmentDate1 });

		var filterEnrollmentDate2 = $formFilters.find('.valueEnrollmentDate2').val();
		if(filterEnrollmentDate2 != null && filterEnrollmentDate2 !== '')
			filters.push({ name: 'fq', value: 'enrollmentDate2:' + filterEnrollmentDate2 });

		var filterEnrollmentDate3 = $formFilters.find('.valueEnrollmentDate3').val();
		if(filterEnrollmentDate3 != null && filterEnrollmentDate3 !== '')
			filters.push({ name: 'fq', value: 'enrollmentDate3:' + filterEnrollmentDate3 });

		var filterEnrollmentDate4 = $formFilters.find('.valueEnrollmentDate4').val();
		if(filterEnrollmentDate4 != null && filterEnrollmentDate4 !== '')
			filters.push({ name: 'fq', value: 'enrollmentDate4:' + filterEnrollmentDate4 });

		var filterEnrollmentDate5 = $formFilters.find('.valueEnrollmentDate5').val();
		if(filterEnrollmentDate5 != null && filterEnrollmentDate5 !== '')
			filters.push({ name: 'fq', value: 'enrollmentDate5:' + filterEnrollmentDate5 });

		var filterEnrollmentDate6 = $formFilters.find('.valueEnrollmentDate6').val();
		if(filterEnrollmentDate6 != null && filterEnrollmentDate6 !== '')
			filters.push({ name: 'fq', value: 'enrollmentDate6:' + filterEnrollmentDate6 });

		var filterEnrollmentDate7 = $formFilters.find('.valueEnrollmentDate7').val();
		if(filterEnrollmentDate7 != null && filterEnrollmentDate7 !== '')
			filters.push({ name: 'fq', value: 'enrollmentDate7:' + filterEnrollmentDate7 });

		var filterEnrollmentDate8 = $formFilters.find('.valueEnrollmentDate8').val();
		if(filterEnrollmentDate8 != null && filterEnrollmentDate8 !== '')
			filters.push({ name: 'fq', value: 'enrollmentDate8:' + filterEnrollmentDate8 });

		var filterEnrollmentDate9 = $formFilters.find('.valueEnrollmentDate9').val();
		if(filterEnrollmentDate9 != null && filterEnrollmentDate9 !== '')
			filters.push({ name: 'fq', value: 'enrollmentDate9:' + filterEnrollmentDate9 });

		var filterEnrollmentDate10 = $formFilters.find('.valueEnrollmentDate10').val();
		if(filterEnrollmentDate10 != null && filterEnrollmentDate10 !== '')
			filters.push({ name: 'fq', value: 'enrollmentDate10:' + filterEnrollmentDate10 });

		var filterChildImmunizationsReceived = $formFilters.find('.valueChildImmunizationsReceived').val();
		if(filterChildImmunizationsReceived != null && filterChildImmunizationsReceived !== '')
			filters.push({ name: 'fq', value: 'childImmunizationsReceived:' + filterChildImmunizationsReceived });

		var filterChildPhotosApproved = $formFilters.find('.valueChildPhotosApproved').val();
		if(filterChildPhotosApproved != null && filterChildPhotosApproved !== '')
			filters.push({ name: 'fq', value: 'childPhotosApproved:' + filterChildPhotosApproved });

		var filterEnrollmentCompleteName = $formFilters.find('.valueEnrollmentCompleteName').val();
		if(filterEnrollmentCompleteName != null && filterEnrollmentCompleteName !== '')
			filters.push({ name: 'fq', value: 'enrollmentCompleteName:' + filterEnrollmentCompleteName });
	}
	return filters;
}

function adminsearchSchoolEnrollmentVals(filters, success, error) {

	$.ajax({
		url: '/api/admin/enrollment?' + $.param(filters)
		, dataType: 'json'
		, type: 'GET'
		, contentType: 'application/json; charset=utf-8'
		, success: success
		, error: error
	});
}

function suggestSchoolEnrollmentObjectSuggest($formFilters, $list) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fas fa-edit ');
			var $span = $('<span>').attr('class', '').text(o['enrollmentCompleteName']);
			var $li = $('<li>');
			var $a = $('<a>').attr('href', o['pageUrlPk']);
			$a.append($i);
			$a.append($span);
			$li.append($a);
			$list.append($li);
		});
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchSchoolEnrollmentVals($formFilters, success, error);
}

function suggestSchoolEnrollmentYearKey(filters, $list, pk = null, attribute=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-calendar-check ');
			var $span = $('<span>').attr('class', '').text(o['yearCompleteName']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk'] + '#' + pk);
			$a.append($i);
			$a.append($span);
			var val = o['enrollmentKeys'];
			var checked = pk == null ? false : Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_yearKey_' + pk + '_enrollmentKeys_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valueYearKey w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_yearKey_" + pk + "_enrollmentKeys_" + o['pk'] + "'); patchSchoolEnrollmentVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'set' : 'remove') + 'YearKey']: \"" + o['pk'] + "\" } ); ");
				$input.attr('onclick', 'removeGlow($(this)); ');
			}
			$input.attr('type', 'checkbox');
			if(checked)
				$input.attr('checked', 'checked');
			var $li = $('<li>');
			if(attribute)
				$li.append($input);
			$li.append($a);
			$list.append($li);
		});
		var focusId = $('#SchoolEnrollmentForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchSchoolYearVals(filters, success, error);
}

function suggestSchoolEnrollmentBlockKeys(filters, $list, pk = null, attribute=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-bell ');
			var $span = $('<span>').attr('class', '').text(o['blockCompleteName']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk'] + '#' + pk);
			$a.append($i);
			$a.append($span);
			var val = o['enrollmentKeys'];
			var checked = pk == null ? false : Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_blockKeys_' + pk + '_enrollmentKeys_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valueBlockKeys w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_blockKeys_" + pk + "_enrollmentKeys_" + o['pk'] + "'); patchSchoolEnrollmentVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'add' : 'remove') + 'BlockKeys']: \"" + o['pk'] + "\" } ); ");
				$input.attr('onclick', 'removeGlow($(this)); ');
			}
			$input.attr('type', 'checkbox');
			if(checked)
				$input.attr('checked', 'checked');
			var $li = $('<li>');
			if(attribute)
				$li.append($input);
			$li.append($a);
			$list.append($li);
		});
		var focusId = $('#SchoolEnrollmentForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchSchoolBlockVals(filters, success, error);
}

function suggestSchoolEnrollmentChildKey(filters, $list, pk = null, attribute=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-child ');
			var $span = $('<span>').attr('class', '').text(o['childCompleteName']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk'] + '#' + pk);
			$a.append($i);
			$a.append($span);
			var val = o['enrollmentKeys'];
			var checked = pk == null ? false : Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_childKey_' + pk + '_enrollmentKeys_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valueChildKey w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_childKey_" + pk + "_enrollmentKeys_" + o['pk'] + "'); patchSchoolEnrollmentVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'set' : 'remove') + 'ChildKey']: \"" + o['pk'] + "\" } ); ");
				$input.attr('onclick', 'removeGlow($(this)); ');
			}
			$input.attr('type', 'checkbox');
			if(checked)
				$input.attr('checked', 'checked');
			var $li = $('<li>');
			if(attribute)
				$li.append($input);
			$li.append($a);
			$list.append($li);
		});
		var focusId = $('#SchoolEnrollmentForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchSchoolChildVals(filters, success, error);
}

function suggestSchoolEnrollmentMomKeys(filters, $list, pk = null, attribute=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-female ');
			var $span = $('<span>').attr('class', '').text(o['momCompleteName']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk'] + '#' + pk);
			$a.append($i);
			$a.append($span);
			var val = o['enrollmentKeys'];
			var checked = pk == null ? false : Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_momKeys_' + pk + '_enrollmentKeys_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valueMomKeys w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_momKeys_" + pk + "_enrollmentKeys_" + o['pk'] + "'); patchSchoolEnrollmentVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'add' : 'remove') + 'MomKeys']: \"" + o['pk'] + "\" } ); ");
				$input.attr('onclick', 'removeGlow($(this)); ');
			}
			$input.attr('type', 'checkbox');
			if(checked)
				$input.attr('checked', 'checked');
			var $li = $('<li>');
			if(attribute)
				$li.append($input);
			$li.append($a);
			$list.append($li);
		});
		var focusId = $('#SchoolEnrollmentForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchSchoolMomVals(filters, success, error);
}

function suggestSchoolEnrollmentDadKeys(filters, $list, pk = null, attribute=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-male ');
			var $span = $('<span>').attr('class', '').text(o['dadCompleteName']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk'] + '#' + pk);
			$a.append($i);
			$a.append($span);
			var val = o['enrollmentKeys'];
			var checked = pk == null ? false : Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_dadKeys_' + pk + '_enrollmentKeys_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valueDadKeys w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_dadKeys_" + pk + "_enrollmentKeys_" + o['pk'] + "'); patchSchoolEnrollmentVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'add' : 'remove') + 'DadKeys']: \"" + o['pk'] + "\" } ); ");
				$input.attr('onclick', 'removeGlow($(this)); ');
			}
			$input.attr('type', 'checkbox');
			if(checked)
				$input.attr('checked', 'checked');
			var $li = $('<li>');
			if(attribute)
				$li.append($input);
			$li.append($a);
			$list.append($li);
		});
		var focusId = $('#SchoolEnrollmentForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchSchoolDadVals(filters, success, error);
}

function suggestSchoolEnrollmentGuardianKeys(filters, $list, pk = null, attribute=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-phone ');
			var $span = $('<span>').attr('class', '').text(o['guardianCompleteName']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk'] + '#' + pk);
			$a.append($i);
			$a.append($span);
			var val = o['enrollmentKeys'];
			var checked = pk == null ? false : Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_guardianKeys_' + pk + '_enrollmentKeys_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valueGuardianKeys w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_guardianKeys_" + pk + "_enrollmentKeys_" + o['pk'] + "'); patchSchoolEnrollmentVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'add' : 'remove') + 'GuardianKeys']: \"" + o['pk'] + "\" } ); ");
				$input.attr('onclick', 'removeGlow($(this)); ');
			}
			$input.attr('type', 'checkbox');
			if(checked)
				$input.attr('checked', 'checked');
			var $li = $('<li>');
			if(attribute)
				$li.append($input);
			$li.append($a);
			$list.append($li);
		});
		var focusId = $('#SchoolEnrollmentForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchSchoolGuardianVals(filters, success, error);
}

function suggestSchoolEnrollmentPaymentKeys(filters, $list, pk = null, attribute=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-search-dollar ');
			var $span = $('<span>').attr('class', '').text(o['paymentCompleteName']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk'] + '#' + pk);
			$a.append($i);
			$a.append($span);
			var val = o['enrollmentKey'];
			var checked = pk == null ? false : Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_paymentKeys_' + pk + '_enrollmentKey_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valuePaymentKeys w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_paymentKeys_" + pk + "_enrollmentKey_" + o['pk'] + "'); patchSchoolEnrollmentVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'add' : 'remove') + 'PaymentKeys']: \"" + o['pk'] + "\" } ); ");
				$input.attr('onclick', 'removeGlow($(this)); ');
			}
			$input.attr('type', 'checkbox');
			if(checked)
				$input.attr('checked', 'checked');
			var $li = $('<li>');
			if(attribute)
				$li.append($input);
			$li.append($a);
			$list.append($li);
		});
		var focusId = $('#SchoolEnrollmentForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchSchoolPaymentVals(filters, success, error);
}

function suggestSchoolEnrollmentUserKeys(filters, $list, pk = null, attribute=true) {
	success = function( data, textStatus, jQxhr ) {
		$list.empty();
		$.each(data['list'], function(i, o) {
			var $i = $('<i>').attr('class', 'fa fa-user-cog ');
			var $span = $('<span>').attr('class', '').text(o['objectTitle']);
			var $a = $('<a>').attr('id', o['pk']).attr('href', o['pageUrlPk'] + '#' + pk);
			$a.append($i);
			$a.append($span);
			var val = o['enrollmentKeys'];
			var checked = pk == null ? false : Array.isArray(val) ? val.includes(pk.toString()) : val == pk;
			var $input = $('<input>');
			$input.attr('id', 'GET_userKeys_' + pk + '_enrollmentKeys_' + o['pk']);
			$input.attr('value', o['pk']);
			$input.attr('class', 'valueUserKeys w3-check ');
			if(pk != null) {
				$input.attr('onchange', "var $input = $('#GET_userKeys_" + pk + "_enrollmentKeys_" + o['pk'] + "'); patchSchoolEnrollmentVals([{ name: 'fq', value: 'pk:" + pk + "' }], { [($input.prop('checked') ? 'add' : 'remove') + 'UserKeys']: \"" + o['pk'] + "\" } ); ");
				$input.attr('onclick', 'removeGlow($(this)); ');
			}
			$input.attr('type', 'checkbox');
			if(checked)
				$input.attr('checked', 'checked');
			var $li = $('<li>');
			if(attribute)
				$li.append($input);
			$li.append($a);
			$list.append($li);
		});
		var focusId = $('#SchoolEnrollmentForm :input[name="focusId"]').val();
		if(focusId)
			$('#' + focusId).parent().next().find('input').focus();
	};
	error = function( jqXhr, textStatus, errorThrown ) {};
	searchSiteUserVals(filters, success, error);
}

// AdminPATCH //

async function adminpatchSchoolEnrollment($formFilters, $formValues, pk, success, error) {
	var filters = adminpatchSchoolEnrollmentFilters($formFilters);

	var vals = {};

	var valuePk = $formValues.find('.valuePk').val();
	var removePk = $formValues.find('.removePk').val() === 'true';
	var setPk = removePk ? null : $formValues.find('.setPk').val();
	var addPk = $formValues.find('.addPk').val();
	if(removePk || setPk != null && setPk !== '')
		vals['setPk'] = setPk;
	if(addPk != null && addPk !== '')
		vals['addPk'] = addPk;
	var removePk = $formValues.find('.removePk').val();
	if(removePk != null && removePk !== '')
		vals['removePk'] = removePk;

	var valueCreated = $formValues.find('.valueCreated').val();
	var removeCreated = $formValues.find('.removeCreated').val() === 'true';
	var setCreated = removeCreated ? null : $formValues.find('.setCreated').val();
	var addCreated = $formValues.find('.addCreated').val();
	if(removeCreated || setCreated != null && setCreated !== '')
		vals['setCreated'] = setCreated;
	if(addCreated != null && addCreated !== '')
		vals['addCreated'] = addCreated;
	var removeCreated = $formValues.find('.removeCreated').val();
	if(removeCreated != null && removeCreated !== '')
		vals['removeCreated'] = removeCreated;

	var valueModified = $formValues.find('.valueModified').val();
	var removeModified = $formValues.find('.removeModified').val() === 'true';
	var setModified = removeModified ? null : $formValues.find('.setModified').val();
	var addModified = $formValues.find('.addModified').val();
	if(removeModified || setModified != null && setModified !== '')
		vals['setModified'] = setModified;
	if(addModified != null && addModified !== '')
		vals['addModified'] = addModified;
	var removeModified = $formValues.find('.removeModified').val();
	if(removeModified != null && removeModified !== '')
		vals['removeModified'] = removeModified;

	var valueObjectId = $formValues.find('.valueObjectId').val();
	var removeObjectId = $formValues.find('.removeObjectId').val() === 'true';
	var setObjectId = removeObjectId ? null : $formValues.find('.setObjectId').val();
	var addObjectId = $formValues.find('.addObjectId').val();
	if(removeObjectId || setObjectId != null && setObjectId !== '')
		vals['setObjectId'] = setObjectId;
	if(addObjectId != null && addObjectId !== '')
		vals['addObjectId'] = addObjectId;
	var removeObjectId = $formValues.find('.removeObjectId').val();
	if(removeObjectId != null && removeObjectId !== '')
		vals['removeObjectId'] = removeObjectId;

	var valueArchived = $formValues.find('.valueArchived').prop('checked');
	var removeArchived = $formValues.find('.removeArchived').val() === 'true';
	var valueArchivedSelectVal = $formValues.find('select.setArchived').val();
	var valueArchived = null;
	if(valueArchivedSelectVal != null && valueArchivedSelectVal !== '')
		valueArchived = valueArchivedSelectVal == 'true';
	var setArchived = removeArchived ? null : valueArchived;
	var addArchived = $formValues.find('.addArchived').prop('checked');
	if(removeArchived || setArchived != null && setArchived !== '')
		vals['setArchived'] = setArchived;
	if(addArchived != null && addArchived !== '')
		vals['addArchived'] = addArchived;
	var removeArchived = $formValues.find('.removeArchived').prop('checked');
	if(removeArchived != null && removeArchived !== '')
		vals['removeArchived'] = removeArchived;

	var valueDeleted = $formValues.find('.valueDeleted').prop('checked');
	var removeDeleted = $formValues.find('.removeDeleted').val() === 'true';
	var valueDeletedSelectVal = $formValues.find('select.setDeleted').val();
	var valueDeleted = null;
	if(valueDeletedSelectVal != null && valueDeletedSelectVal !== '')
		valueDeleted = valueDeletedSelectVal == 'true';
	var setDeleted = removeDeleted ? null : valueDeleted;
	var addDeleted = $formValues.find('.addDeleted').prop('checked');
	if(removeDeleted || setDeleted != null && setDeleted !== '')
		vals['setDeleted'] = setDeleted;
	if(addDeleted != null && addDeleted !== '')
		vals['addDeleted'] = addDeleted;
	var removeDeleted = $formValues.find('.removeDeleted').prop('checked');
	if(removeDeleted != null && removeDeleted !== '')
		vals['removeDeleted'] = removeDeleted;

	var valuePhoto = $formValues.find('.valuePhoto').val();
	var removePhoto = $formValues.find('.removePhoto').val() === 'true';
	var setPhoto = removePhoto ? null : $formValues.find('.setPhoto').val();
	var addPhoto = $formValues.find('.addPhoto').val();
	if(removePhoto || setPhoto != null && setPhoto !== '')
		vals['setPhoto'] = setPhoto;
	if(addPhoto != null && addPhoto !== '')
		vals['addPhoto'] = addPhoto;
	var removePhoto = $formValues.find('.removePhoto').val();
	if(removePhoto != null && removePhoto !== '')
		vals['removePhoto'] = removePhoto;

	var valueEnrollmentGroupName = $formValues.find('.valueEnrollmentGroupName').val();
	var removeEnrollmentGroupName = $formValues.find('.removeEnrollmentGroupName').val() === 'true';
	var setEnrollmentGroupName = removeEnrollmentGroupName ? null : $formValues.find('.setEnrollmentGroupName').val();
	var addEnrollmentGroupName = $formValues.find('.addEnrollmentGroupName').val();
	if(removeEnrollmentGroupName || setEnrollmentGroupName != null && setEnrollmentGroupName !== '')
		vals['setEnrollmentGroupName'] = setEnrollmentGroupName;
	if(addEnrollmentGroupName != null && addEnrollmentGroupName !== '')
		vals['addEnrollmentGroupName'] = addEnrollmentGroupName;
	var removeEnrollmentGroupName = $formValues.find('.removeEnrollmentGroupName').val();
	if(removeEnrollmentGroupName != null && removeEnrollmentGroupName !== '')
		vals['removeEnrollmentGroupName'] = removeEnrollmentGroupName;

	var valueCustomerProfileId = $formValues.find('.valueCustomerProfileId').val();
	var removeCustomerProfileId = $formValues.find('.removeCustomerProfileId').val() === 'true';
	var setCustomerProfileId = removeCustomerProfileId ? null : $formValues.find('.setCustomerProfileId').val();
	var addCustomerProfileId = $formValues.find('.addCustomerProfileId').val();
	if(removeCustomerProfileId || setCustomerProfileId != null && setCustomerProfileId !== '')
		vals['setCustomerProfileId'] = setCustomerProfileId;
	if(addCustomerProfileId != null && addCustomerProfileId !== '')
		vals['addCustomerProfileId'] = addCustomerProfileId;
	var removeCustomerProfileId = $formValues.find('.removeCustomerProfileId').val();
	if(removeCustomerProfileId != null && removeCustomerProfileId !== '')
		vals['removeCustomerProfileId'] = removeCustomerProfileId;

	var valueEnrollmentPaymentComplete = $formValues.find('.valueEnrollmentPaymentComplete').prop('checked');
	var removeEnrollmentPaymentComplete = $formValues.find('.removeEnrollmentPaymentComplete').val() === 'true';
	var valueEnrollmentPaymentCompleteSelectVal = $formValues.find('select.setEnrollmentPaymentComplete').val();
	var valueEnrollmentPaymentComplete = null;
	if(valueEnrollmentPaymentCompleteSelectVal != null && valueEnrollmentPaymentCompleteSelectVal !== '')
		valueEnrollmentPaymentComplete = valueEnrollmentPaymentCompleteSelectVal == 'true';
	var setEnrollmentPaymentComplete = removeEnrollmentPaymentComplete ? null : valueEnrollmentPaymentComplete;
	var addEnrollmentPaymentComplete = $formValues.find('.addEnrollmentPaymentComplete').prop('checked');
	if(removeEnrollmentPaymentComplete || setEnrollmentPaymentComplete != null && setEnrollmentPaymentComplete !== '')
		vals['setEnrollmentPaymentComplete'] = setEnrollmentPaymentComplete;
	if(addEnrollmentPaymentComplete != null && addEnrollmentPaymentComplete !== '')
		vals['addEnrollmentPaymentComplete'] = addEnrollmentPaymentComplete;
	var removeEnrollmentPaymentComplete = $formValues.find('.removeEnrollmentPaymentComplete').prop('checked');
	if(removeEnrollmentPaymentComplete != null && removeEnrollmentPaymentComplete !== '')
		vals['removeEnrollmentPaymentComplete'] = removeEnrollmentPaymentComplete;

	var valueChildPottyTrained = $formValues.find('.valueChildPottyTrained').prop('checked');
	var removeChildPottyTrained = $formValues.find('.removeChildPottyTrained').val() === 'true';
	var valueChildPottyTrainedSelectVal = $formValues.find('select.setChildPottyTrained').val();
	var valueChildPottyTrained = null;
	if(valueChildPottyTrainedSelectVal != null && valueChildPottyTrainedSelectVal !== '')
		valueChildPottyTrained = valueChildPottyTrainedSelectVal == 'true';
	var setChildPottyTrained = removeChildPottyTrained ? null : valueChildPottyTrained;
	var addChildPottyTrained = $formValues.find('.addChildPottyTrained').prop('checked');
	if(removeChildPottyTrained || setChildPottyTrained != null && setChildPottyTrained !== '')
		vals['setChildPottyTrained'] = setChildPottyTrained;
	if(addChildPottyTrained != null && addChildPottyTrained !== '')
		vals['addChildPottyTrained'] = addChildPottyTrained;
	var removeChildPottyTrained = $formValues.find('.removeChildPottyTrained').prop('checked');
	if(removeChildPottyTrained != null && removeChildPottyTrained !== '')
		vals['removeChildPottyTrained'] = removeChildPottyTrained;

	var valueEnrollmentPaymentEachMonth = $formValues.find('.valueEnrollmentPaymentEachMonth').prop('checked');
	var removeEnrollmentPaymentEachMonth = $formValues.find('.removeEnrollmentPaymentEachMonth').val() === 'true';
	var valueEnrollmentPaymentEachMonthSelectVal = $formValues.find('select.setEnrollmentPaymentEachMonth').val();
	var valueEnrollmentPaymentEachMonth = null;
	if(valueEnrollmentPaymentEachMonthSelectVal != null && valueEnrollmentPaymentEachMonthSelectVal !== '')
		valueEnrollmentPaymentEachMonth = valueEnrollmentPaymentEachMonthSelectVal == 'true';
	var setEnrollmentPaymentEachMonth = removeEnrollmentPaymentEachMonth ? null : valueEnrollmentPaymentEachMonth;
	var addEnrollmentPaymentEachMonth = $formValues.find('.addEnrollmentPaymentEachMonth').prop('checked');
	if(removeEnrollmentPaymentEachMonth || setEnrollmentPaymentEachMonth != null && setEnrollmentPaymentEachMonth !== '')
		vals['setEnrollmentPaymentEachMonth'] = setEnrollmentPaymentEachMonth;
	if(addEnrollmentPaymentEachMonth != null && addEnrollmentPaymentEachMonth !== '')
		vals['addEnrollmentPaymentEachMonth'] = addEnrollmentPaymentEachMonth;
	var removeEnrollmentPaymentEachMonth = $formValues.find('.removeEnrollmentPaymentEachMonth').prop('checked');
	if(removeEnrollmentPaymentEachMonth != null && removeEnrollmentPaymentEachMonth !== '')
		vals['removeEnrollmentPaymentEachMonth'] = removeEnrollmentPaymentEachMonth;

	var valueEnrollmentImmunizations = $formValues.find('.valueEnrollmentImmunizations').prop('checked');
	var removeEnrollmentImmunizations = $formValues.find('.removeEnrollmentImmunizations').val() === 'true';
	var valueEnrollmentImmunizationsSelectVal = $formValues.find('select.setEnrollmentImmunizations').val();
	var valueEnrollmentImmunizations = null;
	if(valueEnrollmentImmunizationsSelectVal != null && valueEnrollmentImmunizationsSelectVal !== '')
		valueEnrollmentImmunizations = valueEnrollmentImmunizationsSelectVal == 'true';
	var setEnrollmentImmunizations = removeEnrollmentImmunizations ? null : valueEnrollmentImmunizations;
	var addEnrollmentImmunizations = $formValues.find('.addEnrollmentImmunizations').prop('checked');
	if(removeEnrollmentImmunizations || setEnrollmentImmunizations != null && setEnrollmentImmunizations !== '')
		vals['setEnrollmentImmunizations'] = setEnrollmentImmunizations;
	if(addEnrollmentImmunizations != null && addEnrollmentImmunizations !== '')
		vals['addEnrollmentImmunizations'] = addEnrollmentImmunizations;
	var removeEnrollmentImmunizations = $formValues.find('.removeEnrollmentImmunizations').prop('checked');
	if(removeEnrollmentImmunizations != null && removeEnrollmentImmunizations !== '')
		vals['removeEnrollmentImmunizations'] = removeEnrollmentImmunizations;

	var valueEnrollmentApproved = $formValues.find('.valueEnrollmentApproved').prop('checked');
	var removeEnrollmentApproved = $formValues.find('.removeEnrollmentApproved').val() === 'true';
	var valueEnrollmentApprovedSelectVal = $formValues.find('select.setEnrollmentApproved').val();
	var valueEnrollmentApproved = null;
	if(valueEnrollmentApprovedSelectVal != null && valueEnrollmentApprovedSelectVal !== '')
		valueEnrollmentApproved = valueEnrollmentApprovedSelectVal == 'true';
	var setEnrollmentApproved = removeEnrollmentApproved ? null : valueEnrollmentApproved;
	var addEnrollmentApproved = $formValues.find('.addEnrollmentApproved').prop('checked');
	if(removeEnrollmentApproved || setEnrollmentApproved != null && setEnrollmentApproved !== '')
		vals['setEnrollmentApproved'] = setEnrollmentApproved;
	if(addEnrollmentApproved != null && addEnrollmentApproved !== '')
		vals['addEnrollmentApproved'] = addEnrollmentApproved;
	var removeEnrollmentApproved = $formValues.find('.removeEnrollmentApproved').prop('checked');
	if(removeEnrollmentApproved != null && removeEnrollmentApproved !== '')
		vals['removeEnrollmentApproved'] = removeEnrollmentApproved;

	var valueFamilyMarried = $formValues.find('.valueFamilyMarried').prop('checked');
	var removeFamilyMarried = $formValues.find('.removeFamilyMarried').val() === 'true';
	var valueFamilyMarriedSelectVal = $formValues.find('select.setFamilyMarried').val();
	var valueFamilyMarried = null;
	if(valueFamilyMarriedSelectVal != null && valueFamilyMarriedSelectVal !== '')
		valueFamilyMarried = valueFamilyMarriedSelectVal == 'true';
	var setFamilyMarried = removeFamilyMarried ? null : valueFamilyMarried;
	var addFamilyMarried = $formValues.find('.addFamilyMarried').prop('checked');
	if(removeFamilyMarried || setFamilyMarried != null && setFamilyMarried !== '')
		vals['setFamilyMarried'] = setFamilyMarried;
	if(addFamilyMarried != null && addFamilyMarried !== '')
		vals['addFamilyMarried'] = addFamilyMarried;
	var removeFamilyMarried = $formValues.find('.removeFamilyMarried').prop('checked');
	if(removeFamilyMarried != null && removeFamilyMarried !== '')
		vals['removeFamilyMarried'] = removeFamilyMarried;

	var valueFamilySeparated = $formValues.find('.valueFamilySeparated').prop('checked');
	var removeFamilySeparated = $formValues.find('.removeFamilySeparated').val() === 'true';
	var valueFamilySeparatedSelectVal = $formValues.find('select.setFamilySeparated').val();
	var valueFamilySeparated = null;
	if(valueFamilySeparatedSelectVal != null && valueFamilySeparatedSelectVal !== '')
		valueFamilySeparated = valueFamilySeparatedSelectVal == 'true';
	var setFamilySeparated = removeFamilySeparated ? null : valueFamilySeparated;
	var addFamilySeparated = $formValues.find('.addFamilySeparated').prop('checked');
	if(removeFamilySeparated || setFamilySeparated != null && setFamilySeparated !== '')
		vals['setFamilySeparated'] = setFamilySeparated;
	if(addFamilySeparated != null && addFamilySeparated !== '')
		vals['addFamilySeparated'] = addFamilySeparated;
	var removeFamilySeparated = $formValues.find('.removeFamilySeparated').prop('checked');
	if(removeFamilySeparated != null && removeFamilySeparated !== '')
		vals['removeFamilySeparated'] = removeFamilySeparated;

	var valueFamilyDivorced = $formValues.find('.valueFamilyDivorced').prop('checked');
	var removeFamilyDivorced = $formValues.find('.removeFamilyDivorced').val() === 'true';
	var valueFamilyDivorcedSelectVal = $formValues.find('select.setFamilyDivorced').val();
	var valueFamilyDivorced = null;
	if(valueFamilyDivorcedSelectVal != null && valueFamilyDivorcedSelectVal !== '')
		valueFamilyDivorced = valueFamilyDivorcedSelectVal == 'true';
	var setFamilyDivorced = removeFamilyDivorced ? null : valueFamilyDivorced;
	var addFamilyDivorced = $formValues.find('.addFamilyDivorced').prop('checked');
	if(removeFamilyDivorced || setFamilyDivorced != null && setFamilyDivorced !== '')
		vals['setFamilyDivorced'] = setFamilyDivorced;
	if(addFamilyDivorced != null && addFamilyDivorced !== '')
		vals['addFamilyDivorced'] = addFamilyDivorced;
	var removeFamilyDivorced = $formValues.find('.removeFamilyDivorced').prop('checked');
	if(removeFamilyDivorced != null && removeFamilyDivorced !== '')
		vals['removeFamilyDivorced'] = removeFamilyDivorced;

	var valueFamilyAddress = $formValues.find('.valueFamilyAddress').val();
	var removeFamilyAddress = $formValues.find('.removeFamilyAddress').val() === 'true';
	var setFamilyAddress = removeFamilyAddress ? null : $formValues.find('.setFamilyAddress').val();
	var addFamilyAddress = $formValues.find('.addFamilyAddress').val();
	if(removeFamilyAddress || setFamilyAddress != null && setFamilyAddress !== '')
		vals['setFamilyAddress'] = setFamilyAddress;
	if(addFamilyAddress != null && addFamilyAddress !== '')
		vals['addFamilyAddress'] = addFamilyAddress;
	var removeFamilyAddress = $formValues.find('.removeFamilyAddress').val();
	if(removeFamilyAddress != null && removeFamilyAddress !== '')
		vals['removeFamilyAddress'] = removeFamilyAddress;

	var valueEnrollmentSpecialConsiderations = $formValues.find('.valueEnrollmentSpecialConsiderations').val();
	var removeEnrollmentSpecialConsiderations = $formValues.find('.removeEnrollmentSpecialConsiderations').val() === 'true';
	var setEnrollmentSpecialConsiderations = removeEnrollmentSpecialConsiderations ? null : $formValues.find('.setEnrollmentSpecialConsiderations').val();
	var addEnrollmentSpecialConsiderations = $formValues.find('.addEnrollmentSpecialConsiderations').val();
	if(removeEnrollmentSpecialConsiderations || setEnrollmentSpecialConsiderations != null && setEnrollmentSpecialConsiderations !== '')
		vals['setEnrollmentSpecialConsiderations'] = setEnrollmentSpecialConsiderations;
	if(addEnrollmentSpecialConsiderations != null && addEnrollmentSpecialConsiderations !== '')
		vals['addEnrollmentSpecialConsiderations'] = addEnrollmentSpecialConsiderations;
	var removeEnrollmentSpecialConsiderations = $formValues.find('.removeEnrollmentSpecialConsiderations').val();
	if(removeEnrollmentSpecialConsiderations != null && removeEnrollmentSpecialConsiderations !== '')
		vals['removeEnrollmentSpecialConsiderations'] = removeEnrollmentSpecialConsiderations;

	var valueChildMedicalConditions = $formValues.find('.valueChildMedicalConditions').val();
	var removeChildMedicalConditions = $formValues.find('.removeChildMedicalConditions').val() === 'true';
	var setChildMedicalConditions = removeChildMedicalConditions ? null : $formValues.find('.setChildMedicalConditions').val();
	var addChildMedicalConditions = $formValues.find('.addChildMedicalConditions').val();
	if(removeChildMedicalConditions || setChildMedicalConditions != null && setChildMedicalConditions !== '')
		vals['setChildMedicalConditions'] = setChildMedicalConditions;
	if(addChildMedicalConditions != null && addChildMedicalConditions !== '')
		vals['addChildMedicalConditions'] = addChildMedicalConditions;
	var removeChildMedicalConditions = $formValues.find('.removeChildMedicalConditions').val();
	if(removeChildMedicalConditions != null && removeChildMedicalConditions !== '')
		vals['removeChildMedicalConditions'] = removeChildMedicalConditions;

	var valueChildPreviousSchoolsAttended = $formValues.find('.valueChildPreviousSchoolsAttended').val();
	var removeChildPreviousSchoolsAttended = $formValues.find('.removeChildPreviousSchoolsAttended').val() === 'true';
	var setChildPreviousSchoolsAttended = removeChildPreviousSchoolsAttended ? null : $formValues.find('.setChildPreviousSchoolsAttended').val();
	var addChildPreviousSchoolsAttended = $formValues.find('.addChildPreviousSchoolsAttended').val();
	if(removeChildPreviousSchoolsAttended || setChildPreviousSchoolsAttended != null && setChildPreviousSchoolsAttended !== '')
		vals['setChildPreviousSchoolsAttended'] = setChildPreviousSchoolsAttended;
	if(addChildPreviousSchoolsAttended != null && addChildPreviousSchoolsAttended !== '')
		vals['addChildPreviousSchoolsAttended'] = addChildPreviousSchoolsAttended;
	var removeChildPreviousSchoolsAttended = $formValues.find('.removeChildPreviousSchoolsAttended').val();
	if(removeChildPreviousSchoolsAttended != null && removeChildPreviousSchoolsAttended !== '')
		vals['removeChildPreviousSchoolsAttended'] = removeChildPreviousSchoolsAttended;

	var valueFamilyHowDoYouKnowTheSchool = $formValues.find('.valueFamilyHowDoYouKnowTheSchool').val();
	var removeFamilyHowDoYouKnowTheSchool = $formValues.find('.removeFamilyHowDoYouKnowTheSchool').val() === 'true';
	var setFamilyHowDoYouKnowTheSchool = removeFamilyHowDoYouKnowTheSchool ? null : $formValues.find('.setFamilyHowDoYouKnowTheSchool').val();
	var addFamilyHowDoYouKnowTheSchool = $formValues.find('.addFamilyHowDoYouKnowTheSchool').val();
	if(removeFamilyHowDoYouKnowTheSchool || setFamilyHowDoYouKnowTheSchool != null && setFamilyHowDoYouKnowTheSchool !== '')
		vals['setFamilyHowDoYouKnowTheSchool'] = setFamilyHowDoYouKnowTheSchool;
	if(addFamilyHowDoYouKnowTheSchool != null && addFamilyHowDoYouKnowTheSchool !== '')
		vals['addFamilyHowDoYouKnowTheSchool'] = addFamilyHowDoYouKnowTheSchool;
	var removeFamilyHowDoYouKnowTheSchool = $formValues.find('.removeFamilyHowDoYouKnowTheSchool').val();
	if(removeFamilyHowDoYouKnowTheSchool != null && removeFamilyHowDoYouKnowTheSchool !== '')
		vals['removeFamilyHowDoYouKnowTheSchool'] = removeFamilyHowDoYouKnowTheSchool;

	var valueChildDescription = $formValues.find('.valueChildDescription').val();
	var removeChildDescription = $formValues.find('.removeChildDescription').val() === 'true';
	var setChildDescription = removeChildDescription ? null : $formValues.find('.setChildDescription').val();
	var addChildDescription = $formValues.find('.addChildDescription').val();
	if(removeChildDescription || setChildDescription != null && setChildDescription !== '')
		vals['setChildDescription'] = setChildDescription;
	if(addChildDescription != null && addChildDescription !== '')
		vals['addChildDescription'] = addChildDescription;
	var removeChildDescription = $formValues.find('.removeChildDescription').val();
	if(removeChildDescription != null && removeChildDescription !== '')
		vals['removeChildDescription'] = removeChildDescription;

	var valueChildObjectives = $formValues.find('.valueChildObjectives').val();
	var removeChildObjectives = $formValues.find('.removeChildObjectives').val() === 'true';
	var setChildObjectives = removeChildObjectives ? null : $formValues.find('.setChildObjectives').val();
	var addChildObjectives = $formValues.find('.addChildObjectives').val();
	if(removeChildObjectives || setChildObjectives != null && setChildObjectives !== '')
		vals['setChildObjectives'] = setChildObjectives;
	if(addChildObjectives != null && addChildObjectives !== '')
		vals['addChildObjectives'] = addChildObjectives;
	var removeChildObjectives = $formValues.find('.removeChildObjectives').val();
	if(removeChildObjectives != null && removeChildObjectives !== '')
		vals['removeChildObjectives'] = removeChildObjectives;

	var valueYearKey = $formValues.find('input.valueYearKey:checked').val();
	if(valueYearKey != null && valueYearKey !== '')
		vals['setYearKey'] = valueYearKey;

	var valueBlockKeys = $formValues.find('input.valueBlockKeys:checked').val();
	if(valueBlockKeys != null && valueBlockKeys !== '')
		vals['addBlockKeys'] = valueBlockKeys;

	var valueChildKey = $formValues.find('input.valueChildKey:checked').val();
	if(valueChildKey != null && valueChildKey !== '')
		vals['setChildKey'] = valueChildKey;

	var valueGuardianKeys = $formValues.find('input.valueGuardianKeys:checked').val();
	if(valueGuardianKeys != null && valueGuardianKeys !== '')
		vals['addGuardianKeys'] = valueGuardianKeys;

	var valueMomKeys = $formValues.find('input.valueMomKeys:checked').val();
	if(valueMomKeys != null && valueMomKeys !== '')
		vals['addMomKeys'] = valueMomKeys;

	var valueDadKeys = $formValues.find('input.valueDadKeys:checked').val();
	if(valueDadKeys != null && valueDadKeys !== '')
		vals['addDadKeys'] = valueDadKeys;

	var valueUserKeys = $formValues.find('input.valueUserKeys:checked').val();
	if(valueUserKeys != null && valueUserKeys !== '')
		vals['addUserKeys'] = valueUserKeys;

	var valuePaymentKeys = $formValues.find('input.valuePaymentKeys:checked').val();
	if(valuePaymentKeys != null && valuePaymentKeys !== '')
		vals['addPaymentKeys'] = valuePaymentKeys;

	var valueInheritPk = $formValues.find('.valueInheritPk').val();
	var removeInheritPk = $formValues.find('.removeInheritPk').val() === 'true';
	var setInheritPk = removeInheritPk ? null : $formValues.find('.setInheritPk').val();
	var addInheritPk = $formValues.find('.addInheritPk').val();
	if(removeInheritPk || setInheritPk != null && setInheritPk !== '')
		vals['setInheritPk'] = setInheritPk;
	if(addInheritPk != null && addInheritPk !== '')
		vals['addInheritPk'] = addInheritPk;
	var removeInheritPk = $formValues.find('.removeInheritPk').val();
	if(removeInheritPk != null && removeInheritPk !== '')
		vals['removeInheritPk'] = removeInheritPk;

	var valueSessionId = $formValues.find('.valueSessionId').val();
	var removeSessionId = $formValues.find('.removeSessionId').val() === 'true';
	var setSessionId = removeSessionId ? null : $formValues.find('.setSessionId').val();
	var addSessionId = $formValues.find('.addSessionId').val();
	if(removeSessionId || setSessionId != null && setSessionId !== '')
		vals['setSessionId'] = setSessionId;
	if(addSessionId != null && addSessionId !== '')
		vals['addSessionId'] = addSessionId;
	var removeSessionId = $formValues.find('.removeSessionId').val();
	if(removeSessionId != null && removeSessionId !== '')
		vals['removeSessionId'] = removeSessionId;

	var valueUserId = $formValues.find('.valueUserId').val();
	var removeUserId = $formValues.find('.removeUserId').val() === 'true';
	var setUserId = removeUserId ? null : $formValues.find('.setUserId').val();
	var addUserId = $formValues.find('.addUserId').val();
	if(removeUserId || setUserId != null && setUserId !== '')
		vals['setUserId'] = setUserId;
	if(addUserId != null && addUserId !== '')
		vals['addUserId'] = addUserId;
	var removeUserId = $formValues.find('.removeUserId').val();
	if(removeUserId != null && removeUserId !== '')
		vals['removeUserId'] = removeUserId;

	var valueUserKey = $formValues.find('.valueUserKey').val();
	var removeUserKey = $formValues.find('.removeUserKey').val() === 'true';
	var setUserKey = removeUserKey ? null : $formValues.find('.setUserKey').val();
	var addUserKey = $formValues.find('.addUserKey').val();
	if(removeUserKey || setUserKey != null && setUserKey !== '')
		vals['setUserKey'] = setUserKey;
	if(addUserKey != null && addUserKey !== '')
		vals['addUserKey'] = addUserKey;
	var removeUserKey = $formValues.find('.removeUserKey').val();
	if(removeUserKey != null && removeUserKey !== '')
		vals['removeUserKey'] = removeUserKey;

	var valueObjectTitle = $formValues.find('.valueObjectTitle').val();
	var removeObjectTitle = $formValues.find('.removeObjectTitle').val() === 'true';
	var setObjectTitle = removeObjectTitle ? null : $formValues.find('.setObjectTitle').val();
	var addObjectTitle = $formValues.find('.addObjectTitle').val();
	if(removeObjectTitle || setObjectTitle != null && setObjectTitle !== '')
		vals['setObjectTitle'] = setObjectTitle;
	if(addObjectTitle != null && addObjectTitle !== '')
		vals['addObjectTitle'] = addObjectTitle;
	var removeObjectTitle = $formValues.find('.removeObjectTitle').val();
	if(removeObjectTitle != null && removeObjectTitle !== '')
		vals['removeObjectTitle'] = removeObjectTitle;

	var valueChildCompleteName = $formValues.find('.valueChildCompleteName').val();
	var removeChildCompleteName = $formValues.find('.removeChildCompleteName').val() === 'true';
	var setChildCompleteName = removeChildCompleteName ? null : $formValues.find('.setChildCompleteName').val();
	var addChildCompleteName = $formValues.find('.addChildCompleteName').val();
	if(removeChildCompleteName || setChildCompleteName != null && setChildCompleteName !== '')
		vals['setChildCompleteName'] = setChildCompleteName;
	if(addChildCompleteName != null && addChildCompleteName !== '')
		vals['addChildCompleteName'] = addChildCompleteName;
	var removeChildCompleteName = $formValues.find('.removeChildCompleteName').val();
	if(removeChildCompleteName != null && removeChildCompleteName !== '')
		vals['removeChildCompleteName'] = removeChildCompleteName;

	var valueChildCompleteNamePreferred = $formValues.find('.valueChildCompleteNamePreferred').val();
	var removeChildCompleteNamePreferred = $formValues.find('.removeChildCompleteNamePreferred').val() === 'true';
	var setChildCompleteNamePreferred = removeChildCompleteNamePreferred ? null : $formValues.find('.setChildCompleteNamePreferred').val();
	var addChildCompleteNamePreferred = $formValues.find('.addChildCompleteNamePreferred').val();
	if(removeChildCompleteNamePreferred || setChildCompleteNamePreferred != null && setChildCompleteNamePreferred !== '')
		vals['setChildCompleteNamePreferred'] = setChildCompleteNamePreferred;
	if(addChildCompleteNamePreferred != null && addChildCompleteNamePreferred !== '')
		vals['addChildCompleteNamePreferred'] = addChildCompleteNamePreferred;
	var removeChildCompleteNamePreferred = $formValues.find('.removeChildCompleteNamePreferred').val();
	if(removeChildCompleteNamePreferred != null && removeChildCompleteNamePreferred !== '')
		vals['removeChildCompleteNamePreferred'] = removeChildCompleteNamePreferred;

	var valueChildBirthDate = $formValues.find('.valueChildBirthDate').val();
	var removeChildBirthDate = $formValues.find('.removeChildBirthDate').val() === 'true';
	var setChildBirthDate = removeChildBirthDate ? null : $formValues.find('.setChildBirthDate').val();
	var addChildBirthDate = $formValues.find('.addChildBirthDate').val();
	var setMoment = setChildBirthDate ? moment(setChildBirthDate, 'MM/DD/YYYY') : null; 
	var addMoment = addChildBirthDate ? moment(addChildBirthDate, 'MM/DD/YYYY') : null; 
	if(setMoment) { 
		var s = setMoment.format('YYYY-MM-DD'); 
		setChildBirthDate = s;
	} 
	if(addMoment) { 
		var s = addMoment.format('YYYY-MM-DD'); 
		addChildBirthDate = s;
	} 
	if(removeChildBirthDate || setChildBirthDate != null && setChildBirthDate !== '')
		vals['setChildBirthDate'] = setChildBirthDate;
	if(addChildBirthDate != null && addChildBirthDate !== '')
		vals['addChildBirthDate'] = addChildBirthDate;
	var removeChildBirthDate = $formValues.find('.removeChildBirthDate').val();
	if(removeChildBirthDate != null && removeChildBirthDate !== '')
		vals['removeChildBirthDate'] = removeChildBirthDate;

	var valueSchoolAddress = $formValues.find('.valueSchoolAddress').val();
	var removeSchoolAddress = $formValues.find('.removeSchoolAddress').val() === 'true';
	var setSchoolAddress = removeSchoolAddress ? null : $formValues.find('.setSchoolAddress').val();
	var addSchoolAddress = $formValues.find('.addSchoolAddress').val();
	if(removeSchoolAddress || setSchoolAddress != null && setSchoolAddress !== '')
		vals['setSchoolAddress'] = setSchoolAddress;
	if(addSchoolAddress != null && addSchoolAddress !== '')
		vals['addSchoolAddress'] = addSchoolAddress;
	var removeSchoolAddress = $formValues.find('.removeSchoolAddress').val();
	if(removeSchoolAddress != null && removeSchoolAddress !== '')
		vals['removeSchoolAddress'] = removeSchoolAddress;

	var valueEnrollmentChargeDate = $formValues.find('.valueEnrollmentChargeDate').val();
	var removeEnrollmentChargeDate = $formValues.find('.removeEnrollmentChargeDate').val() === 'true';
	var setEnrollmentChargeDate = removeEnrollmentChargeDate ? null : $formValues.find('.setEnrollmentChargeDate').val();
	var addEnrollmentChargeDate = $formValues.find('.addEnrollmentChargeDate').val();
	var setMoment = setEnrollmentChargeDate ? moment(setEnrollmentChargeDate, 'MM/DD/YYYY') : null; 
	var addMoment = addEnrollmentChargeDate ? moment(addEnrollmentChargeDate, 'MM/DD/YYYY') : null; 
	if(setMoment) { 
		var s = setMoment.format('YYYY-MM-DD'); 
		setEnrollmentChargeDate = s;
	} 
	if(addMoment) { 
		var s = addMoment.format('YYYY-MM-DD'); 
		addEnrollmentChargeDate = s;
	} 
	if(removeEnrollmentChargeDate || setEnrollmentChargeDate != null && setEnrollmentChargeDate !== '')
		vals['setEnrollmentChargeDate'] = setEnrollmentChargeDate;
	if(addEnrollmentChargeDate != null && addEnrollmentChargeDate !== '')
		vals['addEnrollmentChargeDate'] = addEnrollmentChargeDate;
	var removeEnrollmentChargeDate = $formValues.find('.removeEnrollmentChargeDate').val();
	if(removeEnrollmentChargeDate != null && removeEnrollmentChargeDate !== '')
		vals['removeEnrollmentChargeDate'] = removeEnrollmentChargeDate;

	var valueEnrollmentParentNames = $formValues.find('.valueEnrollmentParentNames').val();
	var removeEnrollmentParentNames = $formValues.find('.removeEnrollmentParentNames').val() === 'true';
	var setEnrollmentParentNames = removeEnrollmentParentNames ? null : $formValues.find('.setEnrollmentParentNames').val();
	var addEnrollmentParentNames = $formValues.find('.addEnrollmentParentNames').val();
	if(removeEnrollmentParentNames || setEnrollmentParentNames != null && setEnrollmentParentNames !== '')
		vals['setEnrollmentParentNames'] = setEnrollmentParentNames;
	if(addEnrollmentParentNames != null && addEnrollmentParentNames !== '')
		vals['addEnrollmentParentNames'] = addEnrollmentParentNames;
	var removeEnrollmentParentNames = $formValues.find('.removeEnrollmentParentNames').val();
	if(removeEnrollmentParentNames != null && removeEnrollmentParentNames !== '')
		vals['removeEnrollmentParentNames'] = removeEnrollmentParentNames;

	var valueEnrollmentSignature1 = $formValues.find('.valueEnrollmentSignature1').val();
	var removeEnrollmentSignature1 = $formValues.find('.removeEnrollmentSignature1').val() === 'true';
	var setEnrollmentSignature1 = removeEnrollmentSignature1 ? null : $formValues.find('.setEnrollmentSignature1').val();
	var addEnrollmentSignature1 = $formValues.find('.addEnrollmentSignature1').val();
	if(removeEnrollmentSignature1 || setEnrollmentSignature1 != null && setEnrollmentSignature1 !== '')
		vals['setEnrollmentSignature1'] = setEnrollmentSignature1;
	if(addEnrollmentSignature1 != null && addEnrollmentSignature1 !== '')
		vals['addEnrollmentSignature1'] = addEnrollmentSignature1;
	var removeEnrollmentSignature1 = $formValues.find('.removeEnrollmentSignature1').val();
	if(removeEnrollmentSignature1 != null && removeEnrollmentSignature1 !== '')
		vals['removeEnrollmentSignature1'] = removeEnrollmentSignature1;

	var valueEnrollmentSignature2 = $formValues.find('.valueEnrollmentSignature2').val();
	var removeEnrollmentSignature2 = $formValues.find('.removeEnrollmentSignature2').val() === 'true';
	var setEnrollmentSignature2 = removeEnrollmentSignature2 ? null : $formValues.find('.setEnrollmentSignature2').val();
	var addEnrollmentSignature2 = $formValues.find('.addEnrollmentSignature2').val();
	if(removeEnrollmentSignature2 || setEnrollmentSignature2 != null && setEnrollmentSignature2 !== '')
		vals['setEnrollmentSignature2'] = setEnrollmentSignature2;
	if(addEnrollmentSignature2 != null && addEnrollmentSignature2 !== '')
		vals['addEnrollmentSignature2'] = addEnrollmentSignature2;
	var removeEnrollmentSignature2 = $formValues.find('.removeEnrollmentSignature2').val();
	if(removeEnrollmentSignature2 != null && removeEnrollmentSignature2 !== '')
		vals['removeEnrollmentSignature2'] = removeEnrollmentSignature2;

	var valueEnrollmentSignature3 = $formValues.find('.valueEnrollmentSignature3').val();
	var removeEnrollmentSignature3 = $formValues.find('.removeEnrollmentSignature3').val() === 'true';
	var setEnrollmentSignature3 = removeEnrollmentSignature3 ? null : $formValues.find('.setEnrollmentSignature3').val();
	var addEnrollmentSignature3 = $formValues.find('.addEnrollmentSignature3').val();
	if(removeEnrollmentSignature3 || setEnrollmentSignature3 != null && setEnrollmentSignature3 !== '')
		vals['setEnrollmentSignature3'] = setEnrollmentSignature3;
	if(addEnrollmentSignature3 != null && addEnrollmentSignature3 !== '')
		vals['addEnrollmentSignature3'] = addEnrollmentSignature3;
	var removeEnrollmentSignature3 = $formValues.find('.removeEnrollmentSignature3').val();
	if(removeEnrollmentSignature3 != null && removeEnrollmentSignature3 !== '')
		vals['removeEnrollmentSignature3'] = removeEnrollmentSignature3;

	var valueEnrollmentSignature4 = $formValues.find('.valueEnrollmentSignature4').val();
	var removeEnrollmentSignature4 = $formValues.find('.removeEnrollmentSignature4').val() === 'true';
	var setEnrollmentSignature4 = removeEnrollmentSignature4 ? null : $formValues.find('.setEnrollmentSignature4').val();
	var addEnrollmentSignature4 = $formValues.find('.addEnrollmentSignature4').val();
	if(removeEnrollmentSignature4 || setEnrollmentSignature4 != null && setEnrollmentSignature4 !== '')
		vals['setEnrollmentSignature4'] = setEnrollmentSignature4;
	if(addEnrollmentSignature4 != null && addEnrollmentSignature4 !== '')
		vals['addEnrollmentSignature4'] = addEnrollmentSignature4;
	var removeEnrollmentSignature4 = $formValues.find('.removeEnrollmentSignature4').val();
	if(removeEnrollmentSignature4 != null && removeEnrollmentSignature4 !== '')
		vals['removeEnrollmentSignature4'] = removeEnrollmentSignature4;

	var valueEnrollmentSignature5 = $formValues.find('.valueEnrollmentSignature5').val();
	var removeEnrollmentSignature5 = $formValues.find('.removeEnrollmentSignature5').val() === 'true';
	var setEnrollmentSignature5 = removeEnrollmentSignature5 ? null : $formValues.find('.setEnrollmentSignature5').val();
	var addEnrollmentSignature5 = $formValues.find('.addEnrollmentSignature5').val();
	if(removeEnrollmentSignature5 || setEnrollmentSignature5 != null && setEnrollmentSignature5 !== '')
		vals['setEnrollmentSignature5'] = setEnrollmentSignature5;
	if(addEnrollmentSignature5 != null && addEnrollmentSignature5 !== '')
		vals['addEnrollmentSignature5'] = addEnrollmentSignature5;
	var removeEnrollmentSignature5 = $formValues.find('.removeEnrollmentSignature5').val();
	if(removeEnrollmentSignature5 != null && removeEnrollmentSignature5 !== '')
		vals['removeEnrollmentSignature5'] = removeEnrollmentSignature5;

	var valueEnrollmentSignature6 = $formValues.find('.valueEnrollmentSignature6').val();
	var removeEnrollmentSignature6 = $formValues.find('.removeEnrollmentSignature6').val() === 'true';
	var setEnrollmentSignature6 = removeEnrollmentSignature6 ? null : $formValues.find('.setEnrollmentSignature6').val();
	var addEnrollmentSignature6 = $formValues.find('.addEnrollmentSignature6').val();
	if(removeEnrollmentSignature6 || setEnrollmentSignature6 != null && setEnrollmentSignature6 !== '')
		vals['setEnrollmentSignature6'] = setEnrollmentSignature6;
	if(addEnrollmentSignature6 != null && addEnrollmentSignature6 !== '')
		vals['addEnrollmentSignature6'] = addEnrollmentSignature6;
	var removeEnrollmentSignature6 = $formValues.find('.removeEnrollmentSignature6').val();
	if(removeEnrollmentSignature6 != null && removeEnrollmentSignature6 !== '')
		vals['removeEnrollmentSignature6'] = removeEnrollmentSignature6;

	var valueEnrollmentSignature7 = $formValues.find('.valueEnrollmentSignature7').val();
	var removeEnrollmentSignature7 = $formValues.find('.removeEnrollmentSignature7').val() === 'true';
	var setEnrollmentSignature7 = removeEnrollmentSignature7 ? null : $formValues.find('.setEnrollmentSignature7').val();
	var addEnrollmentSignature7 = $formValues.find('.addEnrollmentSignature7').val();
	if(removeEnrollmentSignature7 || setEnrollmentSignature7 != null && setEnrollmentSignature7 !== '')
		vals['setEnrollmentSignature7'] = setEnrollmentSignature7;
	if(addEnrollmentSignature7 != null && addEnrollmentSignature7 !== '')
		vals['addEnrollmentSignature7'] = addEnrollmentSignature7;
	var removeEnrollmentSignature7 = $formValues.find('.removeEnrollmentSignature7').val();
	if(removeEnrollmentSignature7 != null && removeEnrollmentSignature7 !== '')
		vals['removeEnrollmentSignature7'] = removeEnrollmentSignature7;

	var valueEnrollmentSignature8 = $formValues.find('.valueEnrollmentSignature8').val();
	var removeEnrollmentSignature8 = $formValues.find('.removeEnrollmentSignature8').val() === 'true';
	var setEnrollmentSignature8 = removeEnrollmentSignature8 ? null : $formValues.find('.setEnrollmentSignature8').val();
	var addEnrollmentSignature8 = $formValues.find('.addEnrollmentSignature8').val();
	if(removeEnrollmentSignature8 || setEnrollmentSignature8 != null && setEnrollmentSignature8 !== '')
		vals['setEnrollmentSignature8'] = setEnrollmentSignature8;
	if(addEnrollmentSignature8 != null && addEnrollmentSignature8 !== '')
		vals['addEnrollmentSignature8'] = addEnrollmentSignature8;
	var removeEnrollmentSignature8 = $formValues.find('.removeEnrollmentSignature8').val();
	if(removeEnrollmentSignature8 != null && removeEnrollmentSignature8 !== '')
		vals['removeEnrollmentSignature8'] = removeEnrollmentSignature8;

	var valueEnrollmentSignature9 = $formValues.find('.valueEnrollmentSignature9').val();
	var removeEnrollmentSignature9 = $formValues.find('.removeEnrollmentSignature9').val() === 'true';
	var setEnrollmentSignature9 = removeEnrollmentSignature9 ? null : $formValues.find('.setEnrollmentSignature9').val();
	var addEnrollmentSignature9 = $formValues.find('.addEnrollmentSignature9').val();
	if(removeEnrollmentSignature9 || setEnrollmentSignature9 != null && setEnrollmentSignature9 !== '')
		vals['setEnrollmentSignature9'] = setEnrollmentSignature9;
	if(addEnrollmentSignature9 != null && addEnrollmentSignature9 !== '')
		vals['addEnrollmentSignature9'] = addEnrollmentSignature9;
	var removeEnrollmentSignature9 = $formValues.find('.removeEnrollmentSignature9').val();
	if(removeEnrollmentSignature9 != null && removeEnrollmentSignature9 !== '')
		vals['removeEnrollmentSignature9'] = removeEnrollmentSignature9;

	var valueEnrollmentSignature10 = $formValues.find('.valueEnrollmentSignature10').val();
	var removeEnrollmentSignature10 = $formValues.find('.removeEnrollmentSignature10').val() === 'true';
	var setEnrollmentSignature10 = removeEnrollmentSignature10 ? null : $formValues.find('.setEnrollmentSignature10').val();
	var addEnrollmentSignature10 = $formValues.find('.addEnrollmentSignature10').val();
	if(removeEnrollmentSignature10 || setEnrollmentSignature10 != null && setEnrollmentSignature10 !== '')
		vals['setEnrollmentSignature10'] = setEnrollmentSignature10;
	if(addEnrollmentSignature10 != null && addEnrollmentSignature10 !== '')
		vals['addEnrollmentSignature10'] = addEnrollmentSignature10;
	var removeEnrollmentSignature10 = $formValues.find('.removeEnrollmentSignature10').val();
	if(removeEnrollmentSignature10 != null && removeEnrollmentSignature10 !== '')
		vals['removeEnrollmentSignature10'] = removeEnrollmentSignature10;

	var valueEnrollmentDate1 = $formValues.find('.valueEnrollmentDate1').val();
	var removeEnrollmentDate1 = $formValues.find('.removeEnrollmentDate1').val() === 'true';
	var setEnrollmentDate1 = removeEnrollmentDate1 ? null : $formValues.find('.setEnrollmentDate1').val();
	var addEnrollmentDate1 = $formValues.find('.addEnrollmentDate1').val();
	var setMoment = setEnrollmentDate1 ? moment(setEnrollmentDate1, 'MM/DD/YYYY') : null; 
	var addMoment = addEnrollmentDate1 ? moment(addEnrollmentDate1, 'MM/DD/YYYY') : null; 
	if(setMoment) { 
		var s = setMoment.format('YYYY-MM-DD'); 
		setEnrollmentDate1 = s;
	} 
	if(addMoment) { 
		var s = addMoment.format('YYYY-MM-DD'); 
		addEnrollmentDate1 = s;
	} 
	if(removeEnrollmentDate1 || setEnrollmentDate1 != null && setEnrollmentDate1 !== '')
		vals['setEnrollmentDate1'] = setEnrollmentDate1;
	if(addEnrollmentDate1 != null && addEnrollmentDate1 !== '')
		vals['addEnrollmentDate1'] = addEnrollmentDate1;
	var removeEnrollmentDate1 = $formValues.find('.removeEnrollmentDate1').val();
	if(removeEnrollmentDate1 != null && removeEnrollmentDate1 !== '')
		vals['removeEnrollmentDate1'] = removeEnrollmentDate1;

	var valueEnrollmentDate2 = $formValues.find('.valueEnrollmentDate2').val();
	var removeEnrollmentDate2 = $formValues.find('.removeEnrollmentDate2').val() === 'true';
	var setEnrollmentDate2 = removeEnrollmentDate2 ? null : $formValues.find('.setEnrollmentDate2').val();
	var addEnrollmentDate2 = $formValues.find('.addEnrollmentDate2').val();
	var setMoment = setEnrollmentDate2 ? moment(setEnrollmentDate2, 'MM/DD/YYYY') : null; 
	var addMoment = addEnrollmentDate2 ? moment(addEnrollmentDate2, 'MM/DD/YYYY') : null; 
	if(setMoment) { 
		var s = setMoment.format('YYYY-MM-DD'); 
		setEnrollmentDate2 = s;
	} 
	if(addMoment) { 
		var s = addMoment.format('YYYY-MM-DD'); 
		addEnrollmentDate2 = s;
	} 
	if(removeEnrollmentDate2 || setEnrollmentDate2 != null && setEnrollmentDate2 !== '')
		vals['setEnrollmentDate2'] = setEnrollmentDate2;
	if(addEnrollmentDate2 != null && addEnrollmentDate2 !== '')
		vals['addEnrollmentDate2'] = addEnrollmentDate2;
	var removeEnrollmentDate2 = $formValues.find('.removeEnrollmentDate2').val();
	if(removeEnrollmentDate2 != null && removeEnrollmentDate2 !== '')
		vals['removeEnrollmentDate2'] = removeEnrollmentDate2;

	var valueEnrollmentDate3 = $formValues.find('.valueEnrollmentDate3').val();
	var removeEnrollmentDate3 = $formValues.find('.removeEnrollmentDate3').val() === 'true';
	var setEnrollmentDate3 = removeEnrollmentDate3 ? null : $formValues.find('.setEnrollmentDate3').val();
	var addEnrollmentDate3 = $formValues.find('.addEnrollmentDate3').val();
	var setMoment = setEnrollmentDate3 ? moment(setEnrollmentDate3, 'MM/DD/YYYY') : null; 
	var addMoment = addEnrollmentDate3 ? moment(addEnrollmentDate3, 'MM/DD/YYYY') : null; 
	if(setMoment) { 
		var s = setMoment.format('YYYY-MM-DD'); 
		setEnrollmentDate3 = s;
	} 
	if(addMoment) { 
		var s = addMoment.format('YYYY-MM-DD'); 
		addEnrollmentDate3 = s;
	} 
	if(removeEnrollmentDate3 || setEnrollmentDate3 != null && setEnrollmentDate3 !== '')
		vals['setEnrollmentDate3'] = setEnrollmentDate3;
	if(addEnrollmentDate3 != null && addEnrollmentDate3 !== '')
		vals['addEnrollmentDate3'] = addEnrollmentDate3;
	var removeEnrollmentDate3 = $formValues.find('.removeEnrollmentDate3').val();
	if(removeEnrollmentDate3 != null && removeEnrollmentDate3 !== '')
		vals['removeEnrollmentDate3'] = removeEnrollmentDate3;

	var valueEnrollmentDate4 = $formValues.find('.valueEnrollmentDate4').val();
	var removeEnrollmentDate4 = $formValues.find('.removeEnrollmentDate4').val() === 'true';
	var setEnrollmentDate4 = removeEnrollmentDate4 ? null : $formValues.find('.setEnrollmentDate4').val();
	var addEnrollmentDate4 = $formValues.find('.addEnrollmentDate4').val();
	var setMoment = setEnrollmentDate4 ? moment(setEnrollmentDate4, 'MM/DD/YYYY') : null; 
	var addMoment = addEnrollmentDate4 ? moment(addEnrollmentDate4, 'MM/DD/YYYY') : null; 
	if(setMoment) { 
		var s = setMoment.format('YYYY-MM-DD'); 
		setEnrollmentDate4 = s;
	} 
	if(addMoment) { 
		var s = addMoment.format('YYYY-MM-DD'); 
		addEnrollmentDate4 = s;
	} 
	if(removeEnrollmentDate4 || setEnrollmentDate4 != null && setEnrollmentDate4 !== '')
		vals['setEnrollmentDate4'] = setEnrollmentDate4;
	if(addEnrollmentDate4 != null && addEnrollmentDate4 !== '')
		vals['addEnrollmentDate4'] = addEnrollmentDate4;
	var removeEnrollmentDate4 = $formValues.find('.removeEnrollmentDate4').val();
	if(removeEnrollmentDate4 != null && removeEnrollmentDate4 !== '')
		vals['removeEnrollmentDate4'] = removeEnrollmentDate4;

	var valueEnrollmentDate5 = $formValues.find('.valueEnrollmentDate5').val();
	var removeEnrollmentDate5 = $formValues.find('.removeEnrollmentDate5').val() === 'true';
	var setEnrollmentDate5 = removeEnrollmentDate5 ? null : $formValues.find('.setEnrollmentDate5').val();
	var addEnrollmentDate5 = $formValues.find('.addEnrollmentDate5').val();
	var setMoment = setEnrollmentDate5 ? moment(setEnrollmentDate5, 'MM/DD/YYYY') : null; 
	var addMoment = addEnrollmentDate5 ? moment(addEnrollmentDate5, 'MM/DD/YYYY') : null; 
	if(setMoment) { 
		var s = setMoment.format('YYYY-MM-DD'); 
		setEnrollmentDate5 = s;
	} 
	if(addMoment) { 
		var s = addMoment.format('YYYY-MM-DD'); 
		addEnrollmentDate5 = s;
	} 
	if(removeEnrollmentDate5 || setEnrollmentDate5 != null && setEnrollmentDate5 !== '')
		vals['setEnrollmentDate5'] = setEnrollmentDate5;
	if(addEnrollmentDate5 != null && addEnrollmentDate5 !== '')
		vals['addEnrollmentDate5'] = addEnrollmentDate5;
	var removeEnrollmentDate5 = $formValues.find('.removeEnrollmentDate5').val();
	if(removeEnrollmentDate5 != null && removeEnrollmentDate5 !== '')
		vals['removeEnrollmentDate5'] = removeEnrollmentDate5;

	var valueEnrollmentDate6 = $formValues.find('.valueEnrollmentDate6').val();
	var removeEnrollmentDate6 = $formValues.find('.removeEnrollmentDate6').val() === 'true';
	var setEnrollmentDate6 = removeEnrollmentDate6 ? null : $formValues.find('.setEnrollmentDate6').val();
	var addEnrollmentDate6 = $formValues.find('.addEnrollmentDate6').val();
	var setMoment = setEnrollmentDate6 ? moment(setEnrollmentDate6, 'MM/DD/YYYY') : null; 
	var addMoment = addEnrollmentDate6 ? moment(addEnrollmentDate6, 'MM/DD/YYYY') : null; 
	if(setMoment) { 
		var s = setMoment.format('YYYY-MM-DD'); 
		setEnrollmentDate6 = s;
	} 
	if(addMoment) { 
		var s = addMoment.format('YYYY-MM-DD'); 
		addEnrollmentDate6 = s;
	} 
	if(removeEnrollmentDate6 || setEnrollmentDate6 != null && setEnrollmentDate6 !== '')
		vals['setEnrollmentDate6'] = setEnrollmentDate6;
	if(addEnrollmentDate6 != null && addEnrollmentDate6 !== '')
		vals['addEnrollmentDate6'] = addEnrollmentDate6;
	var removeEnrollmentDate6 = $formValues.find('.removeEnrollmentDate6').val();
	if(removeEnrollmentDate6 != null && removeEnrollmentDate6 !== '')
		vals['removeEnrollmentDate6'] = removeEnrollmentDate6;

	var valueEnrollmentDate7 = $formValues.find('.valueEnrollmentDate7').val();
	var removeEnrollmentDate7 = $formValues.find('.removeEnrollmentDate7').val() === 'true';
	var setEnrollmentDate7 = removeEnrollmentDate7 ? null : $formValues.find('.setEnrollmentDate7').val();
	var addEnrollmentDate7 = $formValues.find('.addEnrollmentDate7').val();
	var setMoment = setEnrollmentDate7 ? moment(setEnrollmentDate7, 'MM/DD/YYYY') : null; 
	var addMoment = addEnrollmentDate7 ? moment(addEnrollmentDate7, 'MM/DD/YYYY') : null; 
	if(setMoment) { 
		var s = setMoment.format('YYYY-MM-DD'); 
		setEnrollmentDate7 = s;
	} 
	if(addMoment) { 
		var s = addMoment.format('YYYY-MM-DD'); 
		addEnrollmentDate7 = s;
	} 
	if(removeEnrollmentDate7 || setEnrollmentDate7 != null && setEnrollmentDate7 !== '')
		vals['setEnrollmentDate7'] = setEnrollmentDate7;
	if(addEnrollmentDate7 != null && addEnrollmentDate7 !== '')
		vals['addEnrollmentDate7'] = addEnrollmentDate7;
	var removeEnrollmentDate7 = $formValues.find('.removeEnrollmentDate7').val();
	if(removeEnrollmentDate7 != null && removeEnrollmentDate7 !== '')
		vals['removeEnrollmentDate7'] = removeEnrollmentDate7;

	var valueEnrollmentDate8 = $formValues.find('.valueEnrollmentDate8').val();
	var removeEnrollmentDate8 = $formValues.find('.removeEnrollmentDate8').val() === 'true';
	var setEnrollmentDate8 = removeEnrollmentDate8 ? null : $formValues.find('.setEnrollmentDate8').val();
	var addEnrollmentDate8 = $formValues.find('.addEnrollmentDate8').val();
	var setMoment = setEnrollmentDate8 ? moment(setEnrollmentDate8, 'MM/DD/YYYY') : null; 
	var addMoment = addEnrollmentDate8 ? moment(addEnrollmentDate8, 'MM/DD/YYYY') : null; 
	if(setMoment) { 
		var s = setMoment.format('YYYY-MM-DD'); 
		setEnrollmentDate8 = s;
	} 
	if(addMoment) { 
		var s = addMoment.format('YYYY-MM-DD'); 
		addEnrollmentDate8 = s;
	} 
	if(removeEnrollmentDate8 || setEnrollmentDate8 != null && setEnrollmentDate8 !== '')
		vals['setEnrollmentDate8'] = setEnrollmentDate8;
	if(addEnrollmentDate8 != null && addEnrollmentDate8 !== '')
		vals['addEnrollmentDate8'] = addEnrollmentDate8;
	var removeEnrollmentDate8 = $formValues.find('.removeEnrollmentDate8').val();
	if(removeEnrollmentDate8 != null && removeEnrollmentDate8 !== '')
		vals['removeEnrollmentDate8'] = removeEnrollmentDate8;

	var valueEnrollmentDate9 = $formValues.find('.valueEnrollmentDate9').val();
	var removeEnrollmentDate9 = $formValues.find('.removeEnrollmentDate9').val() === 'true';
	var setEnrollmentDate9 = removeEnrollmentDate9 ? null : $formValues.find('.setEnrollmentDate9').val();
	var addEnrollmentDate9 = $formValues.find('.addEnrollmentDate9').val();
	var setMoment = setEnrollmentDate9 ? moment(setEnrollmentDate9, 'MM/DD/YYYY') : null; 
	var addMoment = addEnrollmentDate9 ? moment(addEnrollmentDate9, 'MM/DD/YYYY') : null; 
	if(setMoment) { 
		var s = setMoment.format('YYYY-MM-DD'); 
		setEnrollmentDate9 = s;
	} 
	if(addMoment) { 
		var s = addMoment.format('YYYY-MM-DD'); 
		addEnrollmentDate9 = s;
	} 
	if(removeEnrollmentDate9 || setEnrollmentDate9 != null && setEnrollmentDate9 !== '')
		vals['setEnrollmentDate9'] = setEnrollmentDate9;
	if(addEnrollmentDate9 != null && addEnrollmentDate9 !== '')
		vals['addEnrollmentDate9'] = addEnrollmentDate9;
	var removeEnrollmentDate9 = $formValues.find('.removeEnrollmentDate9').val();
	if(removeEnrollmentDate9 != null && removeEnrollmentDate9 !== '')
		vals['removeEnrollmentDate9'] = removeEnrollmentDate9;

	var valueEnrollmentDate10 = $formValues.find('.valueEnrollmentDate10').val();
	var removeEnrollmentDate10 = $formValues.find('.removeEnrollmentDate10').val() === 'true';
	var setEnrollmentDate10 = removeEnrollmentDate10 ? null : $formValues.find('.setEnrollmentDate10').val();
	var addEnrollmentDate10 = $formValues.find('.addEnrollmentDate10').val();
	var setMoment = setEnrollmentDate10 ? moment(setEnrollmentDate10, 'MM/DD/YYYY') : null; 
	var addMoment = addEnrollmentDate10 ? moment(addEnrollmentDate10, 'MM/DD/YYYY') : null; 
	if(setMoment) { 
		var s = setMoment.format('YYYY-MM-DD'); 
		setEnrollmentDate10 = s;
	} 
	if(addMoment) { 
		var s = addMoment.format('YYYY-MM-DD'); 
		addEnrollmentDate10 = s;
	} 
	if(removeEnrollmentDate10 || setEnrollmentDate10 != null && setEnrollmentDate10 !== '')
		vals['setEnrollmentDate10'] = setEnrollmentDate10;
	if(addEnrollmentDate10 != null && addEnrollmentDate10 !== '')
		vals['addEnrollmentDate10'] = addEnrollmentDate10;
	var removeEnrollmentDate10 = $formValues.find('.removeEnrollmentDate10').val();
	if(removeEnrollmentDate10 != null && removeEnrollmentDate10 !== '')
		vals['removeEnrollmentDate10'] = removeEnrollmentDate10;

	adminpatchSchoolEnrollmentVals(pk == null ? $.deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'pk:' + pk}], vals, success, error);
}

function adminpatchSchoolEnrollmentFilters($formFilters) {
	var filters = [];
	if($formFilters) {

		var filterPk = $formFilters.find('.valuePk').val();
		if(filterPk != null && filterPk !== '')
			filters.push({ name: 'fq', value: 'pk:' + filterPk });

		var filterCreated = $formFilters.find('.valueCreated').val();
		if(filterCreated != null && filterCreated !== '')
			filters.push({ name: 'fq', value: 'created:' + filterCreated });

		var filterModified = $formFilters.find('.valueModified').val();
		if(filterModified != null && filterModified !== '')
			filters.push({ name: 'fq', value: 'modified:' + filterModified });

		var filterObjectId = $formFilters.find('.valueObjectId').val();
		if(filterObjectId != null && filterObjectId !== '')
			filters.push({ name: 'fq', value: 'objectId:' + filterObjectId });

		var $filterArchivedCheckbox = $formFilters.find('input.valueArchived[type = "checkbox"]');
		var $filterArchivedSelect = $formFilters.find('select.valueArchived');
		var filterArchived = $filterArchivedSelect.length ? $filterArchivedSelect.val() : $filterArchivedCheckbox.prop('checked');
		var filterArchivedSelectVal = $formFilters.find('select.filterArchived').val();
		var filterArchived = null;
		if(filterArchivedSelectVal !== '')
			filterArchived = filterArchivedSelectVal == 'true';
		if(filterArchived != null && filterArchived === true)
			filters.push({ name: 'fq', value: 'archived:' + filterArchived });

		var $filterDeletedCheckbox = $formFilters.find('input.valueDeleted[type = "checkbox"]');
		var $filterDeletedSelect = $formFilters.find('select.valueDeleted');
		var filterDeleted = $filterDeletedSelect.length ? $filterDeletedSelect.val() : $filterDeletedCheckbox.prop('checked');
		var filterDeletedSelectVal = $formFilters.find('select.filterDeleted').val();
		var filterDeleted = null;
		if(filterDeletedSelectVal !== '')
			filterDeleted = filterDeletedSelectVal == 'true';
		if(filterDeleted != null && filterDeleted === true)
			filters.push({ name: 'fq', value: 'deleted:' + filterDeleted });

		var filterEnrollmentGroupName = $formFilters.find('.valueEnrollmentGroupName').val();
		if(filterEnrollmentGroupName != null && filterEnrollmentGroupName !== '')
			filters.push({ name: 'fq', value: 'enrollmentGroupName:' + filterEnrollmentGroupName });

		var filterCustomerProfileId = $formFilters.find('.valueCustomerProfileId').val();
		if(filterCustomerProfileId != null && filterCustomerProfileId !== '')
			filters.push({ name: 'fq', value: 'customerProfileId:' + filterCustomerProfileId });

		var $filterEnrollmentPaymentCompleteCheckbox = $formFilters.find('input.valueEnrollmentPaymentComplete[type = "checkbox"]');
		var $filterEnrollmentPaymentCompleteSelect = $formFilters.find('select.valueEnrollmentPaymentComplete');
		var filterEnrollmentPaymentComplete = $filterEnrollmentPaymentCompleteSelect.length ? $filterEnrollmentPaymentCompleteSelect.val() : $filterEnrollmentPaymentCompleteCheckbox.prop('checked');
		var filterEnrollmentPaymentCompleteSelectVal = $formFilters.find('select.filterEnrollmentPaymentComplete').val();
		var filterEnrollmentPaymentComplete = null;
		if(filterEnrollmentPaymentCompleteSelectVal !== '')
			filterEnrollmentPaymentComplete = filterEnrollmentPaymentCompleteSelectVal == 'true';
		if(filterEnrollmentPaymentComplete != null && filterEnrollmentPaymentComplete === true)
			filters.push({ name: 'fq', value: 'enrollmentPaymentComplete:' + filterEnrollmentPaymentComplete });

		var $filterChildPottyTrainedCheckbox = $formFilters.find('input.valueChildPottyTrained[type = "checkbox"]');
		var $filterChildPottyTrainedSelect = $formFilters.find('select.valueChildPottyTrained');
		var filterChildPottyTrained = $filterChildPottyTrainedSelect.length ? $filterChildPottyTrainedSelect.val() : $filterChildPottyTrainedCheckbox.prop('checked');
		var filterChildPottyTrainedSelectVal = $formFilters.find('select.filterChildPottyTrained').val();
		var filterChildPottyTrained = null;
		if(filterChildPottyTrainedSelectVal !== '')
			filterChildPottyTrained = filterChildPottyTrainedSelectVal == 'true';
		if(filterChildPottyTrained != null && filterChildPottyTrained === true)
			filters.push({ name: 'fq', value: 'childPottyTrained:' + filterChildPottyTrained });

		var $filterEnrollmentPaymentEachMonthCheckbox = $formFilters.find('input.valueEnrollmentPaymentEachMonth[type = "checkbox"]');
		var $filterEnrollmentPaymentEachMonthSelect = $formFilters.find('select.valueEnrollmentPaymentEachMonth');
		var filterEnrollmentPaymentEachMonth = $filterEnrollmentPaymentEachMonthSelect.length ? $filterEnrollmentPaymentEachMonthSelect.val() : $filterEnrollmentPaymentEachMonthCheckbox.prop('checked');
		var filterEnrollmentPaymentEachMonthSelectVal = $formFilters.find('select.filterEnrollmentPaymentEachMonth').val();
		var filterEnrollmentPaymentEachMonth = null;
		if(filterEnrollmentPaymentEachMonthSelectVal !== '')
			filterEnrollmentPaymentEachMonth = filterEnrollmentPaymentEachMonthSelectVal == 'true';
		if(filterEnrollmentPaymentEachMonth != null && filterEnrollmentPaymentEachMonth === true)
			filters.push({ name: 'fq', value: 'enrollmentPaymentEachMonth:' + filterEnrollmentPaymentEachMonth });

		var $filterEnrollmentImmunizationsCheckbox = $formFilters.find('input.valueEnrollmentImmunizations[type = "checkbox"]');
		var $filterEnrollmentImmunizationsSelect = $formFilters.find('select.valueEnrollmentImmunizations');
		var filterEnrollmentImmunizations = $filterEnrollmentImmunizationsSelect.length ? $filterEnrollmentImmunizationsSelect.val() : $filterEnrollmentImmunizationsCheckbox.prop('checked');
		var filterEnrollmentImmunizationsSelectVal = $formFilters.find('select.filterEnrollmentImmunizations').val();
		var filterEnrollmentImmunizations = null;
		if(filterEnrollmentImmunizationsSelectVal !== '')
			filterEnrollmentImmunizations = filterEnrollmentImmunizationsSelectVal == 'true';
		if(filterEnrollmentImmunizations != null && filterEnrollmentImmunizations === true)
			filters.push({ name: 'fq', value: 'enrollmentImmunizations:' + filterEnrollmentImmunizations });

		var $filterEnrollmentApprovedCheckbox = $formFilters.find('input.valueEnrollmentApproved[type = "checkbox"]');
		var $filterEnrollmentApprovedSelect = $formFilters.find('select.valueEnrollmentApproved');
		var filterEnrollmentApproved = $filterEnrollmentApprovedSelect.length ? $filterEnrollmentApprovedSelect.val() : $filterEnrollmentApprovedCheckbox.prop('checked');
		var filterEnrollmentApprovedSelectVal = $formFilters.find('select.filterEnrollmentApproved').val();
		var filterEnrollmentApproved = null;
		if(filterEnrollmentApprovedSelectVal !== '')
			filterEnrollmentApproved = filterEnrollmentApprovedSelectVal == 'true';
		if(filterEnrollmentApproved != null && filterEnrollmentApproved === true)
			filters.push({ name: 'fq', value: 'enrollmentApproved:' + filterEnrollmentApproved });

		var $filterFamilyMarriedCheckbox = $formFilters.find('input.valueFamilyMarried[type = "checkbox"]');
		var $filterFamilyMarriedSelect = $formFilters.find('select.valueFamilyMarried');
		var filterFamilyMarried = $filterFamilyMarriedSelect.length ? $filterFamilyMarriedSelect.val() : $filterFamilyMarriedCheckbox.prop('checked');
		var filterFamilyMarriedSelectVal = $formFilters.find('select.filterFamilyMarried').val();
		var filterFamilyMarried = null;
		if(filterFamilyMarriedSelectVal !== '')
			filterFamilyMarried = filterFamilyMarriedSelectVal == 'true';
		if(filterFamilyMarried != null && filterFamilyMarried === true)
			filters.push({ name: 'fq', value: 'familyMarried:' + filterFamilyMarried });

		var $filterFamilySeparatedCheckbox = $formFilters.find('input.valueFamilySeparated[type = "checkbox"]');
		var $filterFamilySeparatedSelect = $formFilters.find('select.valueFamilySeparated');
		var filterFamilySeparated = $filterFamilySeparatedSelect.length ? $filterFamilySeparatedSelect.val() : $filterFamilySeparatedCheckbox.prop('checked');
		var filterFamilySeparatedSelectVal = $formFilters.find('select.filterFamilySeparated').val();
		var filterFamilySeparated = null;
		if(filterFamilySeparatedSelectVal !== '')
			filterFamilySeparated = filterFamilySeparatedSelectVal == 'true';
		if(filterFamilySeparated != null && filterFamilySeparated === true)
			filters.push({ name: 'fq', value: 'familySeparated:' + filterFamilySeparated });

		var $filterFamilyDivorcedCheckbox = $formFilters.find('input.valueFamilyDivorced[type = "checkbox"]');
		var $filterFamilyDivorcedSelect = $formFilters.find('select.valueFamilyDivorced');
		var filterFamilyDivorced = $filterFamilyDivorcedSelect.length ? $filterFamilyDivorcedSelect.val() : $filterFamilyDivorcedCheckbox.prop('checked');
		var filterFamilyDivorcedSelectVal = $formFilters.find('select.filterFamilyDivorced').val();
		var filterFamilyDivorced = null;
		if(filterFamilyDivorcedSelectVal !== '')
			filterFamilyDivorced = filterFamilyDivorcedSelectVal == 'true';
		if(filterFamilyDivorced != null && filterFamilyDivorced === true)
			filters.push({ name: 'fq', value: 'familyDivorced:' + filterFamilyDivorced });

		var filterFamilyAddress = $formFilters.find('.valueFamilyAddress').val();
		if(filterFamilyAddress != null && filterFamilyAddress !== '')
			filters.push({ name: 'fq', value: 'familyAddress:' + filterFamilyAddress });

		var filterEnrollmentSpecialConsiderations = $formFilters.find('.valueEnrollmentSpecialConsiderations').val();
		if(filterEnrollmentSpecialConsiderations != null && filterEnrollmentSpecialConsiderations !== '')
			filters.push({ name: 'fq', value: 'enrollmentSpecialConsiderations:' + filterEnrollmentSpecialConsiderations });

		var filterChildMedicalConditions = $formFilters.find('.valueChildMedicalConditions').val();
		if(filterChildMedicalConditions != null && filterChildMedicalConditions !== '')
			filters.push({ name: 'fq', value: 'childMedicalConditions:' + filterChildMedicalConditions });

		var filterChildPreviousSchoolsAttended = $formFilters.find('.valueChildPreviousSchoolsAttended').val();
		if(filterChildPreviousSchoolsAttended != null && filterChildPreviousSchoolsAttended !== '')
			filters.push({ name: 'fq', value: 'childPreviousSchoolsAttended:' + filterChildPreviousSchoolsAttended });

		var filterFamilyHowDoYouKnowTheSchool = $formFilters.find('.valueFamilyHowDoYouKnowTheSchool').val();
		if(filterFamilyHowDoYouKnowTheSchool != null && filterFamilyHowDoYouKnowTheSchool !== '')
			filters.push({ name: 'fq', value: 'familyHowDoYouKnowTheSchool:' + filterFamilyHowDoYouKnowTheSchool });

		var filterChildDescription = $formFilters.find('.valueChildDescription').val();
		if(filterChildDescription != null && filterChildDescription !== '')
			filters.push({ name: 'fq', value: 'childDescription:' + filterChildDescription });

		var filterChildObjectives = $formFilters.find('.valueChildObjectives').val();
		if(filterChildObjectives != null && filterChildObjectives !== '')
			filters.push({ name: 'fq', value: 'childObjectives:' + filterChildObjectives });

		var filterYearKey = $formFilters.find('.valueYearKey').val();
		if(filterYearKey != null && filterYearKey !== '')
			filters.push({ name: 'fq', value: 'yearKey:' + filterYearKey });

		var filterBlockKeys = $formFilters.find('.valueBlockKeys').val();
		if(filterBlockKeys != null && filterBlockKeys !== '')
			filters.push({ name: 'fq', value: 'blockKeys:' + filterBlockKeys });

		var filterChildKey = $formFilters.find('.valueChildKey').val();
		if(filterChildKey != null && filterChildKey !== '')
			filters.push({ name: 'fq', value: 'childKey:' + filterChildKey });

		var filterGuardianKeys = $formFilters.find('.valueGuardianKeys').val();
		if(filterGuardianKeys != null && filterGuardianKeys !== '')
			filters.push({ name: 'fq', value: 'guardianKeys:' + filterGuardianKeys });

		var filterMomKeys = $formFilters.find('.valueMomKeys').val();
		if(filterMomKeys != null && filterMomKeys !== '')
			filters.push({ name: 'fq', value: 'momKeys:' + filterMomKeys });

		var filterDadKeys = $formFilters.find('.valueDadKeys').val();
		if(filterDadKeys != null && filterDadKeys !== '')
			filters.push({ name: 'fq', value: 'dadKeys:' + filterDadKeys });

		var filterUserKeys = $formFilters.find('.valueUserKeys').val();
		if(filterUserKeys != null && filterUserKeys !== '')
			filters.push({ name: 'fq', value: 'userKeys:' + filterUserKeys });

		var filterPaymentKeys = $formFilters.find('.valuePaymentKeys').val();
		if(filterPaymentKeys != null && filterPaymentKeys !== '')
			filters.push({ name: 'fq', value: 'paymentKeys:' + filterPaymentKeys });

		var filterInheritPk = $formFilters.find('.valueInheritPk').val();
		if(filterInheritPk != null && filterInheritPk !== '')
			filters.push({ name: 'fq', value: 'inheritPk:' + filterInheritPk });

		var filterId = $formFilters.find('.valueId').val();
		if(filterId != null && filterId !== '')
			filters.push({ name: 'fq', value: 'id:' + filterId });

		var filterClassCanonicalName = $formFilters.find('.valueClassCanonicalName').val();
		if(filterClassCanonicalName != null && filterClassCanonicalName !== '')
			filters.push({ name: 'fq', value: 'classCanonicalName:' + filterClassCanonicalName });

		var filterClassSimpleName = $formFilters.find('.valueClassSimpleName').val();
		if(filterClassSimpleName != null && filterClassSimpleName !== '')
			filters.push({ name: 'fq', value: 'classSimpleName:' + filterClassSimpleName });

		var filterClassCanonicalNames = $formFilters.find('.valueClassCanonicalNames').val();
		if(filterClassCanonicalNames != null && filterClassCanonicalNames !== '')
			filters.push({ name: 'fq', value: 'classCanonicalNames:' + filterClassCanonicalNames });

		var filterSessionId = $formFilters.find('.valueSessionId').val();
		if(filterSessionId != null && filterSessionId !== '')
			filters.push({ name: 'fq', value: 'sessionId:' + filterSessionId });

		var filterUserId = $formFilters.find('.valueUserId').val();
		if(filterUserId != null && filterUserId !== '')
			filters.push({ name: 'fq', value: 'userId:' + filterUserId });

		var filterUserKey = $formFilters.find('.valueUserKey').val();
		if(filterUserKey != null && filterUserKey !== '')
			filters.push({ name: 'fq', value: 'userKey:' + filterUserKey });

		var filterSaves = $formFilters.find('.valueSaves').val();
		if(filterSaves != null && filterSaves !== '')
			filters.push({ name: 'fq', value: 'saves:' + filterSaves });

		var filterObjectTitle = $formFilters.find('.valueObjectTitle').val();
		if(filterObjectTitle != null && filterObjectTitle !== '')
			filters.push({ name: 'fq', value: 'objectTitle:' + filterObjectTitle });

		var filterObjectSuggest = $formFilters.find('.valueObjectSuggest').val();
		if(filterObjectSuggest != null && filterObjectSuggest !== '')
			filters.push({ name: 'q', value: 'objectSuggest:' + filterObjectSuggest });

		var filterObjectText = $formFilters.find('.valueObjectText').val();
		if(filterObjectText != null && filterObjectText !== '')
			filters.push({ name: 'fq', value: 'objectText:' + filterObjectText });

		var filterPageUrlId = $formFilters.find('.valuePageUrlId').val();
		if(filterPageUrlId != null && filterPageUrlId !== '')
			filters.push({ name: 'fq', value: 'pageUrlId:' + filterPageUrlId });

		var filterPageUrlPk = $formFilters.find('.valuePageUrlPk').val();
		if(filterPageUrlPk != null && filterPageUrlPk !== '')
			filters.push({ name: 'fq', value: 'pageUrlPk:' + filterPageUrlPk });

		var filterPageUrlApi = $formFilters.find('.valuePageUrlApi').val();
		if(filterPageUrlApi != null && filterPageUrlApi !== '')
			filters.push({ name: 'fq', value: 'pageUrlApi:' + filterPageUrlApi });

		var filterEnrollmentKey = $formFilters.find('.valueEnrollmentKey').val();
		if(filterEnrollmentKey != null && filterEnrollmentKey !== '')
			filters.push({ name: 'fq', value: 'enrollmentKey:' + filterEnrollmentKey });

		var filterSchoolKey = $formFilters.find('.valueSchoolKey').val();
		if(filterSchoolKey != null && filterSchoolKey !== '')
			filters.push({ name: 'fq', value: 'schoolKey:' + filterSchoolKey });

		var filterSessionKey = $formFilters.find('.valueSessionKey').val();
		if(filterSessionKey != null && filterSessionKey !== '')
			filters.push({ name: 'fq', value: 'sessionKey:' + filterSessionKey });

		var filterAgeKey = $formFilters.find('.valueAgeKey').val();
		if(filterAgeKey != null && filterAgeKey !== '')
			filters.push({ name: 'fq', value: 'ageKey:' + filterAgeKey });

		var filterBlockKey = $formFilters.find('.valueBlockKey').val();
		if(filterBlockKey != null && filterBlockKey !== '')
			filters.push({ name: 'fq', value: 'blockKey:' + filterBlockKey });

		var filterEnrollmentFormKey = $formFilters.find('.valueEnrollmentFormKey').val();
		if(filterEnrollmentFormKey != null && filterEnrollmentFormKey !== '')
			filters.push({ name: 'fq', value: 'enrollmentFormKey:' + filterEnrollmentFormKey });

		var filterEducationSort = $formFilters.find('.valueEducationSort').val();
		if(filterEducationSort != null && filterEducationSort !== '')
			filters.push({ name: 'fq', value: 'educationSort:' + filterEducationSort });

		var filterSchoolSort = $formFilters.find('.valueSchoolSort').val();
		if(filterSchoolSort != null && filterSchoolSort !== '')
			filters.push({ name: 'fq', value: 'schoolSort:' + filterSchoolSort });

		var filterYearSort = $formFilters.find('.valueYearSort').val();
		if(filterYearSort != null && filterYearSort !== '')
			filters.push({ name: 'fq', value: 'yearSort:' + filterYearSort });

		var filterSeasonSort = $formFilters.find('.valueSeasonSort').val();
		if(filterSeasonSort != null && filterSeasonSort !== '')
			filters.push({ name: 'fq', value: 'seasonSort:' + filterSeasonSort });

		var filterSessionSort = $formFilters.find('.valueSessionSort').val();
		if(filterSessionSort != null && filterSessionSort !== '')
			filters.push({ name: 'fq', value: 'sessionSort:' + filterSessionSort });

		var filterAgeSort = $formFilters.find('.valueAgeSort').val();
		if(filterAgeSort != null && filterAgeSort !== '')
			filters.push({ name: 'fq', value: 'ageSort:' + filterAgeSort });

		var filterChildFirstName = $formFilters.find('.valueChildFirstName').val();
		if(filterChildFirstName != null && filterChildFirstName !== '')
			filters.push({ name: 'fq', value: 'childFirstName:' + filterChildFirstName });

		var filterChildFirstNamePreferred = $formFilters.find('.valueChildFirstNamePreferred').val();
		if(filterChildFirstNamePreferred != null && filterChildFirstNamePreferred !== '')
			filters.push({ name: 'fq', value: 'childFirstNamePreferred:' + filterChildFirstNamePreferred });

		var filterChildFamilyName = $formFilters.find('.valueChildFamilyName').val();
		if(filterChildFamilyName != null && filterChildFamilyName !== '')
			filters.push({ name: 'fq', value: 'childFamilyName:' + filterChildFamilyName });

		var filterMomFirstName = $formFilters.find('.valueMomFirstName').val();
		if(filterMomFirstName != null && filterMomFirstName !== '')
			filters.push({ name: 'fq', value: 'momFirstName:' + filterMomFirstName });

		var filterMomFirstNamePreferred = $formFilters.find('.valueMomFirstNamePreferred').val();
		if(filterMomFirstNamePreferred != null && filterMomFirstNamePreferred !== '')
			filters.push({ name: 'fq', value: 'momFirstNamePreferred:' + filterMomFirstNamePreferred });

		var filterMomCompleteNamePreferred = $formFilters.find('.valueMomCompleteNamePreferred').val();
		if(filterMomCompleteNamePreferred != null && filterMomCompleteNamePreferred !== '')
			filters.push({ name: 'fq', value: 'momCompleteNamePreferred:' + filterMomCompleteNamePreferred });

		var filterDadFirstName = $formFilters.find('.valueDadFirstName').val();
		if(filterDadFirstName != null && filterDadFirstName !== '')
			filters.push({ name: 'fq', value: 'dadFirstName:' + filterDadFirstName });

		var filterDadFirstNamePreferred = $formFilters.find('.valueDadFirstNamePreferred').val();
		if(filterDadFirstNamePreferred != null && filterDadFirstNamePreferred !== '')
			filters.push({ name: 'fq', value: 'dadFirstNamePreferred:' + filterDadFirstNamePreferred });

		var filterDadCompleteNamePreferred = $formFilters.find('.valueDadCompleteNamePreferred').val();
		if(filterDadCompleteNamePreferred != null && filterDadCompleteNamePreferred !== '')
			filters.push({ name: 'fq', value: 'dadCompleteNamePreferred:' + filterDadCompleteNamePreferred });

		var filterChildCompleteName = $formFilters.find('.valueChildCompleteName').val();
		if(filterChildCompleteName != null && filterChildCompleteName !== '')
			filters.push({ name: 'fq', value: 'childCompleteName:' + filterChildCompleteName });

		var filterChildCompleteNamePreferred = $formFilters.find('.valueChildCompleteNamePreferred').val();
		if(filterChildCompleteNamePreferred != null && filterChildCompleteNamePreferred !== '')
			filters.push({ name: 'fq', value: 'childCompleteNamePreferred:' + filterChildCompleteNamePreferred });

		var filterChildBirthDate = $formFilters.find('.valueChildBirthDate').val();
		if(filterChildBirthDate != null && filterChildBirthDate !== '')
			filters.push({ name: 'fq', value: 'childBirthDate:' + filterChildBirthDate });

		var filterChildBirthDateYear = $formFilters.find('.valueChildBirthDateYear').val();
		if(filterChildBirthDateYear != null && filterChildBirthDateYear !== '')
			filters.push({ name: 'fq', value: 'childBirthDateYear:' + filterChildBirthDateYear });

		var filterChildBirthDateMonthOfYear = $formFilters.find('.valueChildBirthDateMonthOfYear').val();
		if(filterChildBirthDateMonthOfYear != null && filterChildBirthDateMonthOfYear !== '')
			filters.push({ name: 'fq', value: 'childBirthDateMonthOfYear:' + filterChildBirthDateMonthOfYear });

		var filterChildBirthDateDayOfWeek = $formFilters.find('.valueChildBirthDateDayOfWeek').val();
		if(filterChildBirthDateDayOfWeek != null && filterChildBirthDateDayOfWeek !== '')
			filters.push({ name: 'fq', value: 'childBirthDateDayOfWeek:' + filterChildBirthDateDayOfWeek });

		var filterChildBirthMonth = $formFilters.find('.valueChildBirthMonth').val();
		if(filterChildBirthMonth != null && filterChildBirthMonth !== '')
			filters.push({ name: 'fq', value: 'childBirthMonth:' + filterChildBirthMonth });

		var filterChildBirthDay = $formFilters.find('.valueChildBirthDay').val();
		if(filterChildBirthDay != null && filterChildBirthDay !== '')
			filters.push({ name: 'fq', value: 'childBirthDay:' + filterChildBirthDay });

		var filterSchoolName = $formFilters.find('.valueSchoolName').val();
		if(filterSchoolName != null && filterSchoolName !== '')
			filters.push({ name: 'fq', value: 'schoolName:' + filterSchoolName });

		var filterSchoolCompleteName = $formFilters.find('.valueSchoolCompleteName').val();
		if(filterSchoolCompleteName != null && filterSchoolCompleteName !== '')
			filters.push({ name: 'fq', value: 'schoolCompleteName:' + filterSchoolCompleteName });

		var filterSchoolLocation = $formFilters.find('.valueSchoolLocation').val();
		if(filterSchoolLocation != null && filterSchoolLocation !== '')
			filters.push({ name: 'fq', value: 'schoolLocation:' + filterSchoolLocation });

		var filterSchoolAddress = $formFilters.find('.valueSchoolAddress').val();
		if(filterSchoolAddress != null && filterSchoolAddress !== '')
			filters.push({ name: 'fq', value: 'schoolAddress:' + filterSchoolAddress });

		var filterSchoolPhoneNumber = $formFilters.find('.valueSchoolPhoneNumber').val();
		if(filterSchoolPhoneNumber != null && filterSchoolPhoneNumber !== '')
			filters.push({ name: 'fq', value: 'schoolPhoneNumber:' + filterSchoolPhoneNumber });

		var filterSchoolForm = $formFilters.find('.valueSchoolForm').val();
		if(filterSchoolForm != null && filterSchoolForm !== '')
			filters.push({ name: 'fq', value: 'schoolForm:' + filterSchoolForm });

		var filterSchoolNumber = $formFilters.find('.valueSchoolNumber').val();
		if(filterSchoolNumber != null && filterSchoolNumber !== '')
			filters.push({ name: 'fq', value: 'schoolNumber:' + filterSchoolNumber });

		var filterSchoolAdministratorName = $formFilters.find('.valueSchoolAdministratorName').val();
		if(filterSchoolAdministratorName != null && filterSchoolAdministratorName !== '')
			filters.push({ name: 'fq', value: 'schoolAdministratorName:' + filterSchoolAdministratorName });

		var filterYearStart = $formFilters.find('.valueYearStart').val();
		if(filterYearStart != null && filterYearStart !== '')
			filters.push({ name: 'fq', value: 'yearStart:' + filterYearStart });

		var filterYearEnd = $formFilters.find('.valueYearEnd').val();
		if(filterYearEnd != null && filterYearEnd !== '')
			filters.push({ name: 'fq', value: 'yearEnd:' + filterYearEnd });

		var filterSeasonStartDate = $formFilters.find('.valueSeasonStartDate').val();
		if(filterSeasonStartDate != null && filterSeasonStartDate !== '')
			filters.push({ name: 'fq', value: 'seasonStartDate:' + filterSeasonStartDate });

		var filterYearEnrollmentFee = $formFilters.find('.valueYearEnrollmentFee').val();
		if(filterYearEnrollmentFee != null && filterYearEnrollmentFee !== '')
			filters.push({ name: 'fq', value: 'yearEnrollmentFee:' + filterYearEnrollmentFee });

		var filterSessionStartDate = $formFilters.find('.valueSessionStartDate').val();
		if(filterSessionStartDate != null && filterSessionStartDate !== '')
			filters.push({ name: 'fq', value: 'sessionStartDate:' + filterSessionStartDate });

		var filterSessionEndDate = $formFilters.find('.valueSessionEndDate').val();
		if(filterSessionEndDate != null && filterSessionEndDate !== '')
			filters.push({ name: 'fq', value: 'sessionEndDate:' + filterSessionEndDate });

		var filterAgeCompleteName = $formFilters.find('.valueAgeCompleteName').val();
		if(filterAgeCompleteName != null && filterAgeCompleteName !== '')
			filters.push({ name: 'fq', value: 'ageCompleteName:' + filterAgeCompleteName });

		var filterAgeStart = $formFilters.find('.valueAgeStart').val();
		if(filterAgeStart != null && filterAgeStart !== '')
			filters.push({ name: 'fq', value: 'ageStart:' + filterAgeStart });

		var filterAgeEnd = $formFilters.find('.valueAgeEnd').val();
		if(filterAgeEnd != null && filterAgeEnd !== '')
			filters.push({ name: 'fq', value: 'ageEnd:' + filterAgeEnd });

		var filterBlockStartTime = $formFilters.find('.valueBlockStartTime').val();
		if(filterBlockStartTime != null && filterBlockStartTime !== '')
			filters.push({ name: 'fq', value: 'blockStartTime:' + filterBlockStartTime });

		var filterBlockEndTime = $formFilters.find('.valueBlockEndTime').val();
		if(filterBlockEndTime != null && filterBlockEndTime !== '')
			filters.push({ name: 'fq', value: 'blockEndTime:' + filterBlockEndTime });

		var filterBlockPricePerMonth = $formFilters.find('.valueBlockPricePerMonth').val();
		if(filterBlockPricePerMonth != null && filterBlockPricePerMonth !== '')
			filters.push({ name: 'fq', value: 'blockPricePerMonth:' + filterBlockPricePerMonth });

		var $filterBlockSundayCheckbox = $formFilters.find('input.valueBlockSunday[type = "checkbox"]');
		var $filterBlockSundaySelect = $formFilters.find('select.valueBlockSunday');
		var filterBlockSunday = $filterBlockSundaySelect.length ? $filterBlockSundaySelect.val() : $filterBlockSundayCheckbox.prop('checked');
		var filterBlockSundaySelectVal = $formFilters.find('select.filterBlockSunday').val();
		var filterBlockSunday = null;
		if(filterBlockSundaySelectVal !== '')
			filterBlockSunday = filterBlockSundaySelectVal == 'true';
		if(filterBlockSunday != null && filterBlockSunday === true)
			filters.push({ name: 'fq', value: 'blockSunday:' + filterBlockSunday });

		var $filterBlockMondayCheckbox = $formFilters.find('input.valueBlockMonday[type = "checkbox"]');
		var $filterBlockMondaySelect = $formFilters.find('select.valueBlockMonday');
		var filterBlockMonday = $filterBlockMondaySelect.length ? $filterBlockMondaySelect.val() : $filterBlockMondayCheckbox.prop('checked');
		var filterBlockMondaySelectVal = $formFilters.find('select.filterBlockMonday').val();
		var filterBlockMonday = null;
		if(filterBlockMondaySelectVal !== '')
			filterBlockMonday = filterBlockMondaySelectVal == 'true';
		if(filterBlockMonday != null && filterBlockMonday === true)
			filters.push({ name: 'fq', value: 'blockMonday:' + filterBlockMonday });

		var $filterBlockTuesdayCheckbox = $formFilters.find('input.valueBlockTuesday[type = "checkbox"]');
		var $filterBlockTuesdaySelect = $formFilters.find('select.valueBlockTuesday');
		var filterBlockTuesday = $filterBlockTuesdaySelect.length ? $filterBlockTuesdaySelect.val() : $filterBlockTuesdayCheckbox.prop('checked');
		var filterBlockTuesdaySelectVal = $formFilters.find('select.filterBlockTuesday').val();
		var filterBlockTuesday = null;
		if(filterBlockTuesdaySelectVal !== '')
			filterBlockTuesday = filterBlockTuesdaySelectVal == 'true';
		if(filterBlockTuesday != null && filterBlockTuesday === true)
			filters.push({ name: 'fq', value: 'blockTuesday:' + filterBlockTuesday });

		var $filterBlockWednesdayCheckbox = $formFilters.find('input.valueBlockWednesday[type = "checkbox"]');
		var $filterBlockWednesdaySelect = $formFilters.find('select.valueBlockWednesday');
		var filterBlockWednesday = $filterBlockWednesdaySelect.length ? $filterBlockWednesdaySelect.val() : $filterBlockWednesdayCheckbox.prop('checked');
		var filterBlockWednesdaySelectVal = $formFilters.find('select.filterBlockWednesday').val();
		var filterBlockWednesday = null;
		if(filterBlockWednesdaySelectVal !== '')
			filterBlockWednesday = filterBlockWednesdaySelectVal == 'true';
		if(filterBlockWednesday != null && filterBlockWednesday === true)
			filters.push({ name: 'fq', value: 'blockWednesday:' + filterBlockWednesday });

		var $filterBlockThursdayCheckbox = $formFilters.find('input.valueBlockThursday[type = "checkbox"]');
		var $filterBlockThursdaySelect = $formFilters.find('select.valueBlockThursday');
		var filterBlockThursday = $filterBlockThursdaySelect.length ? $filterBlockThursdaySelect.val() : $filterBlockThursdayCheckbox.prop('checked');
		var filterBlockThursdaySelectVal = $formFilters.find('select.filterBlockThursday').val();
		var filterBlockThursday = null;
		if(filterBlockThursdaySelectVal !== '')
			filterBlockThursday = filterBlockThursdaySelectVal == 'true';
		if(filterBlockThursday != null && filterBlockThursday === true)
			filters.push({ name: 'fq', value: 'blockThursday:' + filterBlockThursday });

		var $filterBlockFridayCheckbox = $formFilters.find('input.valueBlockFriday[type = "checkbox"]');
		var $filterBlockFridaySelect = $formFilters.find('select.valueBlockFriday');
		var filterBlockFriday = $filterBlockFridaySelect.length ? $filterBlockFridaySelect.val() : $filterBlockFridayCheckbox.prop('checked');
		var filterBlockFridaySelectVal = $formFilters.find('select.filterBlockFriday').val();
		var filterBlockFriday = null;
		if(filterBlockFridaySelectVal !== '')
			filterBlockFriday = filterBlockFridaySelectVal == 'true';
		if(filterBlockFriday != null && filterBlockFriday === true)
			filters.push({ name: 'fq', value: 'blockFriday:' + filterBlockFriday });

		var $filterBlockSaturdayCheckbox = $formFilters.find('input.valueBlockSaturday[type = "checkbox"]');
		var $filterBlockSaturdaySelect = $formFilters.find('select.valueBlockSaturday');
		var filterBlockSaturday = $filterBlockSaturdaySelect.length ? $filterBlockSaturdaySelect.val() : $filterBlockSaturdayCheckbox.prop('checked');
		var filterBlockSaturdaySelectVal = $formFilters.find('select.filterBlockSaturday').val();
		var filterBlockSaturday = null;
		if(filterBlockSaturdaySelectVal !== '')
			filterBlockSaturday = filterBlockSaturdaySelectVal == 'true';
		if(filterBlockSaturday != null && filterBlockSaturday === true)
			filters.push({ name: 'fq', value: 'blockSaturday:' + filterBlockSaturday });

		var filterBlockTotalPrice = $formFilters.find('.valueBlockTotalPrice').val();
		if(filterBlockTotalPrice != null && filterBlockTotalPrice !== '')
			filters.push({ name: 'fq', value: 'blockTotalPrice:' + filterBlockTotalPrice });

		var filterBlockAdminName = $formFilters.find('.valueBlockAdminName').val();
		if(filterBlockAdminName != null && filterBlockAdminName !== '')
			filters.push({ name: 'fq', value: 'blockAdminName:' + filterBlockAdminName });

		var filterBlockShortName = $formFilters.find('.valueBlockShortName').val();
		if(filterBlockShortName != null && filterBlockShortName !== '')
			filters.push({ name: 'fq', value: 'blockShortName:' + filterBlockShortName });

		var filterBlockCompleteName = $formFilters.find('.valueBlockCompleteName').val();
		if(filterBlockCompleteName != null && filterBlockCompleteName !== '')
			filters.push({ name: 'fq', value: 'blockCompleteName:' + filterBlockCompleteName });

		var filterEnrollmentGroupColor = $formFilters.find('.valueEnrollmentGroupColor').val();
		if(filterEnrollmentGroupColor != null && filterEnrollmentGroupColor !== '')
			filters.push({ name: 'fq', value: 'enrollmentGroupColor:' + filterEnrollmentGroupColor });

		var filterEnrollmentChargeDate = $formFilters.find('.valueEnrollmentChargeDate').val();
		if(filterEnrollmentChargeDate != null && filterEnrollmentChargeDate !== '')
			filters.push({ name: 'fq', value: 'enrollmentChargeDate:' + filterEnrollmentChargeDate });

		var filterPaymentLastDate = $formFilters.find('.valuePaymentLastDate').val();
		if(filterPaymentLastDate != null && filterPaymentLastDate !== '')
			filters.push({ name: 'fq', value: 'paymentLastDate:' + filterPaymentLastDate });

		var filterPaymentLastStr = $formFilters.find('.valuePaymentLastStr').val();
		if(filterPaymentLastStr != null && filterPaymentLastStr !== '')
			filters.push({ name: 'fq', value: 'paymentLastStr:' + filterPaymentLastStr });

		var filterPaymentAmount = $formFilters.find('.valuePaymentAmount').val();
		if(filterPaymentAmount != null && filterPaymentAmount !== '')
			filters.push({ name: 'fq', value: 'paymentAmount:' + filterPaymentAmount });

		var filterChargeAmount = $formFilters.find('.valueChargeAmount').val();
		if(filterChargeAmount != null && filterChargeAmount !== '')
			filters.push({ name: 'fq', value: 'chargeAmount:' + filterChargeAmount });

		var filterChargeAmountFuture = $formFilters.find('.valueChargeAmountFuture').val();
		if(filterChargeAmountFuture != null && filterChargeAmountFuture !== '')
			filters.push({ name: 'fq', value: 'chargeAmountFuture:' + filterChargeAmountFuture });

		var filterChargeAmountDue = $formFilters.find('.valueChargeAmountDue').val();
		if(filterChargeAmountDue != null && filterChargeAmountDue !== '')
			filters.push({ name: 'fq', value: 'chargeAmountDue:' + filterChargeAmountDue });

		var filterChargeAmountNotPassed = $formFilters.find('.valueChargeAmountNotPassed').val();
		if(filterChargeAmountNotPassed != null && filterChargeAmountNotPassed !== '')
			filters.push({ name: 'fq', value: 'chargeAmountNotPassed:' + filterChargeAmountNotPassed });

		var filterChargesNow = $formFilters.find('.valueChargesNow').val();
		if(filterChargesNow != null && filterChargesNow !== '')
			filters.push({ name: 'fq', value: 'chargesNow:' + filterChargesNow });

		var $filterPaymentsCurrentCheckbox = $formFilters.find('input.valuePaymentsCurrent[type = "checkbox"]');
		var $filterPaymentsCurrentSelect = $formFilters.find('select.valuePaymentsCurrent');
		var filterPaymentsCurrent = $filterPaymentsCurrentSelect.length ? $filterPaymentsCurrentSelect.val() : $filterPaymentsCurrentCheckbox.prop('checked');
		var filterPaymentsCurrentSelectVal = $formFilters.find('select.filterPaymentsCurrent').val();
		var filterPaymentsCurrent = null;
		if(filterPaymentsCurrentSelectVal !== '')
			filterPaymentsCurrent = filterPaymentsCurrentSelectVal == 'true';
		if(filterPaymentsCurrent != null && filterPaymentsCurrent === true)
			filters.push({ name: 'fq', value: 'paymentsCurrent:' + filterPaymentsCurrent });

		var $filterPaymentsLateCheckbox = $formFilters.find('input.valuePaymentsLate[type = "checkbox"]');
		var $filterPaymentsLateSelect = $formFilters.find('select.valuePaymentsLate');
		var filterPaymentsLate = $filterPaymentsLateSelect.length ? $filterPaymentsLateSelect.val() : $filterPaymentsLateCheckbox.prop('checked');
		var filterPaymentsLateSelectVal = $formFilters.find('select.filterPaymentsLate').val();
		var filterPaymentsLate = null;
		if(filterPaymentsLateSelectVal !== '')
			filterPaymentsLate = filterPaymentsLateSelectVal == 'true';
		if(filterPaymentsLate != null && filterPaymentsLate === true)
			filters.push({ name: 'fq', value: 'paymentsLate:' + filterPaymentsLate });

		var filterPaymentsLateAmount = $formFilters.find('.valuePaymentsLateAmount').val();
		if(filterPaymentsLateAmount != null && filterPaymentsLateAmount !== '')
			filters.push({ name: 'fq', value: 'paymentsLateAmount:' + filterPaymentsLateAmount });

		var $filterPaymentsAheadCheckbox = $formFilters.find('input.valuePaymentsAhead[type = "checkbox"]');
		var $filterPaymentsAheadSelect = $formFilters.find('select.valuePaymentsAhead');
		var filterPaymentsAhead = $filterPaymentsAheadSelect.length ? $filterPaymentsAheadSelect.val() : $filterPaymentsAheadCheckbox.prop('checked');
		var filterPaymentsAheadSelectVal = $formFilters.find('select.filterPaymentsAhead').val();
		var filterPaymentsAhead = null;
		if(filterPaymentsAheadSelectVal !== '')
			filterPaymentsAhead = filterPaymentsAheadSelectVal == 'true';
		if(filterPaymentsAhead != null && filterPaymentsAhead === true)
			filters.push({ name: 'fq', value: 'paymentsAhead:' + filterPaymentsAhead });

		var $filterPaymentsPastDueCheckbox = $formFilters.find('input.valuePaymentsPastDue[type = "checkbox"]');
		var $filterPaymentsPastDueSelect = $formFilters.find('select.valuePaymentsPastDue');
		var filterPaymentsPastDue = $filterPaymentsPastDueSelect.length ? $filterPaymentsPastDueSelect.val() : $filterPaymentsPastDueCheckbox.prop('checked');
		var filterPaymentsPastDueSelectVal = $formFilters.find('select.filterPaymentsPastDue').val();
		var filterPaymentsPastDue = null;
		if(filterPaymentsPastDueSelectVal !== '')
			filterPaymentsPastDue = filterPaymentsPastDueSelectVal == 'true';
		if(filterPaymentsPastDue != null && filterPaymentsPastDue === true)
			filters.push({ name: 'fq', value: 'paymentsPastDue:' + filterPaymentsPastDue });

		var filterPaymentsPastDueAmount = $formFilters.find('.valuePaymentsPastDueAmount').val();
		if(filterPaymentsPastDueAmount != null && filterPaymentsPastDueAmount !== '')
			filters.push({ name: 'fq', value: 'paymentsPastDueAmount:' + filterPaymentsPastDueAmount });

		var $filterChargesCreatedCheckbox = $formFilters.find('input.valueChargesCreated[type = "checkbox"]');
		var $filterChargesCreatedSelect = $formFilters.find('select.valueChargesCreated');
		var filterChargesCreated = $filterChargesCreatedSelect.length ? $filterChargesCreatedSelect.val() : $filterChargesCreatedCheckbox.prop('checked');
		var filterChargesCreatedSelectVal = $formFilters.find('select.filterChargesCreated').val();
		var filterChargesCreated = null;
		if(filterChargesCreatedSelectVal !== '')
			filterChargesCreated = filterChargesCreatedSelectVal == 'true';
		if(filterChargesCreated != null && filterChargesCreated === true)
			filters.push({ name: 'fq', value: 'chargesCreated:' + filterChargesCreated });

		var filterCreatedYear = $formFilters.find('.valueCreatedYear').val();
		if(filterCreatedYear != null && filterCreatedYear !== '')
			filters.push({ name: 'fq', value: 'createdYear:' + filterCreatedYear });

		var filterCreatedDayOfWeek = $formFilters.find('.valueCreatedDayOfWeek').val();
		if(filterCreatedDayOfWeek != null && filterCreatedDayOfWeek !== '')
			filters.push({ name: 'fq', value: 'createdDayOfWeek:' + filterCreatedDayOfWeek });

		var filterCreatedMonthOfYear = $formFilters.find('.valueCreatedMonthOfYear').val();
		if(filterCreatedMonthOfYear != null && filterCreatedMonthOfYear !== '')
			filters.push({ name: 'fq', value: 'createdMonthOfYear:' + filterCreatedMonthOfYear });

		var filterCreatedHourOfDay = $formFilters.find('.valueCreatedHourOfDay').val();
		if(filterCreatedHourOfDay != null && filterCreatedHourOfDay !== '')
			filters.push({ name: 'fq', value: 'createdHourOfDay:' + filterCreatedHourOfDay });

		var filterEnrollmentDaysOfWeek = $formFilters.find('.valueEnrollmentDaysOfWeek').val();
		if(filterEnrollmentDaysOfWeek != null && filterEnrollmentDaysOfWeek !== '')
			filters.push({ name: 'fq', value: 'enrollmentDaysOfWeek:' + filterEnrollmentDaysOfWeek });

		var filterEnrollmentEmails = $formFilters.find('.valueEnrollmentEmails').val();
		if(filterEnrollmentEmails != null && filterEnrollmentEmails !== '')
			filters.push({ name: 'fq', value: 'enrollmentEmails:' + filterEnrollmentEmails });

		var filterEnrollmentEmail = $formFilters.find('.valueEnrollmentEmail').val();
		if(filterEnrollmentEmail != null && filterEnrollmentEmail !== '')
			filters.push({ name: 'fq', value: 'enrollmentEmail:' + filterEnrollmentEmail });

		var filterEnrollmentPhoneNumbers = $formFilters.find('.valueEnrollmentPhoneNumbers').val();
		if(filterEnrollmentPhoneNumbers != null && filterEnrollmentPhoneNumbers !== '')
			filters.push({ name: 'fq', value: 'enrollmentPhoneNumbers:' + filterEnrollmentPhoneNumbers });

		var filterEnrollmentPhoneNumber = $formFilters.find('.valueEnrollmentPhoneNumber').val();
		if(filterEnrollmentPhoneNumber != null && filterEnrollmentPhoneNumber !== '')
			filters.push({ name: 'fq', value: 'enrollmentPhoneNumber:' + filterEnrollmentPhoneNumber });

		var filterEnrollmentParentName = $formFilters.find('.valueEnrollmentParentName').val();
		if(filterEnrollmentParentName != null && filterEnrollmentParentName !== '')
			filters.push({ name: 'fq', value: 'enrollmentParentName:' + filterEnrollmentParentName });

		var filterEnrollmentDate1 = $formFilters.find('.valueEnrollmentDate1').val();
		if(filterEnrollmentDate1 != null && filterEnrollmentDate1 !== '')
			filters.push({ name: 'fq', value: 'enrollmentDate1:' + filterEnrollmentDate1 });

		var filterEnrollmentDate2 = $formFilters.find('.valueEnrollmentDate2').val();
		if(filterEnrollmentDate2 != null && filterEnrollmentDate2 !== '')
			filters.push({ name: 'fq', value: 'enrollmentDate2:' + filterEnrollmentDate2 });

		var filterEnrollmentDate3 = $formFilters.find('.valueEnrollmentDate3').val();
		if(filterEnrollmentDate3 != null && filterEnrollmentDate3 !== '')
			filters.push({ name: 'fq', value: 'enrollmentDate3:' + filterEnrollmentDate3 });

		var filterEnrollmentDate4 = $formFilters.find('.valueEnrollmentDate4').val();
		if(filterEnrollmentDate4 != null && filterEnrollmentDate4 !== '')
			filters.push({ name: 'fq', value: 'enrollmentDate4:' + filterEnrollmentDate4 });

		var filterEnrollmentDate5 = $formFilters.find('.valueEnrollmentDate5').val();
		if(filterEnrollmentDate5 != null && filterEnrollmentDate5 !== '')
			filters.push({ name: 'fq', value: 'enrollmentDate5:' + filterEnrollmentDate5 });

		var filterEnrollmentDate6 = $formFilters.find('.valueEnrollmentDate6').val();
		if(filterEnrollmentDate6 != null && filterEnrollmentDate6 !== '')
			filters.push({ name: 'fq', value: 'enrollmentDate6:' + filterEnrollmentDate6 });

		var filterEnrollmentDate7 = $formFilters.find('.valueEnrollmentDate7').val();
		if(filterEnrollmentDate7 != null && filterEnrollmentDate7 !== '')
			filters.push({ name: 'fq', value: 'enrollmentDate7:' + filterEnrollmentDate7 });

		var filterEnrollmentDate8 = $formFilters.find('.valueEnrollmentDate8').val();
		if(filterEnrollmentDate8 != null && filterEnrollmentDate8 !== '')
			filters.push({ name: 'fq', value: 'enrollmentDate8:' + filterEnrollmentDate8 });

		var filterEnrollmentDate9 = $formFilters.find('.valueEnrollmentDate9').val();
		if(filterEnrollmentDate9 != null && filterEnrollmentDate9 !== '')
			filters.push({ name: 'fq', value: 'enrollmentDate9:' + filterEnrollmentDate9 });

		var filterEnrollmentDate10 = $formFilters.find('.valueEnrollmentDate10').val();
		if(filterEnrollmentDate10 != null && filterEnrollmentDate10 !== '')
			filters.push({ name: 'fq', value: 'enrollmentDate10:' + filterEnrollmentDate10 });

		var filterChildImmunizationsReceived = $formFilters.find('.valueChildImmunizationsReceived').val();
		if(filterChildImmunizationsReceived != null && filterChildImmunizationsReceived !== '')
			filters.push({ name: 'fq', value: 'childImmunizationsReceived:' + filterChildImmunizationsReceived });

		var filterChildPhotosApproved = $formFilters.find('.valueChildPhotosApproved').val();
		if(filterChildPhotosApproved != null && filterChildPhotosApproved !== '')
			filters.push({ name: 'fq', value: 'childPhotosApproved:' + filterChildPhotosApproved });

		var filterEnrollmentCompleteName = $formFilters.find('.valueEnrollmentCompleteName').val();
		if(filterEnrollmentCompleteName != null && filterEnrollmentCompleteName !== '')
			filters.push({ name: 'fq', value: 'enrollmentCompleteName:' + filterEnrollmentCompleteName });
	}
	return filters;
}

function adminpatchSchoolEnrollmentVal(filters, v, val, success, error) {
	var vals = {};
	vals[v] = val;
	adminpatchSchoolEnrollmentVals(filters, vals, success, error);
}

function adminpatchSchoolEnrollmentVals(filters, vals, success, error) {
	$.ajax({
		url: '/api/admin/enrollment?' + $.param(filters)
		, dataType: 'json'
		, type: 'PATCH'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

// PATCHPayments //

async function patchpaymentsSchoolEnrollment($formFilters, $formValues, pk, success, error) {
	var filters = patchpaymentsSchoolEnrollmentFilters($formFilters);

	var vals = {};

	var valuePk = $formValues.find('.valuePk').val();
	var removePk = $formValues.find('.removePk').val() === 'true';
	var setPk = removePk ? null : $formValues.find('.setPk').val();
	var addPk = $formValues.find('.addPk').val();
	if(removePk || setPk != null && setPk !== '')
		vals['setPk'] = setPk;
	if(addPk != null && addPk !== '')
		vals['addPk'] = addPk;
	var removePk = $formValues.find('.removePk').val();
	if(removePk != null && removePk !== '')
		vals['removePk'] = removePk;

	var valueCreated = $formValues.find('.valueCreated').val();
	var removeCreated = $formValues.find('.removeCreated').val() === 'true';
	var setCreated = removeCreated ? null : $formValues.find('.setCreated').val();
	var addCreated = $formValues.find('.addCreated').val();
	if(removeCreated || setCreated != null && setCreated !== '')
		vals['setCreated'] = setCreated;
	if(addCreated != null && addCreated !== '')
		vals['addCreated'] = addCreated;
	var removeCreated = $formValues.find('.removeCreated').val();
	if(removeCreated != null && removeCreated !== '')
		vals['removeCreated'] = removeCreated;

	var valueModified = $formValues.find('.valueModified').val();
	var removeModified = $formValues.find('.removeModified').val() === 'true';
	var setModified = removeModified ? null : $formValues.find('.setModified').val();
	var addModified = $formValues.find('.addModified').val();
	if(removeModified || setModified != null && setModified !== '')
		vals['setModified'] = setModified;
	if(addModified != null && addModified !== '')
		vals['addModified'] = addModified;
	var removeModified = $formValues.find('.removeModified').val();
	if(removeModified != null && removeModified !== '')
		vals['removeModified'] = removeModified;

	var valueObjectId = $formValues.find('.valueObjectId').val();
	var removeObjectId = $formValues.find('.removeObjectId').val() === 'true';
	var setObjectId = removeObjectId ? null : $formValues.find('.setObjectId').val();
	var addObjectId = $formValues.find('.addObjectId').val();
	if(removeObjectId || setObjectId != null && setObjectId !== '')
		vals['setObjectId'] = setObjectId;
	if(addObjectId != null && addObjectId !== '')
		vals['addObjectId'] = addObjectId;
	var removeObjectId = $formValues.find('.removeObjectId').val();
	if(removeObjectId != null && removeObjectId !== '')
		vals['removeObjectId'] = removeObjectId;

	var valueArchived = $formValues.find('.valueArchived').prop('checked');
	var removeArchived = $formValues.find('.removeArchived').val() === 'true';
	var valueArchivedSelectVal = $formValues.find('select.setArchived').val();
	var valueArchived = null;
	if(valueArchivedSelectVal != null && valueArchivedSelectVal !== '')
		valueArchived = valueArchivedSelectVal == 'true';
	var setArchived = removeArchived ? null : valueArchived;
	var addArchived = $formValues.find('.addArchived').prop('checked');
	if(removeArchived || setArchived != null && setArchived !== '')
		vals['setArchived'] = setArchived;
	if(addArchived != null && addArchived !== '')
		vals['addArchived'] = addArchived;
	var removeArchived = $formValues.find('.removeArchived').prop('checked');
	if(removeArchived != null && removeArchived !== '')
		vals['removeArchived'] = removeArchived;

	var valueDeleted = $formValues.find('.valueDeleted').prop('checked');
	var removeDeleted = $formValues.find('.removeDeleted').val() === 'true';
	var valueDeletedSelectVal = $formValues.find('select.setDeleted').val();
	var valueDeleted = null;
	if(valueDeletedSelectVal != null && valueDeletedSelectVal !== '')
		valueDeleted = valueDeletedSelectVal == 'true';
	var setDeleted = removeDeleted ? null : valueDeleted;
	var addDeleted = $formValues.find('.addDeleted').prop('checked');
	if(removeDeleted || setDeleted != null && setDeleted !== '')
		vals['setDeleted'] = setDeleted;
	if(addDeleted != null && addDeleted !== '')
		vals['addDeleted'] = addDeleted;
	var removeDeleted = $formValues.find('.removeDeleted').prop('checked');
	if(removeDeleted != null && removeDeleted !== '')
		vals['removeDeleted'] = removeDeleted;

	var valuePhoto = $formValues.find('.valuePhoto').val();
	var removePhoto = $formValues.find('.removePhoto').val() === 'true';
	var setPhoto = removePhoto ? null : $formValues.find('.setPhoto').val();
	var addPhoto = $formValues.find('.addPhoto').val();
	if(removePhoto || setPhoto != null && setPhoto !== '')
		vals['setPhoto'] = setPhoto;
	if(addPhoto != null && addPhoto !== '')
		vals['addPhoto'] = addPhoto;
	var removePhoto = $formValues.find('.removePhoto').val();
	if(removePhoto != null && removePhoto !== '')
		vals['removePhoto'] = removePhoto;

	var valueEnrollmentGroupName = $formValues.find('.valueEnrollmentGroupName').val();
	var removeEnrollmentGroupName = $formValues.find('.removeEnrollmentGroupName').val() === 'true';
	var setEnrollmentGroupName = removeEnrollmentGroupName ? null : $formValues.find('.setEnrollmentGroupName').val();
	var addEnrollmentGroupName = $formValues.find('.addEnrollmentGroupName').val();
	if(removeEnrollmentGroupName || setEnrollmentGroupName != null && setEnrollmentGroupName !== '')
		vals['setEnrollmentGroupName'] = setEnrollmentGroupName;
	if(addEnrollmentGroupName != null && addEnrollmentGroupName !== '')
		vals['addEnrollmentGroupName'] = addEnrollmentGroupName;
	var removeEnrollmentGroupName = $formValues.find('.removeEnrollmentGroupName').val();
	if(removeEnrollmentGroupName != null && removeEnrollmentGroupName !== '')
		vals['removeEnrollmentGroupName'] = removeEnrollmentGroupName;

	var valueCustomerProfileId = $formValues.find('.valueCustomerProfileId').val();
	var removeCustomerProfileId = $formValues.find('.removeCustomerProfileId').val() === 'true';
	var setCustomerProfileId = removeCustomerProfileId ? null : $formValues.find('.setCustomerProfileId').val();
	var addCustomerProfileId = $formValues.find('.addCustomerProfileId').val();
	if(removeCustomerProfileId || setCustomerProfileId != null && setCustomerProfileId !== '')
		vals['setCustomerProfileId'] = setCustomerProfileId;
	if(addCustomerProfileId != null && addCustomerProfileId !== '')
		vals['addCustomerProfileId'] = addCustomerProfileId;
	var removeCustomerProfileId = $formValues.find('.removeCustomerProfileId').val();
	if(removeCustomerProfileId != null && removeCustomerProfileId !== '')
		vals['removeCustomerProfileId'] = removeCustomerProfileId;

	var valueEnrollmentPaymentComplete = $formValues.find('.valueEnrollmentPaymentComplete').prop('checked');
	var removeEnrollmentPaymentComplete = $formValues.find('.removeEnrollmentPaymentComplete').val() === 'true';
	var valueEnrollmentPaymentCompleteSelectVal = $formValues.find('select.setEnrollmentPaymentComplete').val();
	var valueEnrollmentPaymentComplete = null;
	if(valueEnrollmentPaymentCompleteSelectVal != null && valueEnrollmentPaymentCompleteSelectVal !== '')
		valueEnrollmentPaymentComplete = valueEnrollmentPaymentCompleteSelectVal == 'true';
	var setEnrollmentPaymentComplete = removeEnrollmentPaymentComplete ? null : valueEnrollmentPaymentComplete;
	var addEnrollmentPaymentComplete = $formValues.find('.addEnrollmentPaymentComplete').prop('checked');
	if(removeEnrollmentPaymentComplete || setEnrollmentPaymentComplete != null && setEnrollmentPaymentComplete !== '')
		vals['setEnrollmentPaymentComplete'] = setEnrollmentPaymentComplete;
	if(addEnrollmentPaymentComplete != null && addEnrollmentPaymentComplete !== '')
		vals['addEnrollmentPaymentComplete'] = addEnrollmentPaymentComplete;
	var removeEnrollmentPaymentComplete = $formValues.find('.removeEnrollmentPaymentComplete').prop('checked');
	if(removeEnrollmentPaymentComplete != null && removeEnrollmentPaymentComplete !== '')
		vals['removeEnrollmentPaymentComplete'] = removeEnrollmentPaymentComplete;

	var valueChildPottyTrained = $formValues.find('.valueChildPottyTrained').prop('checked');
	var removeChildPottyTrained = $formValues.find('.removeChildPottyTrained').val() === 'true';
	var valueChildPottyTrainedSelectVal = $formValues.find('select.setChildPottyTrained').val();
	var valueChildPottyTrained = null;
	if(valueChildPottyTrainedSelectVal != null && valueChildPottyTrainedSelectVal !== '')
		valueChildPottyTrained = valueChildPottyTrainedSelectVal == 'true';
	var setChildPottyTrained = removeChildPottyTrained ? null : valueChildPottyTrained;
	var addChildPottyTrained = $formValues.find('.addChildPottyTrained').prop('checked');
	if(removeChildPottyTrained || setChildPottyTrained != null && setChildPottyTrained !== '')
		vals['setChildPottyTrained'] = setChildPottyTrained;
	if(addChildPottyTrained != null && addChildPottyTrained !== '')
		vals['addChildPottyTrained'] = addChildPottyTrained;
	var removeChildPottyTrained = $formValues.find('.removeChildPottyTrained').prop('checked');
	if(removeChildPottyTrained != null && removeChildPottyTrained !== '')
		vals['removeChildPottyTrained'] = removeChildPottyTrained;

	var valueEnrollmentPaymentEachMonth = $formValues.find('.valueEnrollmentPaymentEachMonth').prop('checked');
	var removeEnrollmentPaymentEachMonth = $formValues.find('.removeEnrollmentPaymentEachMonth').val() === 'true';
	var valueEnrollmentPaymentEachMonthSelectVal = $formValues.find('select.setEnrollmentPaymentEachMonth').val();
	var valueEnrollmentPaymentEachMonth = null;
	if(valueEnrollmentPaymentEachMonthSelectVal != null && valueEnrollmentPaymentEachMonthSelectVal !== '')
		valueEnrollmentPaymentEachMonth = valueEnrollmentPaymentEachMonthSelectVal == 'true';
	var setEnrollmentPaymentEachMonth = removeEnrollmentPaymentEachMonth ? null : valueEnrollmentPaymentEachMonth;
	var addEnrollmentPaymentEachMonth = $formValues.find('.addEnrollmentPaymentEachMonth').prop('checked');
	if(removeEnrollmentPaymentEachMonth || setEnrollmentPaymentEachMonth != null && setEnrollmentPaymentEachMonth !== '')
		vals['setEnrollmentPaymentEachMonth'] = setEnrollmentPaymentEachMonth;
	if(addEnrollmentPaymentEachMonth != null && addEnrollmentPaymentEachMonth !== '')
		vals['addEnrollmentPaymentEachMonth'] = addEnrollmentPaymentEachMonth;
	var removeEnrollmentPaymentEachMonth = $formValues.find('.removeEnrollmentPaymentEachMonth').prop('checked');
	if(removeEnrollmentPaymentEachMonth != null && removeEnrollmentPaymentEachMonth !== '')
		vals['removeEnrollmentPaymentEachMonth'] = removeEnrollmentPaymentEachMonth;

	var valueEnrollmentImmunizations = $formValues.find('.valueEnrollmentImmunizations').prop('checked');
	var removeEnrollmentImmunizations = $formValues.find('.removeEnrollmentImmunizations').val() === 'true';
	var valueEnrollmentImmunizationsSelectVal = $formValues.find('select.setEnrollmentImmunizations').val();
	var valueEnrollmentImmunizations = null;
	if(valueEnrollmentImmunizationsSelectVal != null && valueEnrollmentImmunizationsSelectVal !== '')
		valueEnrollmentImmunizations = valueEnrollmentImmunizationsSelectVal == 'true';
	var setEnrollmentImmunizations = removeEnrollmentImmunizations ? null : valueEnrollmentImmunizations;
	var addEnrollmentImmunizations = $formValues.find('.addEnrollmentImmunizations').prop('checked');
	if(removeEnrollmentImmunizations || setEnrollmentImmunizations != null && setEnrollmentImmunizations !== '')
		vals['setEnrollmentImmunizations'] = setEnrollmentImmunizations;
	if(addEnrollmentImmunizations != null && addEnrollmentImmunizations !== '')
		vals['addEnrollmentImmunizations'] = addEnrollmentImmunizations;
	var removeEnrollmentImmunizations = $formValues.find('.removeEnrollmentImmunizations').prop('checked');
	if(removeEnrollmentImmunizations != null && removeEnrollmentImmunizations !== '')
		vals['removeEnrollmentImmunizations'] = removeEnrollmentImmunizations;

	var valueEnrollmentApproved = $formValues.find('.valueEnrollmentApproved').prop('checked');
	var removeEnrollmentApproved = $formValues.find('.removeEnrollmentApproved').val() === 'true';
	var valueEnrollmentApprovedSelectVal = $formValues.find('select.setEnrollmentApproved').val();
	var valueEnrollmentApproved = null;
	if(valueEnrollmentApprovedSelectVal != null && valueEnrollmentApprovedSelectVal !== '')
		valueEnrollmentApproved = valueEnrollmentApprovedSelectVal == 'true';
	var setEnrollmentApproved = removeEnrollmentApproved ? null : valueEnrollmentApproved;
	var addEnrollmentApproved = $formValues.find('.addEnrollmentApproved').prop('checked');
	if(removeEnrollmentApproved || setEnrollmentApproved != null && setEnrollmentApproved !== '')
		vals['setEnrollmentApproved'] = setEnrollmentApproved;
	if(addEnrollmentApproved != null && addEnrollmentApproved !== '')
		vals['addEnrollmentApproved'] = addEnrollmentApproved;
	var removeEnrollmentApproved = $formValues.find('.removeEnrollmentApproved').prop('checked');
	if(removeEnrollmentApproved != null && removeEnrollmentApproved !== '')
		vals['removeEnrollmentApproved'] = removeEnrollmentApproved;

	var valueFamilyMarried = $formValues.find('.valueFamilyMarried').prop('checked');
	var removeFamilyMarried = $formValues.find('.removeFamilyMarried').val() === 'true';
	var valueFamilyMarriedSelectVal = $formValues.find('select.setFamilyMarried').val();
	var valueFamilyMarried = null;
	if(valueFamilyMarriedSelectVal != null && valueFamilyMarriedSelectVal !== '')
		valueFamilyMarried = valueFamilyMarriedSelectVal == 'true';
	var setFamilyMarried = removeFamilyMarried ? null : valueFamilyMarried;
	var addFamilyMarried = $formValues.find('.addFamilyMarried').prop('checked');
	if(removeFamilyMarried || setFamilyMarried != null && setFamilyMarried !== '')
		vals['setFamilyMarried'] = setFamilyMarried;
	if(addFamilyMarried != null && addFamilyMarried !== '')
		vals['addFamilyMarried'] = addFamilyMarried;
	var removeFamilyMarried = $formValues.find('.removeFamilyMarried').prop('checked');
	if(removeFamilyMarried != null && removeFamilyMarried !== '')
		vals['removeFamilyMarried'] = removeFamilyMarried;

	var valueFamilySeparated = $formValues.find('.valueFamilySeparated').prop('checked');
	var removeFamilySeparated = $formValues.find('.removeFamilySeparated').val() === 'true';
	var valueFamilySeparatedSelectVal = $formValues.find('select.setFamilySeparated').val();
	var valueFamilySeparated = null;
	if(valueFamilySeparatedSelectVal != null && valueFamilySeparatedSelectVal !== '')
		valueFamilySeparated = valueFamilySeparatedSelectVal == 'true';
	var setFamilySeparated = removeFamilySeparated ? null : valueFamilySeparated;
	var addFamilySeparated = $formValues.find('.addFamilySeparated').prop('checked');
	if(removeFamilySeparated || setFamilySeparated != null && setFamilySeparated !== '')
		vals['setFamilySeparated'] = setFamilySeparated;
	if(addFamilySeparated != null && addFamilySeparated !== '')
		vals['addFamilySeparated'] = addFamilySeparated;
	var removeFamilySeparated = $formValues.find('.removeFamilySeparated').prop('checked');
	if(removeFamilySeparated != null && removeFamilySeparated !== '')
		vals['removeFamilySeparated'] = removeFamilySeparated;

	var valueFamilyDivorced = $formValues.find('.valueFamilyDivorced').prop('checked');
	var removeFamilyDivorced = $formValues.find('.removeFamilyDivorced').val() === 'true';
	var valueFamilyDivorcedSelectVal = $formValues.find('select.setFamilyDivorced').val();
	var valueFamilyDivorced = null;
	if(valueFamilyDivorcedSelectVal != null && valueFamilyDivorcedSelectVal !== '')
		valueFamilyDivorced = valueFamilyDivorcedSelectVal == 'true';
	var setFamilyDivorced = removeFamilyDivorced ? null : valueFamilyDivorced;
	var addFamilyDivorced = $formValues.find('.addFamilyDivorced').prop('checked');
	if(removeFamilyDivorced || setFamilyDivorced != null && setFamilyDivorced !== '')
		vals['setFamilyDivorced'] = setFamilyDivorced;
	if(addFamilyDivorced != null && addFamilyDivorced !== '')
		vals['addFamilyDivorced'] = addFamilyDivorced;
	var removeFamilyDivorced = $formValues.find('.removeFamilyDivorced').prop('checked');
	if(removeFamilyDivorced != null && removeFamilyDivorced !== '')
		vals['removeFamilyDivorced'] = removeFamilyDivorced;

	var valueFamilyAddress = $formValues.find('.valueFamilyAddress').val();
	var removeFamilyAddress = $formValues.find('.removeFamilyAddress').val() === 'true';
	var setFamilyAddress = removeFamilyAddress ? null : $formValues.find('.setFamilyAddress').val();
	var addFamilyAddress = $formValues.find('.addFamilyAddress').val();
	if(removeFamilyAddress || setFamilyAddress != null && setFamilyAddress !== '')
		vals['setFamilyAddress'] = setFamilyAddress;
	if(addFamilyAddress != null && addFamilyAddress !== '')
		vals['addFamilyAddress'] = addFamilyAddress;
	var removeFamilyAddress = $formValues.find('.removeFamilyAddress').val();
	if(removeFamilyAddress != null && removeFamilyAddress !== '')
		vals['removeFamilyAddress'] = removeFamilyAddress;

	var valueEnrollmentSpecialConsiderations = $formValues.find('.valueEnrollmentSpecialConsiderations').val();
	var removeEnrollmentSpecialConsiderations = $formValues.find('.removeEnrollmentSpecialConsiderations').val() === 'true';
	var setEnrollmentSpecialConsiderations = removeEnrollmentSpecialConsiderations ? null : $formValues.find('.setEnrollmentSpecialConsiderations').val();
	var addEnrollmentSpecialConsiderations = $formValues.find('.addEnrollmentSpecialConsiderations').val();
	if(removeEnrollmentSpecialConsiderations || setEnrollmentSpecialConsiderations != null && setEnrollmentSpecialConsiderations !== '')
		vals['setEnrollmentSpecialConsiderations'] = setEnrollmentSpecialConsiderations;
	if(addEnrollmentSpecialConsiderations != null && addEnrollmentSpecialConsiderations !== '')
		vals['addEnrollmentSpecialConsiderations'] = addEnrollmentSpecialConsiderations;
	var removeEnrollmentSpecialConsiderations = $formValues.find('.removeEnrollmentSpecialConsiderations').val();
	if(removeEnrollmentSpecialConsiderations != null && removeEnrollmentSpecialConsiderations !== '')
		vals['removeEnrollmentSpecialConsiderations'] = removeEnrollmentSpecialConsiderations;

	var valueChildMedicalConditions = $formValues.find('.valueChildMedicalConditions').val();
	var removeChildMedicalConditions = $formValues.find('.removeChildMedicalConditions').val() === 'true';
	var setChildMedicalConditions = removeChildMedicalConditions ? null : $formValues.find('.setChildMedicalConditions').val();
	var addChildMedicalConditions = $formValues.find('.addChildMedicalConditions').val();
	if(removeChildMedicalConditions || setChildMedicalConditions != null && setChildMedicalConditions !== '')
		vals['setChildMedicalConditions'] = setChildMedicalConditions;
	if(addChildMedicalConditions != null && addChildMedicalConditions !== '')
		vals['addChildMedicalConditions'] = addChildMedicalConditions;
	var removeChildMedicalConditions = $formValues.find('.removeChildMedicalConditions').val();
	if(removeChildMedicalConditions != null && removeChildMedicalConditions !== '')
		vals['removeChildMedicalConditions'] = removeChildMedicalConditions;

	var valueChildPreviousSchoolsAttended = $formValues.find('.valueChildPreviousSchoolsAttended').val();
	var removeChildPreviousSchoolsAttended = $formValues.find('.removeChildPreviousSchoolsAttended').val() === 'true';
	var setChildPreviousSchoolsAttended = removeChildPreviousSchoolsAttended ? null : $formValues.find('.setChildPreviousSchoolsAttended').val();
	var addChildPreviousSchoolsAttended = $formValues.find('.addChildPreviousSchoolsAttended').val();
	if(removeChildPreviousSchoolsAttended || setChildPreviousSchoolsAttended != null && setChildPreviousSchoolsAttended !== '')
		vals['setChildPreviousSchoolsAttended'] = setChildPreviousSchoolsAttended;
	if(addChildPreviousSchoolsAttended != null && addChildPreviousSchoolsAttended !== '')
		vals['addChildPreviousSchoolsAttended'] = addChildPreviousSchoolsAttended;
	var removeChildPreviousSchoolsAttended = $formValues.find('.removeChildPreviousSchoolsAttended').val();
	if(removeChildPreviousSchoolsAttended != null && removeChildPreviousSchoolsAttended !== '')
		vals['removeChildPreviousSchoolsAttended'] = removeChildPreviousSchoolsAttended;

	var valueFamilyHowDoYouKnowTheSchool = $formValues.find('.valueFamilyHowDoYouKnowTheSchool').val();
	var removeFamilyHowDoYouKnowTheSchool = $formValues.find('.removeFamilyHowDoYouKnowTheSchool').val() === 'true';
	var setFamilyHowDoYouKnowTheSchool = removeFamilyHowDoYouKnowTheSchool ? null : $formValues.find('.setFamilyHowDoYouKnowTheSchool').val();
	var addFamilyHowDoYouKnowTheSchool = $formValues.find('.addFamilyHowDoYouKnowTheSchool').val();
	if(removeFamilyHowDoYouKnowTheSchool || setFamilyHowDoYouKnowTheSchool != null && setFamilyHowDoYouKnowTheSchool !== '')
		vals['setFamilyHowDoYouKnowTheSchool'] = setFamilyHowDoYouKnowTheSchool;
	if(addFamilyHowDoYouKnowTheSchool != null && addFamilyHowDoYouKnowTheSchool !== '')
		vals['addFamilyHowDoYouKnowTheSchool'] = addFamilyHowDoYouKnowTheSchool;
	var removeFamilyHowDoYouKnowTheSchool = $formValues.find('.removeFamilyHowDoYouKnowTheSchool').val();
	if(removeFamilyHowDoYouKnowTheSchool != null && removeFamilyHowDoYouKnowTheSchool !== '')
		vals['removeFamilyHowDoYouKnowTheSchool'] = removeFamilyHowDoYouKnowTheSchool;

	var valueChildDescription = $formValues.find('.valueChildDescription').val();
	var removeChildDescription = $formValues.find('.removeChildDescription').val() === 'true';
	var setChildDescription = removeChildDescription ? null : $formValues.find('.setChildDescription').val();
	var addChildDescription = $formValues.find('.addChildDescription').val();
	if(removeChildDescription || setChildDescription != null && setChildDescription !== '')
		vals['setChildDescription'] = setChildDescription;
	if(addChildDescription != null && addChildDescription !== '')
		vals['addChildDescription'] = addChildDescription;
	var removeChildDescription = $formValues.find('.removeChildDescription').val();
	if(removeChildDescription != null && removeChildDescription !== '')
		vals['removeChildDescription'] = removeChildDescription;

	var valueChildObjectives = $formValues.find('.valueChildObjectives').val();
	var removeChildObjectives = $formValues.find('.removeChildObjectives').val() === 'true';
	var setChildObjectives = removeChildObjectives ? null : $formValues.find('.setChildObjectives').val();
	var addChildObjectives = $formValues.find('.addChildObjectives').val();
	if(removeChildObjectives || setChildObjectives != null && setChildObjectives !== '')
		vals['setChildObjectives'] = setChildObjectives;
	if(addChildObjectives != null && addChildObjectives !== '')
		vals['addChildObjectives'] = addChildObjectives;
	var removeChildObjectives = $formValues.find('.removeChildObjectives').val();
	if(removeChildObjectives != null && removeChildObjectives !== '')
		vals['removeChildObjectives'] = removeChildObjectives;

	var valueYearKey = $formValues.find('input.valueYearKey:checked').val();
	if(valueYearKey != null && valueYearKey !== '')
		vals['setYearKey'] = valueYearKey;

	var valueBlockKeys = $formValues.find('input.valueBlockKeys:checked').val();
	if(valueBlockKeys != null && valueBlockKeys !== '')
		vals['addBlockKeys'] = valueBlockKeys;

	var valueChildKey = $formValues.find('input.valueChildKey:checked').val();
	if(valueChildKey != null && valueChildKey !== '')
		vals['setChildKey'] = valueChildKey;

	var valueGuardianKeys = $formValues.find('input.valueGuardianKeys:checked').val();
	if(valueGuardianKeys != null && valueGuardianKeys !== '')
		vals['addGuardianKeys'] = valueGuardianKeys;

	var valueMomKeys = $formValues.find('input.valueMomKeys:checked').val();
	if(valueMomKeys != null && valueMomKeys !== '')
		vals['addMomKeys'] = valueMomKeys;

	var valueDadKeys = $formValues.find('input.valueDadKeys:checked').val();
	if(valueDadKeys != null && valueDadKeys !== '')
		vals['addDadKeys'] = valueDadKeys;

	var valueUserKeys = $formValues.find('input.valueUserKeys:checked').val();
	if(valueUserKeys != null && valueUserKeys !== '')
		vals['addUserKeys'] = valueUserKeys;

	var valuePaymentKeys = $formValues.find('input.valuePaymentKeys:checked').val();
	if(valuePaymentKeys != null && valuePaymentKeys !== '')
		vals['addPaymentKeys'] = valuePaymentKeys;

	var valueInheritPk = $formValues.find('.valueInheritPk').val();
	var removeInheritPk = $formValues.find('.removeInheritPk').val() === 'true';
	var setInheritPk = removeInheritPk ? null : $formValues.find('.setInheritPk').val();
	var addInheritPk = $formValues.find('.addInheritPk').val();
	if(removeInheritPk || setInheritPk != null && setInheritPk !== '')
		vals['setInheritPk'] = setInheritPk;
	if(addInheritPk != null && addInheritPk !== '')
		vals['addInheritPk'] = addInheritPk;
	var removeInheritPk = $formValues.find('.removeInheritPk').val();
	if(removeInheritPk != null && removeInheritPk !== '')
		vals['removeInheritPk'] = removeInheritPk;

	var valueSessionId = $formValues.find('.valueSessionId').val();
	var removeSessionId = $formValues.find('.removeSessionId').val() === 'true';
	var setSessionId = removeSessionId ? null : $formValues.find('.setSessionId').val();
	var addSessionId = $formValues.find('.addSessionId').val();
	if(removeSessionId || setSessionId != null && setSessionId !== '')
		vals['setSessionId'] = setSessionId;
	if(addSessionId != null && addSessionId !== '')
		vals['addSessionId'] = addSessionId;
	var removeSessionId = $formValues.find('.removeSessionId').val();
	if(removeSessionId != null && removeSessionId !== '')
		vals['removeSessionId'] = removeSessionId;

	var valueUserId = $formValues.find('.valueUserId').val();
	var removeUserId = $formValues.find('.removeUserId').val() === 'true';
	var setUserId = removeUserId ? null : $formValues.find('.setUserId').val();
	var addUserId = $formValues.find('.addUserId').val();
	if(removeUserId || setUserId != null && setUserId !== '')
		vals['setUserId'] = setUserId;
	if(addUserId != null && addUserId !== '')
		vals['addUserId'] = addUserId;
	var removeUserId = $formValues.find('.removeUserId').val();
	if(removeUserId != null && removeUserId !== '')
		vals['removeUserId'] = removeUserId;

	var valueUserKey = $formValues.find('.valueUserKey').val();
	var removeUserKey = $formValues.find('.removeUserKey').val() === 'true';
	var setUserKey = removeUserKey ? null : $formValues.find('.setUserKey').val();
	var addUserKey = $formValues.find('.addUserKey').val();
	if(removeUserKey || setUserKey != null && setUserKey !== '')
		vals['setUserKey'] = setUserKey;
	if(addUserKey != null && addUserKey !== '')
		vals['addUserKey'] = addUserKey;
	var removeUserKey = $formValues.find('.removeUserKey').val();
	if(removeUserKey != null && removeUserKey !== '')
		vals['removeUserKey'] = removeUserKey;

	var valueObjectTitle = $formValues.find('.valueObjectTitle').val();
	var removeObjectTitle = $formValues.find('.removeObjectTitle').val() === 'true';
	var setObjectTitle = removeObjectTitle ? null : $formValues.find('.setObjectTitle').val();
	var addObjectTitle = $formValues.find('.addObjectTitle').val();
	if(removeObjectTitle || setObjectTitle != null && setObjectTitle !== '')
		vals['setObjectTitle'] = setObjectTitle;
	if(addObjectTitle != null && addObjectTitle !== '')
		vals['addObjectTitle'] = addObjectTitle;
	var removeObjectTitle = $formValues.find('.removeObjectTitle').val();
	if(removeObjectTitle != null && removeObjectTitle !== '')
		vals['removeObjectTitle'] = removeObjectTitle;

	var valueChildCompleteName = $formValues.find('.valueChildCompleteName').val();
	var removeChildCompleteName = $formValues.find('.removeChildCompleteName').val() === 'true';
	var setChildCompleteName = removeChildCompleteName ? null : $formValues.find('.setChildCompleteName').val();
	var addChildCompleteName = $formValues.find('.addChildCompleteName').val();
	if(removeChildCompleteName || setChildCompleteName != null && setChildCompleteName !== '')
		vals['setChildCompleteName'] = setChildCompleteName;
	if(addChildCompleteName != null && addChildCompleteName !== '')
		vals['addChildCompleteName'] = addChildCompleteName;
	var removeChildCompleteName = $formValues.find('.removeChildCompleteName').val();
	if(removeChildCompleteName != null && removeChildCompleteName !== '')
		vals['removeChildCompleteName'] = removeChildCompleteName;

	var valueChildCompleteNamePreferred = $formValues.find('.valueChildCompleteNamePreferred').val();
	var removeChildCompleteNamePreferred = $formValues.find('.removeChildCompleteNamePreferred').val() === 'true';
	var setChildCompleteNamePreferred = removeChildCompleteNamePreferred ? null : $formValues.find('.setChildCompleteNamePreferred').val();
	var addChildCompleteNamePreferred = $formValues.find('.addChildCompleteNamePreferred').val();
	if(removeChildCompleteNamePreferred || setChildCompleteNamePreferred != null && setChildCompleteNamePreferred !== '')
		vals['setChildCompleteNamePreferred'] = setChildCompleteNamePreferred;
	if(addChildCompleteNamePreferred != null && addChildCompleteNamePreferred !== '')
		vals['addChildCompleteNamePreferred'] = addChildCompleteNamePreferred;
	var removeChildCompleteNamePreferred = $formValues.find('.removeChildCompleteNamePreferred').val();
	if(removeChildCompleteNamePreferred != null && removeChildCompleteNamePreferred !== '')
		vals['removeChildCompleteNamePreferred'] = removeChildCompleteNamePreferred;

	var valueChildBirthDate = $formValues.find('.valueChildBirthDate').val();
	var removeChildBirthDate = $formValues.find('.removeChildBirthDate').val() === 'true';
	var setChildBirthDate = removeChildBirthDate ? null : $formValues.find('.setChildBirthDate').val();
	var addChildBirthDate = $formValues.find('.addChildBirthDate').val();
	var setMoment = setChildBirthDate ? moment(setChildBirthDate, 'MM/DD/YYYY') : null; 
	var addMoment = addChildBirthDate ? moment(addChildBirthDate, 'MM/DD/YYYY') : null; 
	if(setMoment) { 
		var s = setMoment.format('YYYY-MM-DD'); 
		setChildBirthDate = s;
	} 
	if(addMoment) { 
		var s = addMoment.format('YYYY-MM-DD'); 
		addChildBirthDate = s;
	} 
	if(removeChildBirthDate || setChildBirthDate != null && setChildBirthDate !== '')
		vals['setChildBirthDate'] = setChildBirthDate;
	if(addChildBirthDate != null && addChildBirthDate !== '')
		vals['addChildBirthDate'] = addChildBirthDate;
	var removeChildBirthDate = $formValues.find('.removeChildBirthDate').val();
	if(removeChildBirthDate != null && removeChildBirthDate !== '')
		vals['removeChildBirthDate'] = removeChildBirthDate;

	var valueSchoolAddress = $formValues.find('.valueSchoolAddress').val();
	var removeSchoolAddress = $formValues.find('.removeSchoolAddress').val() === 'true';
	var setSchoolAddress = removeSchoolAddress ? null : $formValues.find('.setSchoolAddress').val();
	var addSchoolAddress = $formValues.find('.addSchoolAddress').val();
	if(removeSchoolAddress || setSchoolAddress != null && setSchoolAddress !== '')
		vals['setSchoolAddress'] = setSchoolAddress;
	if(addSchoolAddress != null && addSchoolAddress !== '')
		vals['addSchoolAddress'] = addSchoolAddress;
	var removeSchoolAddress = $formValues.find('.removeSchoolAddress').val();
	if(removeSchoolAddress != null && removeSchoolAddress !== '')
		vals['removeSchoolAddress'] = removeSchoolAddress;

	var valueEnrollmentChargeDate = $formValues.find('.valueEnrollmentChargeDate').val();
	var removeEnrollmentChargeDate = $formValues.find('.removeEnrollmentChargeDate').val() === 'true';
	var setEnrollmentChargeDate = removeEnrollmentChargeDate ? null : $formValues.find('.setEnrollmentChargeDate').val();
	var addEnrollmentChargeDate = $formValues.find('.addEnrollmentChargeDate').val();
	var setMoment = setEnrollmentChargeDate ? moment(setEnrollmentChargeDate, 'MM/DD/YYYY') : null; 
	var addMoment = addEnrollmentChargeDate ? moment(addEnrollmentChargeDate, 'MM/DD/YYYY') : null; 
	if(setMoment) { 
		var s = setMoment.format('YYYY-MM-DD'); 
		setEnrollmentChargeDate = s;
	} 
	if(addMoment) { 
		var s = addMoment.format('YYYY-MM-DD'); 
		addEnrollmentChargeDate = s;
	} 
	if(removeEnrollmentChargeDate || setEnrollmentChargeDate != null && setEnrollmentChargeDate !== '')
		vals['setEnrollmentChargeDate'] = setEnrollmentChargeDate;
	if(addEnrollmentChargeDate != null && addEnrollmentChargeDate !== '')
		vals['addEnrollmentChargeDate'] = addEnrollmentChargeDate;
	var removeEnrollmentChargeDate = $formValues.find('.removeEnrollmentChargeDate').val();
	if(removeEnrollmentChargeDate != null && removeEnrollmentChargeDate !== '')
		vals['removeEnrollmentChargeDate'] = removeEnrollmentChargeDate;

	var valueEnrollmentParentNames = $formValues.find('.valueEnrollmentParentNames').val();
	var removeEnrollmentParentNames = $formValues.find('.removeEnrollmentParentNames').val() === 'true';
	var setEnrollmentParentNames = removeEnrollmentParentNames ? null : $formValues.find('.setEnrollmentParentNames').val();
	var addEnrollmentParentNames = $formValues.find('.addEnrollmentParentNames').val();
	if(removeEnrollmentParentNames || setEnrollmentParentNames != null && setEnrollmentParentNames !== '')
		vals['setEnrollmentParentNames'] = setEnrollmentParentNames;
	if(addEnrollmentParentNames != null && addEnrollmentParentNames !== '')
		vals['addEnrollmentParentNames'] = addEnrollmentParentNames;
	var removeEnrollmentParentNames = $formValues.find('.removeEnrollmentParentNames').val();
	if(removeEnrollmentParentNames != null && removeEnrollmentParentNames !== '')
		vals['removeEnrollmentParentNames'] = removeEnrollmentParentNames;

	var valueEnrollmentSignature1 = $formValues.find('.valueEnrollmentSignature1').val();
	var removeEnrollmentSignature1 = $formValues.find('.removeEnrollmentSignature1').val() === 'true';
	var setEnrollmentSignature1 = removeEnrollmentSignature1 ? null : $formValues.find('.setEnrollmentSignature1').val();
	var addEnrollmentSignature1 = $formValues.find('.addEnrollmentSignature1').val();
	if(removeEnrollmentSignature1 || setEnrollmentSignature1 != null && setEnrollmentSignature1 !== '')
		vals['setEnrollmentSignature1'] = setEnrollmentSignature1;
	if(addEnrollmentSignature1 != null && addEnrollmentSignature1 !== '')
		vals['addEnrollmentSignature1'] = addEnrollmentSignature1;
	var removeEnrollmentSignature1 = $formValues.find('.removeEnrollmentSignature1').val();
	if(removeEnrollmentSignature1 != null && removeEnrollmentSignature1 !== '')
		vals['removeEnrollmentSignature1'] = removeEnrollmentSignature1;

	var valueEnrollmentSignature2 = $formValues.find('.valueEnrollmentSignature2').val();
	var removeEnrollmentSignature2 = $formValues.find('.removeEnrollmentSignature2').val() === 'true';
	var setEnrollmentSignature2 = removeEnrollmentSignature2 ? null : $formValues.find('.setEnrollmentSignature2').val();
	var addEnrollmentSignature2 = $formValues.find('.addEnrollmentSignature2').val();
	if(removeEnrollmentSignature2 || setEnrollmentSignature2 != null && setEnrollmentSignature2 !== '')
		vals['setEnrollmentSignature2'] = setEnrollmentSignature2;
	if(addEnrollmentSignature2 != null && addEnrollmentSignature2 !== '')
		vals['addEnrollmentSignature2'] = addEnrollmentSignature2;
	var removeEnrollmentSignature2 = $formValues.find('.removeEnrollmentSignature2').val();
	if(removeEnrollmentSignature2 != null && removeEnrollmentSignature2 !== '')
		vals['removeEnrollmentSignature2'] = removeEnrollmentSignature2;

	var valueEnrollmentSignature3 = $formValues.find('.valueEnrollmentSignature3').val();
	var removeEnrollmentSignature3 = $formValues.find('.removeEnrollmentSignature3').val() === 'true';
	var setEnrollmentSignature3 = removeEnrollmentSignature3 ? null : $formValues.find('.setEnrollmentSignature3').val();
	var addEnrollmentSignature3 = $formValues.find('.addEnrollmentSignature3').val();
	if(removeEnrollmentSignature3 || setEnrollmentSignature3 != null && setEnrollmentSignature3 !== '')
		vals['setEnrollmentSignature3'] = setEnrollmentSignature3;
	if(addEnrollmentSignature3 != null && addEnrollmentSignature3 !== '')
		vals['addEnrollmentSignature3'] = addEnrollmentSignature3;
	var removeEnrollmentSignature3 = $formValues.find('.removeEnrollmentSignature3').val();
	if(removeEnrollmentSignature3 != null && removeEnrollmentSignature3 !== '')
		vals['removeEnrollmentSignature3'] = removeEnrollmentSignature3;

	var valueEnrollmentSignature4 = $formValues.find('.valueEnrollmentSignature4').val();
	var removeEnrollmentSignature4 = $formValues.find('.removeEnrollmentSignature4').val() === 'true';
	var setEnrollmentSignature4 = removeEnrollmentSignature4 ? null : $formValues.find('.setEnrollmentSignature4').val();
	var addEnrollmentSignature4 = $formValues.find('.addEnrollmentSignature4').val();
	if(removeEnrollmentSignature4 || setEnrollmentSignature4 != null && setEnrollmentSignature4 !== '')
		vals['setEnrollmentSignature4'] = setEnrollmentSignature4;
	if(addEnrollmentSignature4 != null && addEnrollmentSignature4 !== '')
		vals['addEnrollmentSignature4'] = addEnrollmentSignature4;
	var removeEnrollmentSignature4 = $formValues.find('.removeEnrollmentSignature4').val();
	if(removeEnrollmentSignature4 != null && removeEnrollmentSignature4 !== '')
		vals['removeEnrollmentSignature4'] = removeEnrollmentSignature4;

	var valueEnrollmentSignature5 = $formValues.find('.valueEnrollmentSignature5').val();
	var removeEnrollmentSignature5 = $formValues.find('.removeEnrollmentSignature5').val() === 'true';
	var setEnrollmentSignature5 = removeEnrollmentSignature5 ? null : $formValues.find('.setEnrollmentSignature5').val();
	var addEnrollmentSignature5 = $formValues.find('.addEnrollmentSignature5').val();
	if(removeEnrollmentSignature5 || setEnrollmentSignature5 != null && setEnrollmentSignature5 !== '')
		vals['setEnrollmentSignature5'] = setEnrollmentSignature5;
	if(addEnrollmentSignature5 != null && addEnrollmentSignature5 !== '')
		vals['addEnrollmentSignature5'] = addEnrollmentSignature5;
	var removeEnrollmentSignature5 = $formValues.find('.removeEnrollmentSignature5').val();
	if(removeEnrollmentSignature5 != null && removeEnrollmentSignature5 !== '')
		vals['removeEnrollmentSignature5'] = removeEnrollmentSignature5;

	var valueEnrollmentSignature6 = $formValues.find('.valueEnrollmentSignature6').val();
	var removeEnrollmentSignature6 = $formValues.find('.removeEnrollmentSignature6').val() === 'true';
	var setEnrollmentSignature6 = removeEnrollmentSignature6 ? null : $formValues.find('.setEnrollmentSignature6').val();
	var addEnrollmentSignature6 = $formValues.find('.addEnrollmentSignature6').val();
	if(removeEnrollmentSignature6 || setEnrollmentSignature6 != null && setEnrollmentSignature6 !== '')
		vals['setEnrollmentSignature6'] = setEnrollmentSignature6;
	if(addEnrollmentSignature6 != null && addEnrollmentSignature6 !== '')
		vals['addEnrollmentSignature6'] = addEnrollmentSignature6;
	var removeEnrollmentSignature6 = $formValues.find('.removeEnrollmentSignature6').val();
	if(removeEnrollmentSignature6 != null && removeEnrollmentSignature6 !== '')
		vals['removeEnrollmentSignature6'] = removeEnrollmentSignature6;

	var valueEnrollmentSignature7 = $formValues.find('.valueEnrollmentSignature7').val();
	var removeEnrollmentSignature7 = $formValues.find('.removeEnrollmentSignature7').val() === 'true';
	var setEnrollmentSignature7 = removeEnrollmentSignature7 ? null : $formValues.find('.setEnrollmentSignature7').val();
	var addEnrollmentSignature7 = $formValues.find('.addEnrollmentSignature7').val();
	if(removeEnrollmentSignature7 || setEnrollmentSignature7 != null && setEnrollmentSignature7 !== '')
		vals['setEnrollmentSignature7'] = setEnrollmentSignature7;
	if(addEnrollmentSignature7 != null && addEnrollmentSignature7 !== '')
		vals['addEnrollmentSignature7'] = addEnrollmentSignature7;
	var removeEnrollmentSignature7 = $formValues.find('.removeEnrollmentSignature7').val();
	if(removeEnrollmentSignature7 != null && removeEnrollmentSignature7 !== '')
		vals['removeEnrollmentSignature7'] = removeEnrollmentSignature7;

	var valueEnrollmentSignature8 = $formValues.find('.valueEnrollmentSignature8').val();
	var removeEnrollmentSignature8 = $formValues.find('.removeEnrollmentSignature8').val() === 'true';
	var setEnrollmentSignature8 = removeEnrollmentSignature8 ? null : $formValues.find('.setEnrollmentSignature8').val();
	var addEnrollmentSignature8 = $formValues.find('.addEnrollmentSignature8').val();
	if(removeEnrollmentSignature8 || setEnrollmentSignature8 != null && setEnrollmentSignature8 !== '')
		vals['setEnrollmentSignature8'] = setEnrollmentSignature8;
	if(addEnrollmentSignature8 != null && addEnrollmentSignature8 !== '')
		vals['addEnrollmentSignature8'] = addEnrollmentSignature8;
	var removeEnrollmentSignature8 = $formValues.find('.removeEnrollmentSignature8').val();
	if(removeEnrollmentSignature8 != null && removeEnrollmentSignature8 !== '')
		vals['removeEnrollmentSignature8'] = removeEnrollmentSignature8;

	var valueEnrollmentSignature9 = $formValues.find('.valueEnrollmentSignature9').val();
	var removeEnrollmentSignature9 = $formValues.find('.removeEnrollmentSignature9').val() === 'true';
	var setEnrollmentSignature9 = removeEnrollmentSignature9 ? null : $formValues.find('.setEnrollmentSignature9').val();
	var addEnrollmentSignature9 = $formValues.find('.addEnrollmentSignature9').val();
	if(removeEnrollmentSignature9 || setEnrollmentSignature9 != null && setEnrollmentSignature9 !== '')
		vals['setEnrollmentSignature9'] = setEnrollmentSignature9;
	if(addEnrollmentSignature9 != null && addEnrollmentSignature9 !== '')
		vals['addEnrollmentSignature9'] = addEnrollmentSignature9;
	var removeEnrollmentSignature9 = $formValues.find('.removeEnrollmentSignature9').val();
	if(removeEnrollmentSignature9 != null && removeEnrollmentSignature9 !== '')
		vals['removeEnrollmentSignature9'] = removeEnrollmentSignature9;

	var valueEnrollmentSignature10 = $formValues.find('.valueEnrollmentSignature10').val();
	var removeEnrollmentSignature10 = $formValues.find('.removeEnrollmentSignature10').val() === 'true';
	var setEnrollmentSignature10 = removeEnrollmentSignature10 ? null : $formValues.find('.setEnrollmentSignature10').val();
	var addEnrollmentSignature10 = $formValues.find('.addEnrollmentSignature10').val();
	if(removeEnrollmentSignature10 || setEnrollmentSignature10 != null && setEnrollmentSignature10 !== '')
		vals['setEnrollmentSignature10'] = setEnrollmentSignature10;
	if(addEnrollmentSignature10 != null && addEnrollmentSignature10 !== '')
		vals['addEnrollmentSignature10'] = addEnrollmentSignature10;
	var removeEnrollmentSignature10 = $formValues.find('.removeEnrollmentSignature10').val();
	if(removeEnrollmentSignature10 != null && removeEnrollmentSignature10 !== '')
		vals['removeEnrollmentSignature10'] = removeEnrollmentSignature10;

	var valueEnrollmentDate1 = $formValues.find('.valueEnrollmentDate1').val();
	var removeEnrollmentDate1 = $formValues.find('.removeEnrollmentDate1').val() === 'true';
	var setEnrollmentDate1 = removeEnrollmentDate1 ? null : $formValues.find('.setEnrollmentDate1').val();
	var addEnrollmentDate1 = $formValues.find('.addEnrollmentDate1').val();
	var setMoment = setEnrollmentDate1 ? moment(setEnrollmentDate1, 'MM/DD/YYYY') : null; 
	var addMoment = addEnrollmentDate1 ? moment(addEnrollmentDate1, 'MM/DD/YYYY') : null; 
	if(setMoment) { 
		var s = setMoment.format('YYYY-MM-DD'); 
		setEnrollmentDate1 = s;
	} 
	if(addMoment) { 
		var s = addMoment.format('YYYY-MM-DD'); 
		addEnrollmentDate1 = s;
	} 
	if(removeEnrollmentDate1 || setEnrollmentDate1 != null && setEnrollmentDate1 !== '')
		vals['setEnrollmentDate1'] = setEnrollmentDate1;
	if(addEnrollmentDate1 != null && addEnrollmentDate1 !== '')
		vals['addEnrollmentDate1'] = addEnrollmentDate1;
	var removeEnrollmentDate1 = $formValues.find('.removeEnrollmentDate1').val();
	if(removeEnrollmentDate1 != null && removeEnrollmentDate1 !== '')
		vals['removeEnrollmentDate1'] = removeEnrollmentDate1;

	var valueEnrollmentDate2 = $formValues.find('.valueEnrollmentDate2').val();
	var removeEnrollmentDate2 = $formValues.find('.removeEnrollmentDate2').val() === 'true';
	var setEnrollmentDate2 = removeEnrollmentDate2 ? null : $formValues.find('.setEnrollmentDate2').val();
	var addEnrollmentDate2 = $formValues.find('.addEnrollmentDate2').val();
	var setMoment = setEnrollmentDate2 ? moment(setEnrollmentDate2, 'MM/DD/YYYY') : null; 
	var addMoment = addEnrollmentDate2 ? moment(addEnrollmentDate2, 'MM/DD/YYYY') : null; 
	if(setMoment) { 
		var s = setMoment.format('YYYY-MM-DD'); 
		setEnrollmentDate2 = s;
	} 
	if(addMoment) { 
		var s = addMoment.format('YYYY-MM-DD'); 
		addEnrollmentDate2 = s;
	} 
	if(removeEnrollmentDate2 || setEnrollmentDate2 != null && setEnrollmentDate2 !== '')
		vals['setEnrollmentDate2'] = setEnrollmentDate2;
	if(addEnrollmentDate2 != null && addEnrollmentDate2 !== '')
		vals['addEnrollmentDate2'] = addEnrollmentDate2;
	var removeEnrollmentDate2 = $formValues.find('.removeEnrollmentDate2').val();
	if(removeEnrollmentDate2 != null && removeEnrollmentDate2 !== '')
		vals['removeEnrollmentDate2'] = removeEnrollmentDate2;

	var valueEnrollmentDate3 = $formValues.find('.valueEnrollmentDate3').val();
	var removeEnrollmentDate3 = $formValues.find('.removeEnrollmentDate3').val() === 'true';
	var setEnrollmentDate3 = removeEnrollmentDate3 ? null : $formValues.find('.setEnrollmentDate3').val();
	var addEnrollmentDate3 = $formValues.find('.addEnrollmentDate3').val();
	var setMoment = setEnrollmentDate3 ? moment(setEnrollmentDate3, 'MM/DD/YYYY') : null; 
	var addMoment = addEnrollmentDate3 ? moment(addEnrollmentDate3, 'MM/DD/YYYY') : null; 
	if(setMoment) { 
		var s = setMoment.format('YYYY-MM-DD'); 
		setEnrollmentDate3 = s;
	} 
	if(addMoment) { 
		var s = addMoment.format('YYYY-MM-DD'); 
		addEnrollmentDate3 = s;
	} 
	if(removeEnrollmentDate3 || setEnrollmentDate3 != null && setEnrollmentDate3 !== '')
		vals['setEnrollmentDate3'] = setEnrollmentDate3;
	if(addEnrollmentDate3 != null && addEnrollmentDate3 !== '')
		vals['addEnrollmentDate3'] = addEnrollmentDate3;
	var removeEnrollmentDate3 = $formValues.find('.removeEnrollmentDate3').val();
	if(removeEnrollmentDate3 != null && removeEnrollmentDate3 !== '')
		vals['removeEnrollmentDate3'] = removeEnrollmentDate3;

	var valueEnrollmentDate4 = $formValues.find('.valueEnrollmentDate4').val();
	var removeEnrollmentDate4 = $formValues.find('.removeEnrollmentDate4').val() === 'true';
	var setEnrollmentDate4 = removeEnrollmentDate4 ? null : $formValues.find('.setEnrollmentDate4').val();
	var addEnrollmentDate4 = $formValues.find('.addEnrollmentDate4').val();
	var setMoment = setEnrollmentDate4 ? moment(setEnrollmentDate4, 'MM/DD/YYYY') : null; 
	var addMoment = addEnrollmentDate4 ? moment(addEnrollmentDate4, 'MM/DD/YYYY') : null; 
	if(setMoment) { 
		var s = setMoment.format('YYYY-MM-DD'); 
		setEnrollmentDate4 = s;
	} 
	if(addMoment) { 
		var s = addMoment.format('YYYY-MM-DD'); 
		addEnrollmentDate4 = s;
	} 
	if(removeEnrollmentDate4 || setEnrollmentDate4 != null && setEnrollmentDate4 !== '')
		vals['setEnrollmentDate4'] = setEnrollmentDate4;
	if(addEnrollmentDate4 != null && addEnrollmentDate4 !== '')
		vals['addEnrollmentDate4'] = addEnrollmentDate4;
	var removeEnrollmentDate4 = $formValues.find('.removeEnrollmentDate4').val();
	if(removeEnrollmentDate4 != null && removeEnrollmentDate4 !== '')
		vals['removeEnrollmentDate4'] = removeEnrollmentDate4;

	var valueEnrollmentDate5 = $formValues.find('.valueEnrollmentDate5').val();
	var removeEnrollmentDate5 = $formValues.find('.removeEnrollmentDate5').val() === 'true';
	var setEnrollmentDate5 = removeEnrollmentDate5 ? null : $formValues.find('.setEnrollmentDate5').val();
	var addEnrollmentDate5 = $formValues.find('.addEnrollmentDate5').val();
	var setMoment = setEnrollmentDate5 ? moment(setEnrollmentDate5, 'MM/DD/YYYY') : null; 
	var addMoment = addEnrollmentDate5 ? moment(addEnrollmentDate5, 'MM/DD/YYYY') : null; 
	if(setMoment) { 
		var s = setMoment.format('YYYY-MM-DD'); 
		setEnrollmentDate5 = s;
	} 
	if(addMoment) { 
		var s = addMoment.format('YYYY-MM-DD'); 
		addEnrollmentDate5 = s;
	} 
	if(removeEnrollmentDate5 || setEnrollmentDate5 != null && setEnrollmentDate5 !== '')
		vals['setEnrollmentDate5'] = setEnrollmentDate5;
	if(addEnrollmentDate5 != null && addEnrollmentDate5 !== '')
		vals['addEnrollmentDate5'] = addEnrollmentDate5;
	var removeEnrollmentDate5 = $formValues.find('.removeEnrollmentDate5').val();
	if(removeEnrollmentDate5 != null && removeEnrollmentDate5 !== '')
		vals['removeEnrollmentDate5'] = removeEnrollmentDate5;

	var valueEnrollmentDate6 = $formValues.find('.valueEnrollmentDate6').val();
	var removeEnrollmentDate6 = $formValues.find('.removeEnrollmentDate6').val() === 'true';
	var setEnrollmentDate6 = removeEnrollmentDate6 ? null : $formValues.find('.setEnrollmentDate6').val();
	var addEnrollmentDate6 = $formValues.find('.addEnrollmentDate6').val();
	var setMoment = setEnrollmentDate6 ? moment(setEnrollmentDate6, 'MM/DD/YYYY') : null; 
	var addMoment = addEnrollmentDate6 ? moment(addEnrollmentDate6, 'MM/DD/YYYY') : null; 
	if(setMoment) { 
		var s = setMoment.format('YYYY-MM-DD'); 
		setEnrollmentDate6 = s;
	} 
	if(addMoment) { 
		var s = addMoment.format('YYYY-MM-DD'); 
		addEnrollmentDate6 = s;
	} 
	if(removeEnrollmentDate6 || setEnrollmentDate6 != null && setEnrollmentDate6 !== '')
		vals['setEnrollmentDate6'] = setEnrollmentDate6;
	if(addEnrollmentDate6 != null && addEnrollmentDate6 !== '')
		vals['addEnrollmentDate6'] = addEnrollmentDate6;
	var removeEnrollmentDate6 = $formValues.find('.removeEnrollmentDate6').val();
	if(removeEnrollmentDate6 != null && removeEnrollmentDate6 !== '')
		vals['removeEnrollmentDate6'] = removeEnrollmentDate6;

	var valueEnrollmentDate7 = $formValues.find('.valueEnrollmentDate7').val();
	var removeEnrollmentDate7 = $formValues.find('.removeEnrollmentDate7').val() === 'true';
	var setEnrollmentDate7 = removeEnrollmentDate7 ? null : $formValues.find('.setEnrollmentDate7').val();
	var addEnrollmentDate7 = $formValues.find('.addEnrollmentDate7').val();
	var setMoment = setEnrollmentDate7 ? moment(setEnrollmentDate7, 'MM/DD/YYYY') : null; 
	var addMoment = addEnrollmentDate7 ? moment(addEnrollmentDate7, 'MM/DD/YYYY') : null; 
	if(setMoment) { 
		var s = setMoment.format('YYYY-MM-DD'); 
		setEnrollmentDate7 = s;
	} 
	if(addMoment) { 
		var s = addMoment.format('YYYY-MM-DD'); 
		addEnrollmentDate7 = s;
	} 
	if(removeEnrollmentDate7 || setEnrollmentDate7 != null && setEnrollmentDate7 !== '')
		vals['setEnrollmentDate7'] = setEnrollmentDate7;
	if(addEnrollmentDate7 != null && addEnrollmentDate7 !== '')
		vals['addEnrollmentDate7'] = addEnrollmentDate7;
	var removeEnrollmentDate7 = $formValues.find('.removeEnrollmentDate7').val();
	if(removeEnrollmentDate7 != null && removeEnrollmentDate7 !== '')
		vals['removeEnrollmentDate7'] = removeEnrollmentDate7;

	var valueEnrollmentDate8 = $formValues.find('.valueEnrollmentDate8').val();
	var removeEnrollmentDate8 = $formValues.find('.removeEnrollmentDate8').val() === 'true';
	var setEnrollmentDate8 = removeEnrollmentDate8 ? null : $formValues.find('.setEnrollmentDate8').val();
	var addEnrollmentDate8 = $formValues.find('.addEnrollmentDate8').val();
	var setMoment = setEnrollmentDate8 ? moment(setEnrollmentDate8, 'MM/DD/YYYY') : null; 
	var addMoment = addEnrollmentDate8 ? moment(addEnrollmentDate8, 'MM/DD/YYYY') : null; 
	if(setMoment) { 
		var s = setMoment.format('YYYY-MM-DD'); 
		setEnrollmentDate8 = s;
	} 
	if(addMoment) { 
		var s = addMoment.format('YYYY-MM-DD'); 
		addEnrollmentDate8 = s;
	} 
	if(removeEnrollmentDate8 || setEnrollmentDate8 != null && setEnrollmentDate8 !== '')
		vals['setEnrollmentDate8'] = setEnrollmentDate8;
	if(addEnrollmentDate8 != null && addEnrollmentDate8 !== '')
		vals['addEnrollmentDate8'] = addEnrollmentDate8;
	var removeEnrollmentDate8 = $formValues.find('.removeEnrollmentDate8').val();
	if(removeEnrollmentDate8 != null && removeEnrollmentDate8 !== '')
		vals['removeEnrollmentDate8'] = removeEnrollmentDate8;

	var valueEnrollmentDate9 = $formValues.find('.valueEnrollmentDate9').val();
	var removeEnrollmentDate9 = $formValues.find('.removeEnrollmentDate9').val() === 'true';
	var setEnrollmentDate9 = removeEnrollmentDate9 ? null : $formValues.find('.setEnrollmentDate9').val();
	var addEnrollmentDate9 = $formValues.find('.addEnrollmentDate9').val();
	var setMoment = setEnrollmentDate9 ? moment(setEnrollmentDate9, 'MM/DD/YYYY') : null; 
	var addMoment = addEnrollmentDate9 ? moment(addEnrollmentDate9, 'MM/DD/YYYY') : null; 
	if(setMoment) { 
		var s = setMoment.format('YYYY-MM-DD'); 
		setEnrollmentDate9 = s;
	} 
	if(addMoment) { 
		var s = addMoment.format('YYYY-MM-DD'); 
		addEnrollmentDate9 = s;
	} 
	if(removeEnrollmentDate9 || setEnrollmentDate9 != null && setEnrollmentDate9 !== '')
		vals['setEnrollmentDate9'] = setEnrollmentDate9;
	if(addEnrollmentDate9 != null && addEnrollmentDate9 !== '')
		vals['addEnrollmentDate9'] = addEnrollmentDate9;
	var removeEnrollmentDate9 = $formValues.find('.removeEnrollmentDate9').val();
	if(removeEnrollmentDate9 != null && removeEnrollmentDate9 !== '')
		vals['removeEnrollmentDate9'] = removeEnrollmentDate9;

	var valueEnrollmentDate10 = $formValues.find('.valueEnrollmentDate10').val();
	var removeEnrollmentDate10 = $formValues.find('.removeEnrollmentDate10').val() === 'true';
	var setEnrollmentDate10 = removeEnrollmentDate10 ? null : $formValues.find('.setEnrollmentDate10').val();
	var addEnrollmentDate10 = $formValues.find('.addEnrollmentDate10').val();
	var setMoment = setEnrollmentDate10 ? moment(setEnrollmentDate10, 'MM/DD/YYYY') : null; 
	var addMoment = addEnrollmentDate10 ? moment(addEnrollmentDate10, 'MM/DD/YYYY') : null; 
	if(setMoment) { 
		var s = setMoment.format('YYYY-MM-DD'); 
		setEnrollmentDate10 = s;
	} 
	if(addMoment) { 
		var s = addMoment.format('YYYY-MM-DD'); 
		addEnrollmentDate10 = s;
	} 
	if(removeEnrollmentDate10 || setEnrollmentDate10 != null && setEnrollmentDate10 !== '')
		vals['setEnrollmentDate10'] = setEnrollmentDate10;
	if(addEnrollmentDate10 != null && addEnrollmentDate10 !== '')
		vals['addEnrollmentDate10'] = addEnrollmentDate10;
	var removeEnrollmentDate10 = $formValues.find('.removeEnrollmentDate10').val();
	if(removeEnrollmentDate10 != null && removeEnrollmentDate10 !== '')
		vals['removeEnrollmentDate10'] = removeEnrollmentDate10;

	patchpaymentsSchoolEnrollmentVals(pk == null ? $.deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'pk:' + pk}], vals, success, error);
}

function patchpaymentsSchoolEnrollmentFilters($formFilters) {
	var filters = [];
	if($formFilters) {

		var filterPk = $formFilters.find('.valuePk').val();
		if(filterPk != null && filterPk !== '')
			filters.push({ name: 'fq', value: 'pk:' + filterPk });

		var filterCreated = $formFilters.find('.valueCreated').val();
		if(filterCreated != null && filterCreated !== '')
			filters.push({ name: 'fq', value: 'created:' + filterCreated });

		var filterModified = $formFilters.find('.valueModified').val();
		if(filterModified != null && filterModified !== '')
			filters.push({ name: 'fq', value: 'modified:' + filterModified });

		var filterObjectId = $formFilters.find('.valueObjectId').val();
		if(filterObjectId != null && filterObjectId !== '')
			filters.push({ name: 'fq', value: 'objectId:' + filterObjectId });

		var $filterArchivedCheckbox = $formFilters.find('input.valueArchived[type = "checkbox"]');
		var $filterArchivedSelect = $formFilters.find('select.valueArchived');
		var filterArchived = $filterArchivedSelect.length ? $filterArchivedSelect.val() : $filterArchivedCheckbox.prop('checked');
		var filterArchivedSelectVal = $formFilters.find('select.filterArchived').val();
		var filterArchived = null;
		if(filterArchivedSelectVal !== '')
			filterArchived = filterArchivedSelectVal == 'true';
		if(filterArchived != null && filterArchived === true)
			filters.push({ name: 'fq', value: 'archived:' + filterArchived });

		var $filterDeletedCheckbox = $formFilters.find('input.valueDeleted[type = "checkbox"]');
		var $filterDeletedSelect = $formFilters.find('select.valueDeleted');
		var filterDeleted = $filterDeletedSelect.length ? $filterDeletedSelect.val() : $filterDeletedCheckbox.prop('checked');
		var filterDeletedSelectVal = $formFilters.find('select.filterDeleted').val();
		var filterDeleted = null;
		if(filterDeletedSelectVal !== '')
			filterDeleted = filterDeletedSelectVal == 'true';
		if(filterDeleted != null && filterDeleted === true)
			filters.push({ name: 'fq', value: 'deleted:' + filterDeleted });

		var filterEnrollmentGroupName = $formFilters.find('.valueEnrollmentGroupName').val();
		if(filterEnrollmentGroupName != null && filterEnrollmentGroupName !== '')
			filters.push({ name: 'fq', value: 'enrollmentGroupName:' + filterEnrollmentGroupName });

		var filterCustomerProfileId = $formFilters.find('.valueCustomerProfileId').val();
		if(filterCustomerProfileId != null && filterCustomerProfileId !== '')
			filters.push({ name: 'fq', value: 'customerProfileId:' + filterCustomerProfileId });

		var $filterEnrollmentPaymentCompleteCheckbox = $formFilters.find('input.valueEnrollmentPaymentComplete[type = "checkbox"]');
		var $filterEnrollmentPaymentCompleteSelect = $formFilters.find('select.valueEnrollmentPaymentComplete');
		var filterEnrollmentPaymentComplete = $filterEnrollmentPaymentCompleteSelect.length ? $filterEnrollmentPaymentCompleteSelect.val() : $filterEnrollmentPaymentCompleteCheckbox.prop('checked');
		var filterEnrollmentPaymentCompleteSelectVal = $formFilters.find('select.filterEnrollmentPaymentComplete').val();
		var filterEnrollmentPaymentComplete = null;
		if(filterEnrollmentPaymentCompleteSelectVal !== '')
			filterEnrollmentPaymentComplete = filterEnrollmentPaymentCompleteSelectVal == 'true';
		if(filterEnrollmentPaymentComplete != null && filterEnrollmentPaymentComplete === true)
			filters.push({ name: 'fq', value: 'enrollmentPaymentComplete:' + filterEnrollmentPaymentComplete });

		var $filterChildPottyTrainedCheckbox = $formFilters.find('input.valueChildPottyTrained[type = "checkbox"]');
		var $filterChildPottyTrainedSelect = $formFilters.find('select.valueChildPottyTrained');
		var filterChildPottyTrained = $filterChildPottyTrainedSelect.length ? $filterChildPottyTrainedSelect.val() : $filterChildPottyTrainedCheckbox.prop('checked');
		var filterChildPottyTrainedSelectVal = $formFilters.find('select.filterChildPottyTrained').val();
		var filterChildPottyTrained = null;
		if(filterChildPottyTrainedSelectVal !== '')
			filterChildPottyTrained = filterChildPottyTrainedSelectVal == 'true';
		if(filterChildPottyTrained != null && filterChildPottyTrained === true)
			filters.push({ name: 'fq', value: 'childPottyTrained:' + filterChildPottyTrained });

		var $filterEnrollmentPaymentEachMonthCheckbox = $formFilters.find('input.valueEnrollmentPaymentEachMonth[type = "checkbox"]');
		var $filterEnrollmentPaymentEachMonthSelect = $formFilters.find('select.valueEnrollmentPaymentEachMonth');
		var filterEnrollmentPaymentEachMonth = $filterEnrollmentPaymentEachMonthSelect.length ? $filterEnrollmentPaymentEachMonthSelect.val() : $filterEnrollmentPaymentEachMonthCheckbox.prop('checked');
		var filterEnrollmentPaymentEachMonthSelectVal = $formFilters.find('select.filterEnrollmentPaymentEachMonth').val();
		var filterEnrollmentPaymentEachMonth = null;
		if(filterEnrollmentPaymentEachMonthSelectVal !== '')
			filterEnrollmentPaymentEachMonth = filterEnrollmentPaymentEachMonthSelectVal == 'true';
		if(filterEnrollmentPaymentEachMonth != null && filterEnrollmentPaymentEachMonth === true)
			filters.push({ name: 'fq', value: 'enrollmentPaymentEachMonth:' + filterEnrollmentPaymentEachMonth });

		var $filterEnrollmentImmunizationsCheckbox = $formFilters.find('input.valueEnrollmentImmunizations[type = "checkbox"]');
		var $filterEnrollmentImmunizationsSelect = $formFilters.find('select.valueEnrollmentImmunizations');
		var filterEnrollmentImmunizations = $filterEnrollmentImmunizationsSelect.length ? $filterEnrollmentImmunizationsSelect.val() : $filterEnrollmentImmunizationsCheckbox.prop('checked');
		var filterEnrollmentImmunizationsSelectVal = $formFilters.find('select.filterEnrollmentImmunizations').val();
		var filterEnrollmentImmunizations = null;
		if(filterEnrollmentImmunizationsSelectVal !== '')
			filterEnrollmentImmunizations = filterEnrollmentImmunizationsSelectVal == 'true';
		if(filterEnrollmentImmunizations != null && filterEnrollmentImmunizations === true)
			filters.push({ name: 'fq', value: 'enrollmentImmunizations:' + filterEnrollmentImmunizations });

		var $filterEnrollmentApprovedCheckbox = $formFilters.find('input.valueEnrollmentApproved[type = "checkbox"]');
		var $filterEnrollmentApprovedSelect = $formFilters.find('select.valueEnrollmentApproved');
		var filterEnrollmentApproved = $filterEnrollmentApprovedSelect.length ? $filterEnrollmentApprovedSelect.val() : $filterEnrollmentApprovedCheckbox.prop('checked');
		var filterEnrollmentApprovedSelectVal = $formFilters.find('select.filterEnrollmentApproved').val();
		var filterEnrollmentApproved = null;
		if(filterEnrollmentApprovedSelectVal !== '')
			filterEnrollmentApproved = filterEnrollmentApprovedSelectVal == 'true';
		if(filterEnrollmentApproved != null && filterEnrollmentApproved === true)
			filters.push({ name: 'fq', value: 'enrollmentApproved:' + filterEnrollmentApproved });

		var $filterFamilyMarriedCheckbox = $formFilters.find('input.valueFamilyMarried[type = "checkbox"]');
		var $filterFamilyMarriedSelect = $formFilters.find('select.valueFamilyMarried');
		var filterFamilyMarried = $filterFamilyMarriedSelect.length ? $filterFamilyMarriedSelect.val() : $filterFamilyMarriedCheckbox.prop('checked');
		var filterFamilyMarriedSelectVal = $formFilters.find('select.filterFamilyMarried').val();
		var filterFamilyMarried = null;
		if(filterFamilyMarriedSelectVal !== '')
			filterFamilyMarried = filterFamilyMarriedSelectVal == 'true';
		if(filterFamilyMarried != null && filterFamilyMarried === true)
			filters.push({ name: 'fq', value: 'familyMarried:' + filterFamilyMarried });

		var $filterFamilySeparatedCheckbox = $formFilters.find('input.valueFamilySeparated[type = "checkbox"]');
		var $filterFamilySeparatedSelect = $formFilters.find('select.valueFamilySeparated');
		var filterFamilySeparated = $filterFamilySeparatedSelect.length ? $filterFamilySeparatedSelect.val() : $filterFamilySeparatedCheckbox.prop('checked');
		var filterFamilySeparatedSelectVal = $formFilters.find('select.filterFamilySeparated').val();
		var filterFamilySeparated = null;
		if(filterFamilySeparatedSelectVal !== '')
			filterFamilySeparated = filterFamilySeparatedSelectVal == 'true';
		if(filterFamilySeparated != null && filterFamilySeparated === true)
			filters.push({ name: 'fq', value: 'familySeparated:' + filterFamilySeparated });

		var $filterFamilyDivorcedCheckbox = $formFilters.find('input.valueFamilyDivorced[type = "checkbox"]');
		var $filterFamilyDivorcedSelect = $formFilters.find('select.valueFamilyDivorced');
		var filterFamilyDivorced = $filterFamilyDivorcedSelect.length ? $filterFamilyDivorcedSelect.val() : $filterFamilyDivorcedCheckbox.prop('checked');
		var filterFamilyDivorcedSelectVal = $formFilters.find('select.filterFamilyDivorced').val();
		var filterFamilyDivorced = null;
		if(filterFamilyDivorcedSelectVal !== '')
			filterFamilyDivorced = filterFamilyDivorcedSelectVal == 'true';
		if(filterFamilyDivorced != null && filterFamilyDivorced === true)
			filters.push({ name: 'fq', value: 'familyDivorced:' + filterFamilyDivorced });

		var filterFamilyAddress = $formFilters.find('.valueFamilyAddress').val();
		if(filterFamilyAddress != null && filterFamilyAddress !== '')
			filters.push({ name: 'fq', value: 'familyAddress:' + filterFamilyAddress });

		var filterEnrollmentSpecialConsiderations = $formFilters.find('.valueEnrollmentSpecialConsiderations').val();
		if(filterEnrollmentSpecialConsiderations != null && filterEnrollmentSpecialConsiderations !== '')
			filters.push({ name: 'fq', value: 'enrollmentSpecialConsiderations:' + filterEnrollmentSpecialConsiderations });

		var filterChildMedicalConditions = $formFilters.find('.valueChildMedicalConditions').val();
		if(filterChildMedicalConditions != null && filterChildMedicalConditions !== '')
			filters.push({ name: 'fq', value: 'childMedicalConditions:' + filterChildMedicalConditions });

		var filterChildPreviousSchoolsAttended = $formFilters.find('.valueChildPreviousSchoolsAttended').val();
		if(filterChildPreviousSchoolsAttended != null && filterChildPreviousSchoolsAttended !== '')
			filters.push({ name: 'fq', value: 'childPreviousSchoolsAttended:' + filterChildPreviousSchoolsAttended });

		var filterFamilyHowDoYouKnowTheSchool = $formFilters.find('.valueFamilyHowDoYouKnowTheSchool').val();
		if(filterFamilyHowDoYouKnowTheSchool != null && filterFamilyHowDoYouKnowTheSchool !== '')
			filters.push({ name: 'fq', value: 'familyHowDoYouKnowTheSchool:' + filterFamilyHowDoYouKnowTheSchool });

		var filterChildDescription = $formFilters.find('.valueChildDescription').val();
		if(filterChildDescription != null && filterChildDescription !== '')
			filters.push({ name: 'fq', value: 'childDescription:' + filterChildDescription });

		var filterChildObjectives = $formFilters.find('.valueChildObjectives').val();
		if(filterChildObjectives != null && filterChildObjectives !== '')
			filters.push({ name: 'fq', value: 'childObjectives:' + filterChildObjectives });

		var filterYearKey = $formFilters.find('.valueYearKey').val();
		if(filterYearKey != null && filterYearKey !== '')
			filters.push({ name: 'fq', value: 'yearKey:' + filterYearKey });

		var filterBlockKeys = $formFilters.find('.valueBlockKeys').val();
		if(filterBlockKeys != null && filterBlockKeys !== '')
			filters.push({ name: 'fq', value: 'blockKeys:' + filterBlockKeys });

		var filterChildKey = $formFilters.find('.valueChildKey').val();
		if(filterChildKey != null && filterChildKey !== '')
			filters.push({ name: 'fq', value: 'childKey:' + filterChildKey });

		var filterGuardianKeys = $formFilters.find('.valueGuardianKeys').val();
		if(filterGuardianKeys != null && filterGuardianKeys !== '')
			filters.push({ name: 'fq', value: 'guardianKeys:' + filterGuardianKeys });

		var filterMomKeys = $formFilters.find('.valueMomKeys').val();
		if(filterMomKeys != null && filterMomKeys !== '')
			filters.push({ name: 'fq', value: 'momKeys:' + filterMomKeys });

		var filterDadKeys = $formFilters.find('.valueDadKeys').val();
		if(filterDadKeys != null && filterDadKeys !== '')
			filters.push({ name: 'fq', value: 'dadKeys:' + filterDadKeys });

		var filterUserKeys = $formFilters.find('.valueUserKeys').val();
		if(filterUserKeys != null && filterUserKeys !== '')
			filters.push({ name: 'fq', value: 'userKeys:' + filterUserKeys });

		var filterPaymentKeys = $formFilters.find('.valuePaymentKeys').val();
		if(filterPaymentKeys != null && filterPaymentKeys !== '')
			filters.push({ name: 'fq', value: 'paymentKeys:' + filterPaymentKeys });

		var filterInheritPk = $formFilters.find('.valueInheritPk').val();
		if(filterInheritPk != null && filterInheritPk !== '')
			filters.push({ name: 'fq', value: 'inheritPk:' + filterInheritPk });

		var filterId = $formFilters.find('.valueId').val();
		if(filterId != null && filterId !== '')
			filters.push({ name: 'fq', value: 'id:' + filterId });

		var filterClassCanonicalName = $formFilters.find('.valueClassCanonicalName').val();
		if(filterClassCanonicalName != null && filterClassCanonicalName !== '')
			filters.push({ name: 'fq', value: 'classCanonicalName:' + filterClassCanonicalName });

		var filterClassSimpleName = $formFilters.find('.valueClassSimpleName').val();
		if(filterClassSimpleName != null && filterClassSimpleName !== '')
			filters.push({ name: 'fq', value: 'classSimpleName:' + filterClassSimpleName });

		var filterClassCanonicalNames = $formFilters.find('.valueClassCanonicalNames').val();
		if(filterClassCanonicalNames != null && filterClassCanonicalNames !== '')
			filters.push({ name: 'fq', value: 'classCanonicalNames:' + filterClassCanonicalNames });

		var filterSessionId = $formFilters.find('.valueSessionId').val();
		if(filterSessionId != null && filterSessionId !== '')
			filters.push({ name: 'fq', value: 'sessionId:' + filterSessionId });

		var filterUserId = $formFilters.find('.valueUserId').val();
		if(filterUserId != null && filterUserId !== '')
			filters.push({ name: 'fq', value: 'userId:' + filterUserId });

		var filterUserKey = $formFilters.find('.valueUserKey').val();
		if(filterUserKey != null && filterUserKey !== '')
			filters.push({ name: 'fq', value: 'userKey:' + filterUserKey });

		var filterSaves = $formFilters.find('.valueSaves').val();
		if(filterSaves != null && filterSaves !== '')
			filters.push({ name: 'fq', value: 'saves:' + filterSaves });

		var filterObjectTitle = $formFilters.find('.valueObjectTitle').val();
		if(filterObjectTitle != null && filterObjectTitle !== '')
			filters.push({ name: 'fq', value: 'objectTitle:' + filterObjectTitle });

		var filterObjectSuggest = $formFilters.find('.valueObjectSuggest').val();
		if(filterObjectSuggest != null && filterObjectSuggest !== '')
			filters.push({ name: 'q', value: 'objectSuggest:' + filterObjectSuggest });

		var filterObjectText = $formFilters.find('.valueObjectText').val();
		if(filterObjectText != null && filterObjectText !== '')
			filters.push({ name: 'fq', value: 'objectText:' + filterObjectText });

		var filterPageUrlId = $formFilters.find('.valuePageUrlId').val();
		if(filterPageUrlId != null && filterPageUrlId !== '')
			filters.push({ name: 'fq', value: 'pageUrlId:' + filterPageUrlId });

		var filterPageUrlPk = $formFilters.find('.valuePageUrlPk').val();
		if(filterPageUrlPk != null && filterPageUrlPk !== '')
			filters.push({ name: 'fq', value: 'pageUrlPk:' + filterPageUrlPk });

		var filterPageUrlApi = $formFilters.find('.valuePageUrlApi').val();
		if(filterPageUrlApi != null && filterPageUrlApi !== '')
			filters.push({ name: 'fq', value: 'pageUrlApi:' + filterPageUrlApi });

		var filterEnrollmentKey = $formFilters.find('.valueEnrollmentKey').val();
		if(filterEnrollmentKey != null && filterEnrollmentKey !== '')
			filters.push({ name: 'fq', value: 'enrollmentKey:' + filterEnrollmentKey });

		var filterSchoolKey = $formFilters.find('.valueSchoolKey').val();
		if(filterSchoolKey != null && filterSchoolKey !== '')
			filters.push({ name: 'fq', value: 'schoolKey:' + filterSchoolKey });

		var filterSessionKey = $formFilters.find('.valueSessionKey').val();
		if(filterSessionKey != null && filterSessionKey !== '')
			filters.push({ name: 'fq', value: 'sessionKey:' + filterSessionKey });

		var filterAgeKey = $formFilters.find('.valueAgeKey').val();
		if(filterAgeKey != null && filterAgeKey !== '')
			filters.push({ name: 'fq', value: 'ageKey:' + filterAgeKey });

		var filterBlockKey = $formFilters.find('.valueBlockKey').val();
		if(filterBlockKey != null && filterBlockKey !== '')
			filters.push({ name: 'fq', value: 'blockKey:' + filterBlockKey });

		var filterEnrollmentFormKey = $formFilters.find('.valueEnrollmentFormKey').val();
		if(filterEnrollmentFormKey != null && filterEnrollmentFormKey !== '')
			filters.push({ name: 'fq', value: 'enrollmentFormKey:' + filterEnrollmentFormKey });

		var filterEducationSort = $formFilters.find('.valueEducationSort').val();
		if(filterEducationSort != null && filterEducationSort !== '')
			filters.push({ name: 'fq', value: 'educationSort:' + filterEducationSort });

		var filterSchoolSort = $formFilters.find('.valueSchoolSort').val();
		if(filterSchoolSort != null && filterSchoolSort !== '')
			filters.push({ name: 'fq', value: 'schoolSort:' + filterSchoolSort });

		var filterYearSort = $formFilters.find('.valueYearSort').val();
		if(filterYearSort != null && filterYearSort !== '')
			filters.push({ name: 'fq', value: 'yearSort:' + filterYearSort });

		var filterSeasonSort = $formFilters.find('.valueSeasonSort').val();
		if(filterSeasonSort != null && filterSeasonSort !== '')
			filters.push({ name: 'fq', value: 'seasonSort:' + filterSeasonSort });

		var filterSessionSort = $formFilters.find('.valueSessionSort').val();
		if(filterSessionSort != null && filterSessionSort !== '')
			filters.push({ name: 'fq', value: 'sessionSort:' + filterSessionSort });

		var filterAgeSort = $formFilters.find('.valueAgeSort').val();
		if(filterAgeSort != null && filterAgeSort !== '')
			filters.push({ name: 'fq', value: 'ageSort:' + filterAgeSort });

		var filterChildFirstName = $formFilters.find('.valueChildFirstName').val();
		if(filterChildFirstName != null && filterChildFirstName !== '')
			filters.push({ name: 'fq', value: 'childFirstName:' + filterChildFirstName });

		var filterChildFirstNamePreferred = $formFilters.find('.valueChildFirstNamePreferred').val();
		if(filterChildFirstNamePreferred != null && filterChildFirstNamePreferred !== '')
			filters.push({ name: 'fq', value: 'childFirstNamePreferred:' + filterChildFirstNamePreferred });

		var filterChildFamilyName = $formFilters.find('.valueChildFamilyName').val();
		if(filterChildFamilyName != null && filterChildFamilyName !== '')
			filters.push({ name: 'fq', value: 'childFamilyName:' + filterChildFamilyName });

		var filterMomFirstName = $formFilters.find('.valueMomFirstName').val();
		if(filterMomFirstName != null && filterMomFirstName !== '')
			filters.push({ name: 'fq', value: 'momFirstName:' + filterMomFirstName });

		var filterMomFirstNamePreferred = $formFilters.find('.valueMomFirstNamePreferred').val();
		if(filterMomFirstNamePreferred != null && filterMomFirstNamePreferred !== '')
			filters.push({ name: 'fq', value: 'momFirstNamePreferred:' + filterMomFirstNamePreferred });

		var filterMomCompleteNamePreferred = $formFilters.find('.valueMomCompleteNamePreferred').val();
		if(filterMomCompleteNamePreferred != null && filterMomCompleteNamePreferred !== '')
			filters.push({ name: 'fq', value: 'momCompleteNamePreferred:' + filterMomCompleteNamePreferred });

		var filterDadFirstName = $formFilters.find('.valueDadFirstName').val();
		if(filterDadFirstName != null && filterDadFirstName !== '')
			filters.push({ name: 'fq', value: 'dadFirstName:' + filterDadFirstName });

		var filterDadFirstNamePreferred = $formFilters.find('.valueDadFirstNamePreferred').val();
		if(filterDadFirstNamePreferred != null && filterDadFirstNamePreferred !== '')
			filters.push({ name: 'fq', value: 'dadFirstNamePreferred:' + filterDadFirstNamePreferred });

		var filterDadCompleteNamePreferred = $formFilters.find('.valueDadCompleteNamePreferred').val();
		if(filterDadCompleteNamePreferred != null && filterDadCompleteNamePreferred !== '')
			filters.push({ name: 'fq', value: 'dadCompleteNamePreferred:' + filterDadCompleteNamePreferred });

		var filterChildCompleteName = $formFilters.find('.valueChildCompleteName').val();
		if(filterChildCompleteName != null && filterChildCompleteName !== '')
			filters.push({ name: 'fq', value: 'childCompleteName:' + filterChildCompleteName });

		var filterChildCompleteNamePreferred = $formFilters.find('.valueChildCompleteNamePreferred').val();
		if(filterChildCompleteNamePreferred != null && filterChildCompleteNamePreferred !== '')
			filters.push({ name: 'fq', value: 'childCompleteNamePreferred:' + filterChildCompleteNamePreferred });

		var filterChildBirthDate = $formFilters.find('.valueChildBirthDate').val();
		if(filterChildBirthDate != null && filterChildBirthDate !== '')
			filters.push({ name: 'fq', value: 'childBirthDate:' + filterChildBirthDate });

		var filterChildBirthDateYear = $formFilters.find('.valueChildBirthDateYear').val();
		if(filterChildBirthDateYear != null && filterChildBirthDateYear !== '')
			filters.push({ name: 'fq', value: 'childBirthDateYear:' + filterChildBirthDateYear });

		var filterChildBirthDateMonthOfYear = $formFilters.find('.valueChildBirthDateMonthOfYear').val();
		if(filterChildBirthDateMonthOfYear != null && filterChildBirthDateMonthOfYear !== '')
			filters.push({ name: 'fq', value: 'childBirthDateMonthOfYear:' + filterChildBirthDateMonthOfYear });

		var filterChildBirthDateDayOfWeek = $formFilters.find('.valueChildBirthDateDayOfWeek').val();
		if(filterChildBirthDateDayOfWeek != null && filterChildBirthDateDayOfWeek !== '')
			filters.push({ name: 'fq', value: 'childBirthDateDayOfWeek:' + filterChildBirthDateDayOfWeek });

		var filterChildBirthMonth = $formFilters.find('.valueChildBirthMonth').val();
		if(filterChildBirthMonth != null && filterChildBirthMonth !== '')
			filters.push({ name: 'fq', value: 'childBirthMonth:' + filterChildBirthMonth });

		var filterChildBirthDay = $formFilters.find('.valueChildBirthDay').val();
		if(filterChildBirthDay != null && filterChildBirthDay !== '')
			filters.push({ name: 'fq', value: 'childBirthDay:' + filterChildBirthDay });

		var filterSchoolName = $formFilters.find('.valueSchoolName').val();
		if(filterSchoolName != null && filterSchoolName !== '')
			filters.push({ name: 'fq', value: 'schoolName:' + filterSchoolName });

		var filterSchoolCompleteName = $formFilters.find('.valueSchoolCompleteName').val();
		if(filterSchoolCompleteName != null && filterSchoolCompleteName !== '')
			filters.push({ name: 'fq', value: 'schoolCompleteName:' + filterSchoolCompleteName });

		var filterSchoolLocation = $formFilters.find('.valueSchoolLocation').val();
		if(filterSchoolLocation != null && filterSchoolLocation !== '')
			filters.push({ name: 'fq', value: 'schoolLocation:' + filterSchoolLocation });

		var filterSchoolAddress = $formFilters.find('.valueSchoolAddress').val();
		if(filterSchoolAddress != null && filterSchoolAddress !== '')
			filters.push({ name: 'fq', value: 'schoolAddress:' + filterSchoolAddress });

		var filterSchoolPhoneNumber = $formFilters.find('.valueSchoolPhoneNumber').val();
		if(filterSchoolPhoneNumber != null && filterSchoolPhoneNumber !== '')
			filters.push({ name: 'fq', value: 'schoolPhoneNumber:' + filterSchoolPhoneNumber });

		var filterSchoolForm = $formFilters.find('.valueSchoolForm').val();
		if(filterSchoolForm != null && filterSchoolForm !== '')
			filters.push({ name: 'fq', value: 'schoolForm:' + filterSchoolForm });

		var filterSchoolNumber = $formFilters.find('.valueSchoolNumber').val();
		if(filterSchoolNumber != null && filterSchoolNumber !== '')
			filters.push({ name: 'fq', value: 'schoolNumber:' + filterSchoolNumber });

		var filterSchoolAdministratorName = $formFilters.find('.valueSchoolAdministratorName').val();
		if(filterSchoolAdministratorName != null && filterSchoolAdministratorName !== '')
			filters.push({ name: 'fq', value: 'schoolAdministratorName:' + filterSchoolAdministratorName });

		var filterYearStart = $formFilters.find('.valueYearStart').val();
		if(filterYearStart != null && filterYearStart !== '')
			filters.push({ name: 'fq', value: 'yearStart:' + filterYearStart });

		var filterYearEnd = $formFilters.find('.valueYearEnd').val();
		if(filterYearEnd != null && filterYearEnd !== '')
			filters.push({ name: 'fq', value: 'yearEnd:' + filterYearEnd });

		var filterSeasonStartDate = $formFilters.find('.valueSeasonStartDate').val();
		if(filterSeasonStartDate != null && filterSeasonStartDate !== '')
			filters.push({ name: 'fq', value: 'seasonStartDate:' + filterSeasonStartDate });

		var filterYearEnrollmentFee = $formFilters.find('.valueYearEnrollmentFee').val();
		if(filterYearEnrollmentFee != null && filterYearEnrollmentFee !== '')
			filters.push({ name: 'fq', value: 'yearEnrollmentFee:' + filterYearEnrollmentFee });

		var filterSessionStartDate = $formFilters.find('.valueSessionStartDate').val();
		if(filterSessionStartDate != null && filterSessionStartDate !== '')
			filters.push({ name: 'fq', value: 'sessionStartDate:' + filterSessionStartDate });

		var filterSessionEndDate = $formFilters.find('.valueSessionEndDate').val();
		if(filterSessionEndDate != null && filterSessionEndDate !== '')
			filters.push({ name: 'fq', value: 'sessionEndDate:' + filterSessionEndDate });

		var filterAgeCompleteName = $formFilters.find('.valueAgeCompleteName').val();
		if(filterAgeCompleteName != null && filterAgeCompleteName !== '')
			filters.push({ name: 'fq', value: 'ageCompleteName:' + filterAgeCompleteName });

		var filterAgeStart = $formFilters.find('.valueAgeStart').val();
		if(filterAgeStart != null && filterAgeStart !== '')
			filters.push({ name: 'fq', value: 'ageStart:' + filterAgeStart });

		var filterAgeEnd = $formFilters.find('.valueAgeEnd').val();
		if(filterAgeEnd != null && filterAgeEnd !== '')
			filters.push({ name: 'fq', value: 'ageEnd:' + filterAgeEnd });

		var filterBlockStartTime = $formFilters.find('.valueBlockStartTime').val();
		if(filterBlockStartTime != null && filterBlockStartTime !== '')
			filters.push({ name: 'fq', value: 'blockStartTime:' + filterBlockStartTime });

		var filterBlockEndTime = $formFilters.find('.valueBlockEndTime').val();
		if(filterBlockEndTime != null && filterBlockEndTime !== '')
			filters.push({ name: 'fq', value: 'blockEndTime:' + filterBlockEndTime });

		var filterBlockPricePerMonth = $formFilters.find('.valueBlockPricePerMonth').val();
		if(filterBlockPricePerMonth != null && filterBlockPricePerMonth !== '')
			filters.push({ name: 'fq', value: 'blockPricePerMonth:' + filterBlockPricePerMonth });

		var $filterBlockSundayCheckbox = $formFilters.find('input.valueBlockSunday[type = "checkbox"]');
		var $filterBlockSundaySelect = $formFilters.find('select.valueBlockSunday');
		var filterBlockSunday = $filterBlockSundaySelect.length ? $filterBlockSundaySelect.val() : $filterBlockSundayCheckbox.prop('checked');
		var filterBlockSundaySelectVal = $formFilters.find('select.filterBlockSunday').val();
		var filterBlockSunday = null;
		if(filterBlockSundaySelectVal !== '')
			filterBlockSunday = filterBlockSundaySelectVal == 'true';
		if(filterBlockSunday != null && filterBlockSunday === true)
			filters.push({ name: 'fq', value: 'blockSunday:' + filterBlockSunday });

		var $filterBlockMondayCheckbox = $formFilters.find('input.valueBlockMonday[type = "checkbox"]');
		var $filterBlockMondaySelect = $formFilters.find('select.valueBlockMonday');
		var filterBlockMonday = $filterBlockMondaySelect.length ? $filterBlockMondaySelect.val() : $filterBlockMondayCheckbox.prop('checked');
		var filterBlockMondaySelectVal = $formFilters.find('select.filterBlockMonday').val();
		var filterBlockMonday = null;
		if(filterBlockMondaySelectVal !== '')
			filterBlockMonday = filterBlockMondaySelectVal == 'true';
		if(filterBlockMonday != null && filterBlockMonday === true)
			filters.push({ name: 'fq', value: 'blockMonday:' + filterBlockMonday });

		var $filterBlockTuesdayCheckbox = $formFilters.find('input.valueBlockTuesday[type = "checkbox"]');
		var $filterBlockTuesdaySelect = $formFilters.find('select.valueBlockTuesday');
		var filterBlockTuesday = $filterBlockTuesdaySelect.length ? $filterBlockTuesdaySelect.val() : $filterBlockTuesdayCheckbox.prop('checked');
		var filterBlockTuesdaySelectVal = $formFilters.find('select.filterBlockTuesday').val();
		var filterBlockTuesday = null;
		if(filterBlockTuesdaySelectVal !== '')
			filterBlockTuesday = filterBlockTuesdaySelectVal == 'true';
		if(filterBlockTuesday != null && filterBlockTuesday === true)
			filters.push({ name: 'fq', value: 'blockTuesday:' + filterBlockTuesday });

		var $filterBlockWednesdayCheckbox = $formFilters.find('input.valueBlockWednesday[type = "checkbox"]');
		var $filterBlockWednesdaySelect = $formFilters.find('select.valueBlockWednesday');
		var filterBlockWednesday = $filterBlockWednesdaySelect.length ? $filterBlockWednesdaySelect.val() : $filterBlockWednesdayCheckbox.prop('checked');
		var filterBlockWednesdaySelectVal = $formFilters.find('select.filterBlockWednesday').val();
		var filterBlockWednesday = null;
		if(filterBlockWednesdaySelectVal !== '')
			filterBlockWednesday = filterBlockWednesdaySelectVal == 'true';
		if(filterBlockWednesday != null && filterBlockWednesday === true)
			filters.push({ name: 'fq', value: 'blockWednesday:' + filterBlockWednesday });

		var $filterBlockThursdayCheckbox = $formFilters.find('input.valueBlockThursday[type = "checkbox"]');
		var $filterBlockThursdaySelect = $formFilters.find('select.valueBlockThursday');
		var filterBlockThursday = $filterBlockThursdaySelect.length ? $filterBlockThursdaySelect.val() : $filterBlockThursdayCheckbox.prop('checked');
		var filterBlockThursdaySelectVal = $formFilters.find('select.filterBlockThursday').val();
		var filterBlockThursday = null;
		if(filterBlockThursdaySelectVal !== '')
			filterBlockThursday = filterBlockThursdaySelectVal == 'true';
		if(filterBlockThursday != null && filterBlockThursday === true)
			filters.push({ name: 'fq', value: 'blockThursday:' + filterBlockThursday });

		var $filterBlockFridayCheckbox = $formFilters.find('input.valueBlockFriday[type = "checkbox"]');
		var $filterBlockFridaySelect = $formFilters.find('select.valueBlockFriday');
		var filterBlockFriday = $filterBlockFridaySelect.length ? $filterBlockFridaySelect.val() : $filterBlockFridayCheckbox.prop('checked');
		var filterBlockFridaySelectVal = $formFilters.find('select.filterBlockFriday').val();
		var filterBlockFriday = null;
		if(filterBlockFridaySelectVal !== '')
			filterBlockFriday = filterBlockFridaySelectVal == 'true';
		if(filterBlockFriday != null && filterBlockFriday === true)
			filters.push({ name: 'fq', value: 'blockFriday:' + filterBlockFriday });

		var $filterBlockSaturdayCheckbox = $formFilters.find('input.valueBlockSaturday[type = "checkbox"]');
		var $filterBlockSaturdaySelect = $formFilters.find('select.valueBlockSaturday');
		var filterBlockSaturday = $filterBlockSaturdaySelect.length ? $filterBlockSaturdaySelect.val() : $filterBlockSaturdayCheckbox.prop('checked');
		var filterBlockSaturdaySelectVal = $formFilters.find('select.filterBlockSaturday').val();
		var filterBlockSaturday = null;
		if(filterBlockSaturdaySelectVal !== '')
			filterBlockSaturday = filterBlockSaturdaySelectVal == 'true';
		if(filterBlockSaturday != null && filterBlockSaturday === true)
			filters.push({ name: 'fq', value: 'blockSaturday:' + filterBlockSaturday });

		var filterBlockTotalPrice = $formFilters.find('.valueBlockTotalPrice').val();
		if(filterBlockTotalPrice != null && filterBlockTotalPrice !== '')
			filters.push({ name: 'fq', value: 'blockTotalPrice:' + filterBlockTotalPrice });

		var filterBlockAdminName = $formFilters.find('.valueBlockAdminName').val();
		if(filterBlockAdminName != null && filterBlockAdminName !== '')
			filters.push({ name: 'fq', value: 'blockAdminName:' + filterBlockAdminName });

		var filterBlockShortName = $formFilters.find('.valueBlockShortName').val();
		if(filterBlockShortName != null && filterBlockShortName !== '')
			filters.push({ name: 'fq', value: 'blockShortName:' + filterBlockShortName });

		var filterBlockCompleteName = $formFilters.find('.valueBlockCompleteName').val();
		if(filterBlockCompleteName != null && filterBlockCompleteName !== '')
			filters.push({ name: 'fq', value: 'blockCompleteName:' + filterBlockCompleteName });

		var filterEnrollmentGroupColor = $formFilters.find('.valueEnrollmentGroupColor').val();
		if(filterEnrollmentGroupColor != null && filterEnrollmentGroupColor !== '')
			filters.push({ name: 'fq', value: 'enrollmentGroupColor:' + filterEnrollmentGroupColor });

		var filterEnrollmentChargeDate = $formFilters.find('.valueEnrollmentChargeDate').val();
		if(filterEnrollmentChargeDate != null && filterEnrollmentChargeDate !== '')
			filters.push({ name: 'fq', value: 'enrollmentChargeDate:' + filterEnrollmentChargeDate });

		var filterPaymentLastDate = $formFilters.find('.valuePaymentLastDate').val();
		if(filterPaymentLastDate != null && filterPaymentLastDate !== '')
			filters.push({ name: 'fq', value: 'paymentLastDate:' + filterPaymentLastDate });

		var filterPaymentLastStr = $formFilters.find('.valuePaymentLastStr').val();
		if(filterPaymentLastStr != null && filterPaymentLastStr !== '')
			filters.push({ name: 'fq', value: 'paymentLastStr:' + filterPaymentLastStr });

		var filterPaymentAmount = $formFilters.find('.valuePaymentAmount').val();
		if(filterPaymentAmount != null && filterPaymentAmount !== '')
			filters.push({ name: 'fq', value: 'paymentAmount:' + filterPaymentAmount });

		var filterChargeAmount = $formFilters.find('.valueChargeAmount').val();
		if(filterChargeAmount != null && filterChargeAmount !== '')
			filters.push({ name: 'fq', value: 'chargeAmount:' + filterChargeAmount });

		var filterChargeAmountFuture = $formFilters.find('.valueChargeAmountFuture').val();
		if(filterChargeAmountFuture != null && filterChargeAmountFuture !== '')
			filters.push({ name: 'fq', value: 'chargeAmountFuture:' + filterChargeAmountFuture });

		var filterChargeAmountDue = $formFilters.find('.valueChargeAmountDue').val();
		if(filterChargeAmountDue != null && filterChargeAmountDue !== '')
			filters.push({ name: 'fq', value: 'chargeAmountDue:' + filterChargeAmountDue });

		var filterChargeAmountNotPassed = $formFilters.find('.valueChargeAmountNotPassed').val();
		if(filterChargeAmountNotPassed != null && filterChargeAmountNotPassed !== '')
			filters.push({ name: 'fq', value: 'chargeAmountNotPassed:' + filterChargeAmountNotPassed });

		var filterChargesNow = $formFilters.find('.valueChargesNow').val();
		if(filterChargesNow != null && filterChargesNow !== '')
			filters.push({ name: 'fq', value: 'chargesNow:' + filterChargesNow });

		var $filterPaymentsCurrentCheckbox = $formFilters.find('input.valuePaymentsCurrent[type = "checkbox"]');
		var $filterPaymentsCurrentSelect = $formFilters.find('select.valuePaymentsCurrent');
		var filterPaymentsCurrent = $filterPaymentsCurrentSelect.length ? $filterPaymentsCurrentSelect.val() : $filterPaymentsCurrentCheckbox.prop('checked');
		var filterPaymentsCurrentSelectVal = $formFilters.find('select.filterPaymentsCurrent').val();
		var filterPaymentsCurrent = null;
		if(filterPaymentsCurrentSelectVal !== '')
			filterPaymentsCurrent = filterPaymentsCurrentSelectVal == 'true';
		if(filterPaymentsCurrent != null && filterPaymentsCurrent === true)
			filters.push({ name: 'fq', value: 'paymentsCurrent:' + filterPaymentsCurrent });

		var $filterPaymentsLateCheckbox = $formFilters.find('input.valuePaymentsLate[type = "checkbox"]');
		var $filterPaymentsLateSelect = $formFilters.find('select.valuePaymentsLate');
		var filterPaymentsLate = $filterPaymentsLateSelect.length ? $filterPaymentsLateSelect.val() : $filterPaymentsLateCheckbox.prop('checked');
		var filterPaymentsLateSelectVal = $formFilters.find('select.filterPaymentsLate').val();
		var filterPaymentsLate = null;
		if(filterPaymentsLateSelectVal !== '')
			filterPaymentsLate = filterPaymentsLateSelectVal == 'true';
		if(filterPaymentsLate != null && filterPaymentsLate === true)
			filters.push({ name: 'fq', value: 'paymentsLate:' + filterPaymentsLate });

		var filterPaymentsLateAmount = $formFilters.find('.valuePaymentsLateAmount').val();
		if(filterPaymentsLateAmount != null && filterPaymentsLateAmount !== '')
			filters.push({ name: 'fq', value: 'paymentsLateAmount:' + filterPaymentsLateAmount });

		var $filterPaymentsAheadCheckbox = $formFilters.find('input.valuePaymentsAhead[type = "checkbox"]');
		var $filterPaymentsAheadSelect = $formFilters.find('select.valuePaymentsAhead');
		var filterPaymentsAhead = $filterPaymentsAheadSelect.length ? $filterPaymentsAheadSelect.val() : $filterPaymentsAheadCheckbox.prop('checked');
		var filterPaymentsAheadSelectVal = $formFilters.find('select.filterPaymentsAhead').val();
		var filterPaymentsAhead = null;
		if(filterPaymentsAheadSelectVal !== '')
			filterPaymentsAhead = filterPaymentsAheadSelectVal == 'true';
		if(filterPaymentsAhead != null && filterPaymentsAhead === true)
			filters.push({ name: 'fq', value: 'paymentsAhead:' + filterPaymentsAhead });

		var $filterPaymentsPastDueCheckbox = $formFilters.find('input.valuePaymentsPastDue[type = "checkbox"]');
		var $filterPaymentsPastDueSelect = $formFilters.find('select.valuePaymentsPastDue');
		var filterPaymentsPastDue = $filterPaymentsPastDueSelect.length ? $filterPaymentsPastDueSelect.val() : $filterPaymentsPastDueCheckbox.prop('checked');
		var filterPaymentsPastDueSelectVal = $formFilters.find('select.filterPaymentsPastDue').val();
		var filterPaymentsPastDue = null;
		if(filterPaymentsPastDueSelectVal !== '')
			filterPaymentsPastDue = filterPaymentsPastDueSelectVal == 'true';
		if(filterPaymentsPastDue != null && filterPaymentsPastDue === true)
			filters.push({ name: 'fq', value: 'paymentsPastDue:' + filterPaymentsPastDue });

		var filterPaymentsPastDueAmount = $formFilters.find('.valuePaymentsPastDueAmount').val();
		if(filterPaymentsPastDueAmount != null && filterPaymentsPastDueAmount !== '')
			filters.push({ name: 'fq', value: 'paymentsPastDueAmount:' + filterPaymentsPastDueAmount });

		var $filterChargesCreatedCheckbox = $formFilters.find('input.valueChargesCreated[type = "checkbox"]');
		var $filterChargesCreatedSelect = $formFilters.find('select.valueChargesCreated');
		var filterChargesCreated = $filterChargesCreatedSelect.length ? $filterChargesCreatedSelect.val() : $filterChargesCreatedCheckbox.prop('checked');
		var filterChargesCreatedSelectVal = $formFilters.find('select.filterChargesCreated').val();
		var filterChargesCreated = null;
		if(filterChargesCreatedSelectVal !== '')
			filterChargesCreated = filterChargesCreatedSelectVal == 'true';
		if(filterChargesCreated != null && filterChargesCreated === true)
			filters.push({ name: 'fq', value: 'chargesCreated:' + filterChargesCreated });

		var filterCreatedYear = $formFilters.find('.valueCreatedYear').val();
		if(filterCreatedYear != null && filterCreatedYear !== '')
			filters.push({ name: 'fq', value: 'createdYear:' + filterCreatedYear });

		var filterCreatedDayOfWeek = $formFilters.find('.valueCreatedDayOfWeek').val();
		if(filterCreatedDayOfWeek != null && filterCreatedDayOfWeek !== '')
			filters.push({ name: 'fq', value: 'createdDayOfWeek:' + filterCreatedDayOfWeek });

		var filterCreatedMonthOfYear = $formFilters.find('.valueCreatedMonthOfYear').val();
		if(filterCreatedMonthOfYear != null && filterCreatedMonthOfYear !== '')
			filters.push({ name: 'fq', value: 'createdMonthOfYear:' + filterCreatedMonthOfYear });

		var filterCreatedHourOfDay = $formFilters.find('.valueCreatedHourOfDay').val();
		if(filterCreatedHourOfDay != null && filterCreatedHourOfDay !== '')
			filters.push({ name: 'fq', value: 'createdHourOfDay:' + filterCreatedHourOfDay });

		var filterEnrollmentDaysOfWeek = $formFilters.find('.valueEnrollmentDaysOfWeek').val();
		if(filterEnrollmentDaysOfWeek != null && filterEnrollmentDaysOfWeek !== '')
			filters.push({ name: 'fq', value: 'enrollmentDaysOfWeek:' + filterEnrollmentDaysOfWeek });

		var filterEnrollmentEmails = $formFilters.find('.valueEnrollmentEmails').val();
		if(filterEnrollmentEmails != null && filterEnrollmentEmails !== '')
			filters.push({ name: 'fq', value: 'enrollmentEmails:' + filterEnrollmentEmails });

		var filterEnrollmentEmail = $formFilters.find('.valueEnrollmentEmail').val();
		if(filterEnrollmentEmail != null && filterEnrollmentEmail !== '')
			filters.push({ name: 'fq', value: 'enrollmentEmail:' + filterEnrollmentEmail });

		var filterEnrollmentPhoneNumbers = $formFilters.find('.valueEnrollmentPhoneNumbers').val();
		if(filterEnrollmentPhoneNumbers != null && filterEnrollmentPhoneNumbers !== '')
			filters.push({ name: 'fq', value: 'enrollmentPhoneNumbers:' + filterEnrollmentPhoneNumbers });

		var filterEnrollmentPhoneNumber = $formFilters.find('.valueEnrollmentPhoneNumber').val();
		if(filterEnrollmentPhoneNumber != null && filterEnrollmentPhoneNumber !== '')
			filters.push({ name: 'fq', value: 'enrollmentPhoneNumber:' + filterEnrollmentPhoneNumber });

		var filterEnrollmentParentName = $formFilters.find('.valueEnrollmentParentName').val();
		if(filterEnrollmentParentName != null && filterEnrollmentParentName !== '')
			filters.push({ name: 'fq', value: 'enrollmentParentName:' + filterEnrollmentParentName });

		var filterEnrollmentDate1 = $formFilters.find('.valueEnrollmentDate1').val();
		if(filterEnrollmentDate1 != null && filterEnrollmentDate1 !== '')
			filters.push({ name: 'fq', value: 'enrollmentDate1:' + filterEnrollmentDate1 });

		var filterEnrollmentDate2 = $formFilters.find('.valueEnrollmentDate2').val();
		if(filterEnrollmentDate2 != null && filterEnrollmentDate2 !== '')
			filters.push({ name: 'fq', value: 'enrollmentDate2:' + filterEnrollmentDate2 });

		var filterEnrollmentDate3 = $formFilters.find('.valueEnrollmentDate3').val();
		if(filterEnrollmentDate3 != null && filterEnrollmentDate3 !== '')
			filters.push({ name: 'fq', value: 'enrollmentDate3:' + filterEnrollmentDate3 });

		var filterEnrollmentDate4 = $formFilters.find('.valueEnrollmentDate4').val();
		if(filterEnrollmentDate4 != null && filterEnrollmentDate4 !== '')
			filters.push({ name: 'fq', value: 'enrollmentDate4:' + filterEnrollmentDate4 });

		var filterEnrollmentDate5 = $formFilters.find('.valueEnrollmentDate5').val();
		if(filterEnrollmentDate5 != null && filterEnrollmentDate5 !== '')
			filters.push({ name: 'fq', value: 'enrollmentDate5:' + filterEnrollmentDate5 });

		var filterEnrollmentDate6 = $formFilters.find('.valueEnrollmentDate6').val();
		if(filterEnrollmentDate6 != null && filterEnrollmentDate6 !== '')
			filters.push({ name: 'fq', value: 'enrollmentDate6:' + filterEnrollmentDate6 });

		var filterEnrollmentDate7 = $formFilters.find('.valueEnrollmentDate7').val();
		if(filterEnrollmentDate7 != null && filterEnrollmentDate7 !== '')
			filters.push({ name: 'fq', value: 'enrollmentDate7:' + filterEnrollmentDate7 });

		var filterEnrollmentDate8 = $formFilters.find('.valueEnrollmentDate8').val();
		if(filterEnrollmentDate8 != null && filterEnrollmentDate8 !== '')
			filters.push({ name: 'fq', value: 'enrollmentDate8:' + filterEnrollmentDate8 });

		var filterEnrollmentDate9 = $formFilters.find('.valueEnrollmentDate9').val();
		if(filterEnrollmentDate9 != null && filterEnrollmentDate9 !== '')
			filters.push({ name: 'fq', value: 'enrollmentDate9:' + filterEnrollmentDate9 });

		var filterEnrollmentDate10 = $formFilters.find('.valueEnrollmentDate10').val();
		if(filterEnrollmentDate10 != null && filterEnrollmentDate10 !== '')
			filters.push({ name: 'fq', value: 'enrollmentDate10:' + filterEnrollmentDate10 });

		var filterChildImmunizationsReceived = $formFilters.find('.valueChildImmunizationsReceived').val();
		if(filterChildImmunizationsReceived != null && filterChildImmunizationsReceived !== '')
			filters.push({ name: 'fq', value: 'childImmunizationsReceived:' + filterChildImmunizationsReceived });

		var filterChildPhotosApproved = $formFilters.find('.valueChildPhotosApproved').val();
		if(filterChildPhotosApproved != null && filterChildPhotosApproved !== '')
			filters.push({ name: 'fq', value: 'childPhotosApproved:' + filterChildPhotosApproved });

		var filterEnrollmentCompleteName = $formFilters.find('.valueEnrollmentCompleteName').val();
		if(filterEnrollmentCompleteName != null && filterEnrollmentCompleteName !== '')
			filters.push({ name: 'fq', value: 'enrollmentCompleteName:' + filterEnrollmentCompleteName });
	}
	return filters;
}

function patchpaymentsSchoolEnrollmentVal(filters, v, val, success, error) {
	var vals = {};
	vals[v] = val;
	patchpaymentsSchoolEnrollmentVals(filters, vals, success, error);
}

function patchpaymentsSchoolEnrollmentVals(filters, vals, success, error) {
	$.ajax({
		url: '/enrollment/payments?' + $.param(filters)
		, dataType: 'json'
		, type: 'PATCH'
		, contentType: 'application/json; charset=utf-8'
		, data: JSON.stringify(vals)
		, success: success
		, error: error
	});
}

async function websocketSchoolEnrollment(success) {
	window.eventBus.onopen = function () {

		window.eventBus.registerHandler('websocketSchoolEnrollment', function (error, message) {
			var json = JSON.parse(message['body']);
			var id = json['id'];
			var pk = json['pk'];
			var pkPage = $('#SchoolEnrollmentForm :input[name=pk]').val();
			var pks = json['pks'];
			var empty = json['empty'];
			var numFound = parseInt(json['numFound']);
			var numPATCH = parseInt(json['numPATCH']);
			var percent = Math.floor( numPATCH / numFound * 100 ) + '%';
			var $box = $('<div>').attr('class', 'w3-display-topright w3-quarter box-' + id + ' ').attr('id', 'box-' + id).attr('data-numPATCH', numPATCH);
			var $margin = $('<div>').attr('class', 'w3-margin ').attr('id', 'margin-' + id);
			var $card = $('<div>').attr('class', 'w3-card w3-white ').attr('id', 'card-' + id);
			var $header = $('<div>').attr('class', 'w3-container fa-blue-gray ').attr('id', 'header-' + id);
			var $i = $('<i>').attr('class', 'fas fa-edit w3-margin-right ').attr('id', 'icon-' + id);
			var $headerSpan = $('<span>').attr('class', '').text('modify enrollments');
			var $x = $('<span>').attr('class', 'w3-button w3-display-topright ').attr('onclick', '$("#card-' + id + '").hide(); ').attr('id', 'x-' + id);
			var $body = $('<div>').attr('class', 'w3-container w3-padding ').attr('id', 'text-' + id);
			var $bar = $('<div>').attr('class', 'w3-light-gray ').attr('id', 'bar-' + id);
			var $progress = $('<div>').attr('class', 'w3-blue-gray ').attr('style', 'height: 24px; width: ' + percent + '; ').attr('id', 'progress-' + id).text(numPATCH + '/' + numFound);
			$card.append($header);
			$header.append($i);
			$header.append($headerSpan);
			$header.append($x);
			$body.append($bar);
			$bar.append($progress);
			$card.append($body);
			$box.append($margin);
			$margin.append($card);
			if(numPATCH < numFound) {
				var $old_box = $('.box-' + id);
				if(!$old_box.size()) {
					$('.top-box').append($box);
				} else if($old_box && $old_box.attr('data-numPATCH') < numFound) {
					$('.box-' + id).remove();
					$('.top-box').append($box);
				}
			} else {
				$('.box-' + id).remove();
			}
			if(pk && pkPage && pk == pkPage) {
				if(success)
					success(json);
			}
		});

		window.eventBus.registerHandler('websocketSchoolYear', function (error, message) {
			$('#Page_yearKey').trigger('oninput');
			$('#Page_yearKey_add').text('add a year');
			$('#Page_yearKey_add').removeClass('w3-disabled');
			$('#Page_yearKey_add').attr('disabled', false);
		});

		window.eventBus.registerHandler('websocketSchoolBlock', function (error, message) {
			$('#Page_blockKeys').trigger('oninput');
			$('#Page_blockKeys_add').text('add a block');
			$('#Page_blockKeys_add').removeClass('w3-disabled');
			$('#Page_blockKeys_add').attr('disabled', false);
		});

		window.eventBus.registerHandler('websocketSchoolChild', function (error, message) {
			$('#Page_childKey').trigger('oninput');
			$('#Page_childKey_add').text('add a child');
			$('#Page_childKey_add').removeClass('w3-disabled');
			$('#Page_childKey_add').attr('disabled', false);
		});

		window.eventBus.registerHandler('websocketSchoolMom', function (error, message) {
			$('#Page_momKeys').trigger('oninput');
			$('#Page_momKeys_add').text('add a mom');
			$('#Page_momKeys_add').removeClass('w3-disabled');
			$('#Page_momKeys_add').attr('disabled', false);
		});

		window.eventBus.registerHandler('websocketSchoolDad', function (error, message) {
			$('#Page_dadKeys').trigger('oninput');
			$('#Page_dadKeys_add').text('add a dad');
			$('#Page_dadKeys_add').removeClass('w3-disabled');
			$('#Page_dadKeys_add').attr('disabled', false);
		});

		window.eventBus.registerHandler('websocketSchoolGuardian', function (error, message) {
			$('#Page_guardianKeys').trigger('oninput');
			$('#Page_guardianKeys_add').text('add a guardian');
			$('#Page_guardianKeys_add').removeClass('w3-disabled');
			$('#Page_guardianKeys_add').attr('disabled', false);
		});

		window.eventBus.registerHandler('websocketSchoolPayment', function (error, message) {
			$('#Page_paymentKeys').trigger('oninput');
			$('#Page_paymentKeys_add').text('add a payment');
			$('#Page_paymentKeys_add').removeClass('w3-disabled');
			$('#Page_paymentKeys_add').attr('disabled', false);
		});

		window.eventBus.registerHandler('websocketSiteUser', function (error, message) {
			$('#Page_userKeys').trigger('oninput');
			$('#Page_userKeys_add').text('add a site user');
			$('#Page_userKeys_add').removeClass('w3-disabled');
			$('#Page_userKeys_add').attr('disabled', false);
		});

		window.eventBus.registerHandler('websocketSchoolYear', function (error, message) {
			$('#Page_yearKey').trigger('oninput');
			$('#Page_yearKey_add').text('add a year');
			$('#Page_yearKey_add').removeClass('w3-disabled');
			$('#Page_yearKey_add').attr('disabled', false);
		});

		window.eventBus.registerHandler('websocketSchoolBlock', function (error, message) {
			$('#Page_blockKeys').trigger('oninput');
			$('#Page_blockKeys_add').text('add a block');
			$('#Page_blockKeys_add').removeClass('w3-disabled');
			$('#Page_blockKeys_add').attr('disabled', false);
		});

		window.eventBus.registerHandler('websocketSchoolChild', function (error, message) {
			$('#Page_childKey').trigger('oninput');
			$('#Page_childKey_add').text('add a child');
			$('#Page_childKey_add').removeClass('w3-disabled');
			$('#Page_childKey_add').attr('disabled', false);
		});

		window.eventBus.registerHandler('websocketSchoolMom', function (error, message) {
			$('#Page_momKeys').trigger('oninput');
			$('#Page_momKeys_add').text('add a mom');
			$('#Page_momKeys_add').removeClass('w3-disabled');
			$('#Page_momKeys_add').attr('disabled', false);
		});

		window.eventBus.registerHandler('websocketSchoolDad', function (error, message) {
			$('#Page_dadKeys').trigger('oninput');
			$('#Page_dadKeys_add').text('add a dad');
			$('#Page_dadKeys_add').removeClass('w3-disabled');
			$('#Page_dadKeys_add').attr('disabled', false);
		});

		window.eventBus.registerHandler('websocketSchoolGuardian', function (error, message) {
			$('#Page_guardianKeys').trigger('oninput');
			$('#Page_guardianKeys_add').text('add a guardian');
			$('#Page_guardianKeys_add').removeClass('w3-disabled');
			$('#Page_guardianKeys_add').attr('disabled', false);
		});

		window.eventBus.registerHandler('websocketSchoolPayment', function (error, message) {
			$('#Page_paymentKeys').trigger('oninput');
			$('#Page_paymentKeys_add').text('add a payment');
			$('#Page_paymentKeys_add').removeClass('w3-disabled');
			$('#Page_paymentKeys_add').attr('disabled', false);
		});

		window.eventBus.registerHandler('websocketSiteUser', function (error, message) {
			$('#Page_userKeys').trigger('oninput');
			$('#Page_userKeys_add').text('add a site user');
			$('#Page_userKeys_add').removeClass('w3-disabled');
			$('#Page_userKeys_add').attr('disabled', false);
		});
	}
}
async function websocketSchoolEnrollmentInner(apiRequest) {
	var pk = apiRequest['pk'];
	var pks = apiRequest['pks'];
	var classes = apiRequest['classes'];
	var vars = apiRequest['vars'];
	var empty = apiRequest['empty'];

	if(pk != null) {
		searchSchoolEnrollmentVals([ {name: 'fq', value: 'pk:' + pk} ], function( data, textStatus, jQxhr ) {
			var o = data['list'][0];
			var val = o['pk'];
			if(vars.includes('pk')) {
				$('.inputSchoolEnrollment' + pk + 'Pk').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'Pk').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'Pk'));
			}
			var val = o['created'];
			if(vars.includes('created')) {
				$('.inputSchoolEnrollment' + pk + 'Created').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'Created').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'Created'));
			}
			var val = o['modified'];
			if(vars.includes('modified')) {
				$('.inputSchoolEnrollment' + pk + 'Modified').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'Modified').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'Modified'));
			}
			var val = o['objectId'];
			if(vars.includes('objectId')) {
				$('.inputSchoolEnrollment' + pk + 'ObjectId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'ObjectId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'ObjectId'));
			}
			var val = o['archived'];
			if(vars.includes('archived')) {
				$('.inputSchoolEnrollment' + pk + 'Archived').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'Archived').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'Archived'));
			}
			var val = o['deleted'];
			if(vars.includes('deleted')) {
				$('.inputSchoolEnrollment' + pk + 'Deleted').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'Deleted').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'Deleted'));
			}
			var val = o['photo'];
			if(vars.includes('photo')) {
				if(val === undefined)
					val = null;
				$('.imgSchoolEnrollment' + pk + 'Photo').each(function() {
					if(val !== $(this).attr('src'))
						$(this).attr('src', val);
				});
				$('.inputSchoolEnrollment' + pk + 'Photo').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'Photo').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'Photo'));
			}
			var val = o['enrollmentGroupName'];
			if(vars.includes('enrollmentGroupName')) {
				$('.inputSchoolEnrollment' + pk + 'EnrollmentGroupName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'EnrollmentGroupName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'EnrollmentGroupName'));
			}
			var val = o['customerProfileId'];
			if(vars.includes('customerProfileId')) {
				$('.inputSchoolEnrollment' + pk + 'CustomerProfileId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'CustomerProfileId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'CustomerProfileId'));
			}
			var val = o['enrollmentPaymentComplete'];
			if(vars.includes('enrollmentPaymentComplete')) {
				$('.inputSchoolEnrollment' + pk + 'EnrollmentPaymentComplete').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'EnrollmentPaymentComplete').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'EnrollmentPaymentComplete'));
			}
			var val = o['childPottyTrained'];
			if(vars.includes('childPottyTrained')) {
				$('.inputSchoolEnrollment' + pk + 'ChildPottyTrained').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'ChildPottyTrained').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'ChildPottyTrained'));
			}
			var val = o['enrollmentPaymentEachMonth'];
			if(vars.includes('enrollmentPaymentEachMonth')) {
				$('.inputSchoolEnrollment' + pk + 'EnrollmentPaymentEachMonth').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'EnrollmentPaymentEachMonth').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'EnrollmentPaymentEachMonth'));
			}
			var val = o['enrollmentImmunizations'];
			if(vars.includes('enrollmentImmunizations')) {
				$('.inputSchoolEnrollment' + pk + 'EnrollmentImmunizations').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'EnrollmentImmunizations').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'EnrollmentImmunizations'));
			}
			var val = o['enrollmentApproved'];
			if(vars.includes('enrollmentApproved')) {
				$('.inputSchoolEnrollment' + pk + 'EnrollmentApproved').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'EnrollmentApproved').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'EnrollmentApproved'));
			}
			var val = o['familyMarried'];
			if(vars.includes('familyMarried')) {
				$('.inputSchoolEnrollment' + pk + 'FamilyMarried').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'FamilyMarried').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'FamilyMarried'));
			}
			var val = o['familySeparated'];
			if(vars.includes('familySeparated')) {
				$('.inputSchoolEnrollment' + pk + 'FamilySeparated').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'FamilySeparated').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'FamilySeparated'));
			}
			var val = o['familyDivorced'];
			if(vars.includes('familyDivorced')) {
				$('.inputSchoolEnrollment' + pk + 'FamilyDivorced').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'FamilyDivorced').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'FamilyDivorced'));
			}
			var val = o['familyAddress'];
			if(vars.includes('familyAddress')) {
				$('.inputSchoolEnrollment' + pk + 'FamilyAddress').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'FamilyAddress').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'FamilyAddress'));
			}
			var val = o['enrollmentSpecialConsiderations'];
			if(vars.includes('enrollmentSpecialConsiderations')) {
				$('.inputSchoolEnrollment' + pk + 'EnrollmentSpecialConsiderations').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'EnrollmentSpecialConsiderations').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'EnrollmentSpecialConsiderations'));
			}
			var val = o['childMedicalConditions'];
			if(vars.includes('childMedicalConditions')) {
				$('.inputSchoolEnrollment' + pk + 'ChildMedicalConditions').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'ChildMedicalConditions').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'ChildMedicalConditions'));
			}
			var val = o['childPreviousSchoolsAttended'];
			if(vars.includes('childPreviousSchoolsAttended')) {
				$('.inputSchoolEnrollment' + pk + 'ChildPreviousSchoolsAttended').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'ChildPreviousSchoolsAttended').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'ChildPreviousSchoolsAttended'));
			}
			var val = o['familyHowDoYouKnowTheSchool'];
			if(vars.includes('familyHowDoYouKnowTheSchool')) {
				$('.inputSchoolEnrollment' + pk + 'FamilyHowDoYouKnowTheSchool').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'FamilyHowDoYouKnowTheSchool').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'FamilyHowDoYouKnowTheSchool'));
			}
			var val = o['childDescription'];
			if(vars.includes('childDescription')) {
				$('.inputSchoolEnrollment' + pk + 'ChildDescription').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'ChildDescription').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'ChildDescription'));
			}
			var val = o['childObjectives'];
			if(vars.includes('childObjectives')) {
				$('.inputSchoolEnrollment' + pk + 'ChildObjectives').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'ChildObjectives').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'ChildObjectives'));
			}
			var val = o['yearKey'];
			if(vars.includes('yearKey')) {
				$('.inputSchoolEnrollment' + pk + 'YearKey').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'YearKey').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'YearKey'));
			}
			var val = o['blockKeys'];
			if(vars.includes('blockKeys')) {
				$('.inputSchoolEnrollment' + pk + 'BlockKeys').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'BlockKeys').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'BlockKeys'));
			}
			var val = o['childKey'];
			if(vars.includes('childKey')) {
				$('.inputSchoolEnrollment' + pk + 'ChildKey').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'ChildKey').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'ChildKey'));
			}
			var val = o['guardianKeys'];
			if(vars.includes('guardianKeys')) {
				$('.inputSchoolEnrollment' + pk + 'GuardianKeys').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'GuardianKeys').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'GuardianKeys'));
			}
			var val = o['momKeys'];
			if(vars.includes('momKeys')) {
				$('.inputSchoolEnrollment' + pk + 'MomKeys').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'MomKeys').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'MomKeys'));
			}
			var val = o['dadKeys'];
			if(vars.includes('dadKeys')) {
				$('.inputSchoolEnrollment' + pk + 'DadKeys').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'DadKeys').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'DadKeys'));
			}
			var val = o['userKeys'];
			if(vars.includes('userKeys')) {
				$('.inputSchoolEnrollment' + pk + 'UserKeys').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'UserKeys').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'UserKeys'));
			}
			var val = o['paymentKeys'];
			if(vars.includes('paymentKeys')) {
				$('.inputSchoolEnrollment' + pk + 'PaymentKeys').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'PaymentKeys').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'PaymentKeys'));
			}
			var val = o['inheritPk'];
			if(vars.includes('inheritPk')) {
				$('.inputSchoolEnrollment' + pk + 'InheritPk').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'InheritPk').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'InheritPk'));
			}
			var val = o['id'];
			if(vars.includes('id')) {
				$('.inputSchoolEnrollment' + pk + 'Id').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'Id').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'Id'));
			}
			var val = o['classCanonicalName'];
			if(vars.includes('classCanonicalName')) {
				$('.inputSchoolEnrollment' + pk + 'ClassCanonicalName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'ClassCanonicalName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'ClassCanonicalName'));
			}
			var val = o['classSimpleName'];
			if(vars.includes('classSimpleName')) {
				$('.inputSchoolEnrollment' + pk + 'ClassSimpleName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'ClassSimpleName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'ClassSimpleName'));
			}
			var val = o['classCanonicalNames'];
			if(vars.includes('classCanonicalNames')) {
				$('.inputSchoolEnrollment' + pk + 'ClassCanonicalNames').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'ClassCanonicalNames').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'ClassCanonicalNames'));
			}
			var val = o['sessionId'];
			if(vars.includes('sessionId')) {
				$('.inputSchoolEnrollment' + pk + 'SessionId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'SessionId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'SessionId'));
			}
			var val = o['userId'];
			if(vars.includes('userId')) {
				$('.inputSchoolEnrollment' + pk + 'UserId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'UserId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'UserId'));
			}
			var val = o['userKey'];
			if(vars.includes('userKey')) {
				$('.inputSchoolEnrollment' + pk + 'UserKey').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'UserKey').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'UserKey'));
			}
			var val = o['saves'];
			if(vars.includes('saves')) {
				$('.inputSchoolEnrollment' + pk + 'Saves').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'Saves').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'Saves'));
			}
			var val = o['objectTitle'];
			if(vars.includes('objectTitle')) {
				$('.inputSchoolEnrollment' + pk + 'ObjectTitle').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'ObjectTitle').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'ObjectTitle'));
			}
			var val = o['objectSuggest'];
			if(vars.includes('objectSuggest')) {
				$('.inputSchoolEnrollment' + pk + 'ObjectSuggest').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'ObjectSuggest').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'ObjectSuggest'));
			}
			var val = o['objectText'];
			if(vars.includes('objectText')) {
				$('.inputSchoolEnrollment' + pk + 'ObjectText').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'ObjectText').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'ObjectText'));
			}
			var val = o['pageUrlId'];
			if(vars.includes('pageUrlId')) {
				$('.inputSchoolEnrollment' + pk + 'PageUrlId').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'PageUrlId').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'PageUrlId'));
			}
			var val = o['pageUrlPk'];
			if(vars.includes('pageUrlPk')) {
				$('.inputSchoolEnrollment' + pk + 'PageUrlPk').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'PageUrlPk').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'PageUrlPk'));
			}
			var val = o['pageUrlApi'];
			if(vars.includes('pageUrlApi')) {
				$('.inputSchoolEnrollment' + pk + 'PageUrlApi').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'PageUrlApi').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'PageUrlApi'));
			}
			var val = o['enrollmentKey'];
			if(vars.includes('enrollmentKey')) {
				$('.inputSchoolEnrollment' + pk + 'EnrollmentKey').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'EnrollmentKey').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'EnrollmentKey'));
			}
			var val = o['schoolKey'];
			if(vars.includes('schoolKey')) {
				$('.inputSchoolEnrollment' + pk + 'SchoolKey').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'SchoolKey').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'SchoolKey'));
			}
			var val = o['sessionKey'];
			if(vars.includes('sessionKey')) {
				$('.inputSchoolEnrollment' + pk + 'SessionKey').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'SessionKey').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'SessionKey'));
			}
			var val = o['ageKey'];
			if(vars.includes('ageKey')) {
				$('.inputSchoolEnrollment' + pk + 'AgeKey').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'AgeKey').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'AgeKey'));
			}
			var val = o['blockKey'];
			if(vars.includes('blockKey')) {
				$('.inputSchoolEnrollment' + pk + 'BlockKey').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'BlockKey').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'BlockKey'));
			}
			var val = o['enrollmentFormKey'];
			if(vars.includes('enrollmentFormKey')) {
				$('.inputSchoolEnrollment' + pk + 'EnrollmentFormKey').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'EnrollmentFormKey').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'EnrollmentFormKey'));
			}
			var val = o['educationSort'];
			if(vars.includes('educationSort')) {
				$('.inputSchoolEnrollment' + pk + 'EducationSort').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'EducationSort').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'EducationSort'));
			}
			var val = o['schoolSort'];
			if(vars.includes('schoolSort')) {
				$('.inputSchoolEnrollment' + pk + 'SchoolSort').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'SchoolSort').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'SchoolSort'));
			}
			var val = o['yearSort'];
			if(vars.includes('yearSort')) {
				$('.inputSchoolEnrollment' + pk + 'YearSort').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'YearSort').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'YearSort'));
			}
			var val = o['seasonSort'];
			if(vars.includes('seasonSort')) {
				$('.inputSchoolEnrollment' + pk + 'SeasonSort').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'SeasonSort').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'SeasonSort'));
			}
			var val = o['sessionSort'];
			if(vars.includes('sessionSort')) {
				$('.inputSchoolEnrollment' + pk + 'SessionSort').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'SessionSort').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'SessionSort'));
			}
			var val = o['ageSort'];
			if(vars.includes('ageSort')) {
				$('.inputSchoolEnrollment' + pk + 'AgeSort').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'AgeSort').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'AgeSort'));
			}
			var val = o['childFirstName'];
			if(vars.includes('childFirstName')) {
				$('.inputSchoolEnrollment' + pk + 'ChildFirstName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'ChildFirstName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'ChildFirstName'));
			}
			var val = o['childFirstNamePreferred'];
			if(vars.includes('childFirstNamePreferred')) {
				$('.inputSchoolEnrollment' + pk + 'ChildFirstNamePreferred').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'ChildFirstNamePreferred').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'ChildFirstNamePreferred'));
			}
			var val = o['childFamilyName'];
			if(vars.includes('childFamilyName')) {
				$('.inputSchoolEnrollment' + pk + 'ChildFamilyName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'ChildFamilyName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'ChildFamilyName'));
			}
			var val = o['momFirstName'];
			if(vars.includes('momFirstName')) {
				$('.inputSchoolEnrollment' + pk + 'MomFirstName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'MomFirstName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'MomFirstName'));
			}
			var val = o['momFirstNamePreferred'];
			if(vars.includes('momFirstNamePreferred')) {
				$('.inputSchoolEnrollment' + pk + 'MomFirstNamePreferred').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'MomFirstNamePreferred').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'MomFirstNamePreferred'));
			}
			var val = o['momCompleteNamePreferred'];
			if(vars.includes('momCompleteNamePreferred')) {
				$('.inputSchoolEnrollment' + pk + 'MomCompleteNamePreferred').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'MomCompleteNamePreferred').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'MomCompleteNamePreferred'));
			}
			var val = o['dadFirstName'];
			if(vars.includes('dadFirstName')) {
				$('.inputSchoolEnrollment' + pk + 'DadFirstName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'DadFirstName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'DadFirstName'));
			}
			var val = o['dadFirstNamePreferred'];
			if(vars.includes('dadFirstNamePreferred')) {
				$('.inputSchoolEnrollment' + pk + 'DadFirstNamePreferred').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'DadFirstNamePreferred').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'DadFirstNamePreferred'));
			}
			var val = o['dadCompleteNamePreferred'];
			if(vars.includes('dadCompleteNamePreferred')) {
				$('.inputSchoolEnrollment' + pk + 'DadCompleteNamePreferred').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'DadCompleteNamePreferred').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'DadCompleteNamePreferred'));
			}
			var val = o['childCompleteName'];
			if(vars.includes('childCompleteName')) {
				$('.inputSchoolEnrollment' + pk + 'ChildCompleteName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'ChildCompleteName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'ChildCompleteName'));
			}
			var val = o['childCompleteNamePreferred'];
			if(vars.includes('childCompleteNamePreferred')) {
				$('.inputSchoolEnrollment' + pk + 'ChildCompleteNamePreferred').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'ChildCompleteNamePreferred').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'ChildCompleteNamePreferred'));
			}
			var val = o['childBirthDate'];
			if(val != null) {
				var t = moment(val, 'YYYY-MM-DD');
				if(t)
					val = t.format('MM/DD/YYYY');
			}
			if(vars.includes('childBirthDate')) {
				$('.inputSchoolEnrollment' + pk + 'ChildBirthDate').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'ChildBirthDate').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'ChildBirthDate'));
			}
			var val = o['childBirthDateYear'];
			if(vars.includes('childBirthDateYear')) {
				$('.inputSchoolEnrollment' + pk + 'ChildBirthDateYear').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'ChildBirthDateYear').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'ChildBirthDateYear'));
			}
			var val = o['childBirthDateMonthOfYear'];
			if(vars.includes('childBirthDateMonthOfYear')) {
				$('.inputSchoolEnrollment' + pk + 'ChildBirthDateMonthOfYear').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'ChildBirthDateMonthOfYear').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'ChildBirthDateMonthOfYear'));
			}
			var val = o['childBirthDateDayOfWeek'];
			if(vars.includes('childBirthDateDayOfWeek')) {
				$('.inputSchoolEnrollment' + pk + 'ChildBirthDateDayOfWeek').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'ChildBirthDateDayOfWeek').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'ChildBirthDateDayOfWeek'));
			}
			var val = o['childBirthMonth'];
			if(vars.includes('childBirthMonth')) {
				$('.inputSchoolEnrollment' + pk + 'ChildBirthMonth').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'ChildBirthMonth').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'ChildBirthMonth'));
			}
			var val = o['childBirthDay'];
			if(vars.includes('childBirthDay')) {
				$('.inputSchoolEnrollment' + pk + 'ChildBirthDay').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'ChildBirthDay').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'ChildBirthDay'));
			}
			var val = o['schoolName'];
			if(vars.includes('schoolName')) {
				$('.inputSchoolEnrollment' + pk + 'SchoolName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'SchoolName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'SchoolName'));
			}
			var val = o['schoolCompleteName'];
			if(vars.includes('schoolCompleteName')) {
				$('.inputSchoolEnrollment' + pk + 'SchoolCompleteName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'SchoolCompleteName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'SchoolCompleteName'));
			}
			var val = o['schoolLocation'];
			if(vars.includes('schoolLocation')) {
				$('.inputSchoolEnrollment' + pk + 'SchoolLocation').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'SchoolLocation').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'SchoolLocation'));
			}
			var val = o['schoolAddress'];
			if(vars.includes('schoolAddress')) {
				$('.inputSchoolEnrollment' + pk + 'SchoolAddress').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'SchoolAddress').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'SchoolAddress'));
			}
			var val = o['schoolPhoneNumber'];
			if(vars.includes('schoolPhoneNumber')) {
				$('.inputSchoolEnrollment' + pk + 'SchoolPhoneNumber').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'SchoolPhoneNumber').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'SchoolPhoneNumber'));
			}
			var val = o['schoolForm'];
			if(vars.includes('schoolForm')) {
				$('.inputSchoolEnrollment' + pk + 'SchoolForm').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'SchoolForm').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'SchoolForm'));
			}
			var val = o['schoolNumber'];
			if(vars.includes('schoolNumber')) {
				$('.inputSchoolEnrollment' + pk + 'SchoolNumber').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'SchoolNumber').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'SchoolNumber'));
			}
			var val = o['schoolAdministratorName'];
			if(vars.includes('schoolAdministratorName')) {
				$('.inputSchoolEnrollment' + pk + 'SchoolAdministratorName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'SchoolAdministratorName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'SchoolAdministratorName'));
			}
			var val = o['yearStart'];
			if(vars.includes('yearStart')) {
				$('.inputSchoolEnrollment' + pk + 'YearStart').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'YearStart').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'YearStart'));
			}
			var val = o['yearEnd'];
			if(vars.includes('yearEnd')) {
				$('.inputSchoolEnrollment' + pk + 'YearEnd').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'YearEnd').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'YearEnd'));
			}
			var val = o['seasonStartDate'];
			if(val != null) {
				var t = moment(val, 'YYYY-MM-DD');
				if(t)
					val = t.format('MM/DD/YYYY');
			}
			if(vars.includes('seasonStartDate')) {
				$('.inputSchoolEnrollment' + pk + 'SeasonStartDate').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'SeasonStartDate').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'SeasonStartDate'));
			}
			var val = o['yearEnrollmentFee'];
			if(vars.includes('yearEnrollmentFee')) {
				$('.inputSchoolEnrollment' + pk + 'YearEnrollmentFee').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'YearEnrollmentFee').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'YearEnrollmentFee'));
			}
			var val = o['sessionStartDate'];
			if(val != null) {
				var t = moment(val, 'YYYY-MM-DD');
				if(t)
					val = t.format('MM/DD/YYYY');
			}
			if(vars.includes('sessionStartDate')) {
				$('.inputSchoolEnrollment' + pk + 'SessionStartDate').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'SessionStartDate').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'SessionStartDate'));
			}
			var val = o['sessionEndDate'];
			if(val != null) {
				var t = moment(val, 'YYYY-MM-DD');
				if(t)
					val = t.format('MM/DD/YYYY');
			}
			if(vars.includes('sessionEndDate')) {
				$('.inputSchoolEnrollment' + pk + 'SessionEndDate').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'SessionEndDate').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'SessionEndDate'));
			}
			var val = o['ageCompleteName'];
			if(vars.includes('ageCompleteName')) {
				$('.inputSchoolEnrollment' + pk + 'AgeCompleteName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'AgeCompleteName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'AgeCompleteName'));
			}
			var val = o['ageStart'];
			if(vars.includes('ageStart')) {
				$('.inputSchoolEnrollment' + pk + 'AgeStart').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'AgeStart').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'AgeStart'));
			}
			var val = o['ageEnd'];
			if(vars.includes('ageEnd')) {
				$('.inputSchoolEnrollment' + pk + 'AgeEnd').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'AgeEnd').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'AgeEnd'));
			}
			var val = o['blockStartTime'];
			if(val != null) {
				var t = moment(val, 'HH:mm');
				if(t)
					val = t.format('h:mm a');
			}
			if(vars.includes('blockStartTime')) {
				$('.inputSchoolEnrollment' + pk + 'BlockStartTime').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'BlockStartTime').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'BlockStartTime'));
			}
			var val = o['blockEndTime'];
			if(val != null) {
				var t = moment(val, 'HH:mm');
				if(t)
					val = t.format('h:mm a');
			}
			if(vars.includes('blockEndTime')) {
				$('.inputSchoolEnrollment' + pk + 'BlockEndTime').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'BlockEndTime').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'BlockEndTime'));
			}
			var val = o['blockPricePerMonth'];
			if(vars.includes('blockPricePerMonth')) {
				$('.inputSchoolEnrollment' + pk + 'BlockPricePerMonth').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'BlockPricePerMonth').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'BlockPricePerMonth'));
			}
			var val = o['blockSunday'];
			if(vars.includes('blockSunday')) {
				$('.inputSchoolEnrollment' + pk + 'BlockSunday').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'BlockSunday').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'BlockSunday'));
			}
			var val = o['blockMonday'];
			if(vars.includes('blockMonday')) {
				$('.inputSchoolEnrollment' + pk + 'BlockMonday').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'BlockMonday').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'BlockMonday'));
			}
			var val = o['blockTuesday'];
			if(vars.includes('blockTuesday')) {
				$('.inputSchoolEnrollment' + pk + 'BlockTuesday').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'BlockTuesday').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'BlockTuesday'));
			}
			var val = o['blockWednesday'];
			if(vars.includes('blockWednesday')) {
				$('.inputSchoolEnrollment' + pk + 'BlockWednesday').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'BlockWednesday').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'BlockWednesday'));
			}
			var val = o['blockThursday'];
			if(vars.includes('blockThursday')) {
				$('.inputSchoolEnrollment' + pk + 'BlockThursday').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'BlockThursday').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'BlockThursday'));
			}
			var val = o['blockFriday'];
			if(vars.includes('blockFriday')) {
				$('.inputSchoolEnrollment' + pk + 'BlockFriday').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'BlockFriday').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'BlockFriday'));
			}
			var val = o['blockSaturday'];
			if(vars.includes('blockSaturday')) {
				$('.inputSchoolEnrollment' + pk + 'BlockSaturday').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'BlockSaturday').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'BlockSaturday'));
			}
			var val = o['blockTotalPrice'];
			if(vars.includes('blockTotalPrice')) {
				$('.inputSchoolEnrollment' + pk + 'BlockTotalPrice').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'BlockTotalPrice').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'BlockTotalPrice'));
			}
			var val = o['blockAdminName'];
			if(vars.includes('blockAdminName')) {
				$('.inputSchoolEnrollment' + pk + 'BlockAdminName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'BlockAdminName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'BlockAdminName'));
			}
			var val = o['blockShortName'];
			if(vars.includes('blockShortName')) {
				$('.inputSchoolEnrollment' + pk + 'BlockShortName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'BlockShortName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'BlockShortName'));
			}
			var val = o['blockCompleteName'];
			if(vars.includes('blockCompleteName')) {
				$('.inputSchoolEnrollment' + pk + 'BlockCompleteName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'BlockCompleteName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'BlockCompleteName'));
			}
			var val = o['enrollmentGroupColor'];
			if(vars.includes('enrollmentGroupColor')) {
				$('.inputSchoolEnrollment' + pk + 'EnrollmentGroupColor').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'EnrollmentGroupColor').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'EnrollmentGroupColor'));
			}
			var val = o['enrollmentChargeDate'];
			if(val != null) {
				var t = moment(val, 'YYYY-MM-DD');
				if(t)
					val = t.format('MM/DD/YYYY');
			}
			if(vars.includes('enrollmentChargeDate')) {
				$('.inputSchoolEnrollment' + pk + 'EnrollmentChargeDate').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'EnrollmentChargeDate').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'EnrollmentChargeDate'));
			}
			var val = o['paymentLastDate'];
			if(val != null) {
				var t = moment(val, 'YYYY-MM-DD');
				if(t)
					val = t.format('MM/DD/YYYY');
			}
			if(vars.includes('paymentLastDate')) {
				$('.inputSchoolEnrollment' + pk + 'PaymentLastDate').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'PaymentLastDate').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'PaymentLastDate'));
			}
			var val = o['paymentLastStr'];
			if(vars.includes('paymentLastStr')) {
				$('.inputSchoolEnrollment' + pk + 'PaymentLastStr').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'PaymentLastStr').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'PaymentLastStr'));
			}
			var val = o['paymentAmount'];
			if(vars.includes('paymentAmount')) {
				$('.inputSchoolEnrollment' + pk + 'PaymentAmount').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'PaymentAmount').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'PaymentAmount'));
			}
			var val = o['chargeAmount'];
			if(vars.includes('chargeAmount')) {
				$('.inputSchoolEnrollment' + pk + 'ChargeAmount').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'ChargeAmount').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'ChargeAmount'));
			}
			var val = o['chargeAmountFuture'];
			if(vars.includes('chargeAmountFuture')) {
				$('.inputSchoolEnrollment' + pk + 'ChargeAmountFuture').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'ChargeAmountFuture').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'ChargeAmountFuture'));
			}
			var val = o['chargeAmountDue'];
			if(vars.includes('chargeAmountDue')) {
				$('.inputSchoolEnrollment' + pk + 'ChargeAmountDue').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'ChargeAmountDue').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'ChargeAmountDue'));
			}
			var val = o['chargeAmountNotPassed'];
			if(vars.includes('chargeAmountNotPassed')) {
				$('.inputSchoolEnrollment' + pk + 'ChargeAmountNotPassed').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'ChargeAmountNotPassed').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'ChargeAmountNotPassed'));
			}
			var val = o['chargesNow'];
			if(vars.includes('chargesNow')) {
				$('.inputSchoolEnrollment' + pk + 'ChargesNow').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'ChargesNow').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'ChargesNow'));
			}
			var val = o['paymentsCurrent'];
			if(vars.includes('paymentsCurrent')) {
				$('.inputSchoolEnrollment' + pk + 'PaymentsCurrent').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'PaymentsCurrent').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'PaymentsCurrent'));
			}
			var val = o['paymentsLate'];
			if(vars.includes('paymentsLate')) {
				$('.inputSchoolEnrollment' + pk + 'PaymentsLate').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'PaymentsLate').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'PaymentsLate'));
			}
			var val = o['paymentsLateAmount'];
			if(vars.includes('paymentsLateAmount')) {
				$('.inputSchoolEnrollment' + pk + 'PaymentsLateAmount').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'PaymentsLateAmount').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'PaymentsLateAmount'));
			}
			var val = o['paymentsAhead'];
			if(vars.includes('paymentsAhead')) {
				$('.inputSchoolEnrollment' + pk + 'PaymentsAhead').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'PaymentsAhead').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'PaymentsAhead'));
			}
			var val = o['paymentsPastDue'];
			if(vars.includes('paymentsPastDue')) {
				$('.inputSchoolEnrollment' + pk + 'PaymentsPastDue').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'PaymentsPastDue').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'PaymentsPastDue'));
			}
			var val = o['paymentsPastDueAmount'];
			if(vars.includes('paymentsPastDueAmount')) {
				$('.inputSchoolEnrollment' + pk + 'PaymentsPastDueAmount').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'PaymentsPastDueAmount').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'PaymentsPastDueAmount'));
			}
			var val = o['chargesCreated'];
			if(vars.includes('chargesCreated')) {
				$('.inputSchoolEnrollment' + pk + 'ChargesCreated').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'ChargesCreated').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'ChargesCreated'));
			}
			var val = o['createdYear'];
			if(vars.includes('createdYear')) {
				$('.inputSchoolEnrollment' + pk + 'CreatedYear').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'CreatedYear').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'CreatedYear'));
			}
			var val = o['createdDayOfWeek'];
			if(vars.includes('createdDayOfWeek')) {
				$('.inputSchoolEnrollment' + pk + 'CreatedDayOfWeek').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'CreatedDayOfWeek').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'CreatedDayOfWeek'));
			}
			var val = o['createdMonthOfYear'];
			if(vars.includes('createdMonthOfYear')) {
				$('.inputSchoolEnrollment' + pk + 'CreatedMonthOfYear').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'CreatedMonthOfYear').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'CreatedMonthOfYear'));
			}
			var val = o['createdHourOfDay'];
			if(vars.includes('createdHourOfDay')) {
				$('.inputSchoolEnrollment' + pk + 'CreatedHourOfDay').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'CreatedHourOfDay').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'CreatedHourOfDay'));
			}
			var val = o['enrollmentDaysOfWeek'];
			if(vars.includes('enrollmentDaysOfWeek')) {
				$('.inputSchoolEnrollment' + pk + 'EnrollmentDaysOfWeek').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'EnrollmentDaysOfWeek').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'EnrollmentDaysOfWeek'));
			}
			var val = o['enrollmentParentNames'];
			if(vars.includes('enrollmentParentNames')) {
				$('.inputSchoolEnrollment' + pk + 'EnrollmentParentNames').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'EnrollmentParentNames').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'EnrollmentParentNames'));
			}
			var val = o['enrollmentEmails'];
			if(vars.includes('enrollmentEmails')) {
				$('.inputSchoolEnrollment' + pk + 'EnrollmentEmails').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'EnrollmentEmails').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'EnrollmentEmails'));
			}
			var val = o['enrollmentEmail'];
			if(vars.includes('enrollmentEmail')) {
				$('.inputSchoolEnrollment' + pk + 'EnrollmentEmail').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'EnrollmentEmail').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'EnrollmentEmail'));
			}
			var val = o['enrollmentParentEmails'];
			if(vars.includes('enrollmentParentEmails')) {
				$('.inputSchoolEnrollment' + pk + 'EnrollmentParentEmails').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'EnrollmentParentEmails').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'EnrollmentParentEmails'));
			}
			var val = o['enrollmentPhoneNumbers'];
			if(vars.includes('enrollmentPhoneNumbers')) {
				$('.inputSchoolEnrollment' + pk + 'EnrollmentPhoneNumbers').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'EnrollmentPhoneNumbers').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'EnrollmentPhoneNumbers'));
			}
			var val = o['enrollmentPhoneNumber'];
			if(vars.includes('enrollmentPhoneNumber')) {
				$('.inputSchoolEnrollment' + pk + 'EnrollmentPhoneNumber').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'EnrollmentPhoneNumber').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'EnrollmentPhoneNumber'));
			}
			var val = o['enrollmentParentName'];
			if(vars.includes('enrollmentParentName')) {
				$('.inputSchoolEnrollment' + pk + 'EnrollmentParentName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'EnrollmentParentName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'EnrollmentParentName'));
			}
			var val = o['enrollmentParentNameLines'];
			if(vars.includes('enrollmentParentNameLines')) {
				$('.inputSchoolEnrollment' + pk + 'EnrollmentParentNameLines').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'EnrollmentParentNameLines').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'EnrollmentParentNameLines'));
			}
			var val = o['enrollmentParentEmailLines'];
			if(vars.includes('enrollmentParentEmailLines')) {
				$('.inputSchoolEnrollment' + pk + 'EnrollmentParentEmailLines').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'EnrollmentParentEmailLines').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'EnrollmentParentEmailLines'));
			}
			var val = o['enrollmentParentDetailLines'];
			if(vars.includes('enrollmentParentDetailLines')) {
				$('.inputSchoolEnrollment' + pk + 'EnrollmentParentDetailLines').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'EnrollmentParentDetailLines').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'EnrollmentParentDetailLines'));
			}
			var val = o['enrollmentPickupDetailLines'];
			if(vars.includes('enrollmentPickupDetailLines')) {
				$('.inputSchoolEnrollment' + pk + 'EnrollmentPickupDetailLines').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'EnrollmentPickupDetailLines').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'EnrollmentPickupDetailLines'));
			}
			var val = o['enrollmentEmergencyContactDetailLines'];
			if(vars.includes('enrollmentEmergencyContactDetailLines')) {
				$('.inputSchoolEnrollment' + pk + 'EnrollmentEmergencyContactDetailLines').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'EnrollmentEmergencyContactDetailLines').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'EnrollmentEmergencyContactDetailLines'));
			}
			var val = o['enrollmentSignature1'];
			if(vars.includes('enrollmentSignature1')) {
				if(val === undefined)
					val = null;
				$('.signatureInputSchoolEnrollment' + pk + 'EnrollmentSignature1').each(function() {
					if(val !== $('.signatureImgSchoolEnrollment' + pk + 'EnrollmentSignature1').attr('src'))
						$('.signatureImgSchoolEnrollment' + pk + 'EnrollmentSignature1').attr('src', val == null ? 'data:image/png;base64,' : val);
					addGlow($('.signatureInputSchoolEnrollment' + pk + 'EnrollmentSignature1'));
				});
				$('.inputSchoolEnrollment' + pk + 'EnrollmentSignature1').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'EnrollmentSignature1').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'EnrollmentSignature1'));
			}
			var val = o['enrollmentSignature2'];
			if(vars.includes('enrollmentSignature2')) {
				if(val === undefined)
					val = null;
				$('.signatureInputSchoolEnrollment' + pk + 'EnrollmentSignature2').each(function() {
					if(val !== $('.signatureImgSchoolEnrollment' + pk + 'EnrollmentSignature2').attr('src'))
						$('.signatureImgSchoolEnrollment' + pk + 'EnrollmentSignature2').attr('src', val == null ? 'data:image/png;base64,' : val);
					addGlow($('.signatureInputSchoolEnrollment' + pk + 'EnrollmentSignature2'));
				});
				$('.inputSchoolEnrollment' + pk + 'EnrollmentSignature2').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'EnrollmentSignature2').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'EnrollmentSignature2'));
			}
			var val = o['enrollmentSignature3'];
			if(vars.includes('enrollmentSignature3')) {
				if(val === undefined)
					val = null;
				$('.signatureInputSchoolEnrollment' + pk + 'EnrollmentSignature3').each(function() {
					if(val !== $('.signatureImgSchoolEnrollment' + pk + 'EnrollmentSignature3').attr('src'))
						$('.signatureImgSchoolEnrollment' + pk + 'EnrollmentSignature3').attr('src', val == null ? 'data:image/png;base64,' : val);
					addGlow($('.signatureInputSchoolEnrollment' + pk + 'EnrollmentSignature3'));
				});
				$('.inputSchoolEnrollment' + pk + 'EnrollmentSignature3').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'EnrollmentSignature3').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'EnrollmentSignature3'));
			}
			var val = o['enrollmentSignature4'];
			if(vars.includes('enrollmentSignature4')) {
				if(val === undefined)
					val = null;
				$('.signatureInputSchoolEnrollment' + pk + 'EnrollmentSignature4').each(function() {
					if(val !== $('.signatureImgSchoolEnrollment' + pk + 'EnrollmentSignature4').attr('src'))
						$('.signatureImgSchoolEnrollment' + pk + 'EnrollmentSignature4').attr('src', val == null ? 'data:image/png;base64,' : val);
					addGlow($('.signatureInputSchoolEnrollment' + pk + 'EnrollmentSignature4'));
				});
				$('.inputSchoolEnrollment' + pk + 'EnrollmentSignature4').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'EnrollmentSignature4').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'EnrollmentSignature4'));
			}
			var val = o['enrollmentSignature5'];
			if(vars.includes('enrollmentSignature5')) {
				if(val === undefined)
					val = null;
				$('.signatureInputSchoolEnrollment' + pk + 'EnrollmentSignature5').each(function() {
					if(val !== $('.signatureImgSchoolEnrollment' + pk + 'EnrollmentSignature5').attr('src'))
						$('.signatureImgSchoolEnrollment' + pk + 'EnrollmentSignature5').attr('src', val == null ? 'data:image/png;base64,' : val);
					addGlow($('.signatureInputSchoolEnrollment' + pk + 'EnrollmentSignature5'));
				});
				$('.inputSchoolEnrollment' + pk + 'EnrollmentSignature5').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'EnrollmentSignature5').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'EnrollmentSignature5'));
			}
			var val = o['enrollmentSignature6'];
			if(vars.includes('enrollmentSignature6')) {
				if(val === undefined)
					val = null;
				$('.signatureInputSchoolEnrollment' + pk + 'EnrollmentSignature6').each(function() {
					if(val !== $('.signatureImgSchoolEnrollment' + pk + 'EnrollmentSignature6').attr('src'))
						$('.signatureImgSchoolEnrollment' + pk + 'EnrollmentSignature6').attr('src', val == null ? 'data:image/png;base64,' : val);
					addGlow($('.signatureInputSchoolEnrollment' + pk + 'EnrollmentSignature6'));
				});
				$('.inputSchoolEnrollment' + pk + 'EnrollmentSignature6').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'EnrollmentSignature6').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'EnrollmentSignature6'));
			}
			var val = o['enrollmentSignature7'];
			if(vars.includes('enrollmentSignature7')) {
				if(val === undefined)
					val = null;
				$('.signatureInputSchoolEnrollment' + pk + 'EnrollmentSignature7').each(function() {
					if(val !== $('.signatureImgSchoolEnrollment' + pk + 'EnrollmentSignature7').attr('src'))
						$('.signatureImgSchoolEnrollment' + pk + 'EnrollmentSignature7').attr('src', val == null ? 'data:image/png;base64,' : val);
					addGlow($('.signatureInputSchoolEnrollment' + pk + 'EnrollmentSignature7'));
				});
				$('.inputSchoolEnrollment' + pk + 'EnrollmentSignature7').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'EnrollmentSignature7').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'EnrollmentSignature7'));
			}
			var val = o['enrollmentSignature8'];
			if(vars.includes('enrollmentSignature8')) {
				if(val === undefined)
					val = null;
				$('.signatureInputSchoolEnrollment' + pk + 'EnrollmentSignature8').each(function() {
					if(val !== $('.signatureImgSchoolEnrollment' + pk + 'EnrollmentSignature8').attr('src'))
						$('.signatureImgSchoolEnrollment' + pk + 'EnrollmentSignature8').attr('src', val == null ? 'data:image/png;base64,' : val);
					addGlow($('.signatureInputSchoolEnrollment' + pk + 'EnrollmentSignature8'));
				});
				$('.inputSchoolEnrollment' + pk + 'EnrollmentSignature8').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'EnrollmentSignature8').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'EnrollmentSignature8'));
			}
			var val = o['enrollmentSignature9'];
			if(vars.includes('enrollmentSignature9')) {
				if(val === undefined)
					val = null;
				$('.signatureInputSchoolEnrollment' + pk + 'EnrollmentSignature9').each(function() {
					if(val !== $('.signatureImgSchoolEnrollment' + pk + 'EnrollmentSignature9').attr('src'))
						$('.signatureImgSchoolEnrollment' + pk + 'EnrollmentSignature9').attr('src', val == null ? 'data:image/png;base64,' : val);
					addGlow($('.signatureInputSchoolEnrollment' + pk + 'EnrollmentSignature9'));
				});
				$('.inputSchoolEnrollment' + pk + 'EnrollmentSignature9').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'EnrollmentSignature9').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'EnrollmentSignature9'));
			}
			var val = o['enrollmentSignature10'];
			if(vars.includes('enrollmentSignature10')) {
				if(val === undefined)
					val = null;
				$('.signatureInputSchoolEnrollment' + pk + 'EnrollmentSignature10').each(function() {
					if(val !== $('.signatureImgSchoolEnrollment' + pk + 'EnrollmentSignature10').attr('src'))
						$('.signatureImgSchoolEnrollment' + pk + 'EnrollmentSignature10').attr('src', val == null ? 'data:image/png;base64,' : val);
					addGlow($('.signatureInputSchoolEnrollment' + pk + 'EnrollmentSignature10'));
				});
				$('.inputSchoolEnrollment' + pk + 'EnrollmentSignature10').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'EnrollmentSignature10').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'EnrollmentSignature10'));
			}
			var val = o['enrollmentDate1'];
			if(val != null) {
				var t = moment(val, 'YYYY-MM-DD');
				if(t)
					val = t.format('MM/DD/YYYY');
			}
			if(vars.includes('enrollmentDate1')) {
				$('.inputSchoolEnrollment' + pk + 'EnrollmentDate1').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'EnrollmentDate1').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'EnrollmentDate1'));
			}
			var val = o['enrollmentDate2'];
			if(val != null) {
				var t = moment(val, 'YYYY-MM-DD');
				if(t)
					val = t.format('MM/DD/YYYY');
			}
			if(vars.includes('enrollmentDate2')) {
				$('.inputSchoolEnrollment' + pk + 'EnrollmentDate2').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'EnrollmentDate2').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'EnrollmentDate2'));
			}
			var val = o['enrollmentDate3'];
			if(val != null) {
				var t = moment(val, 'YYYY-MM-DD');
				if(t)
					val = t.format('MM/DD/YYYY');
			}
			if(vars.includes('enrollmentDate3')) {
				$('.inputSchoolEnrollment' + pk + 'EnrollmentDate3').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'EnrollmentDate3').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'EnrollmentDate3'));
			}
			var val = o['enrollmentDate4'];
			if(val != null) {
				var t = moment(val, 'YYYY-MM-DD');
				if(t)
					val = t.format('MM/DD/YYYY');
			}
			if(vars.includes('enrollmentDate4')) {
				$('.inputSchoolEnrollment' + pk + 'EnrollmentDate4').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'EnrollmentDate4').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'EnrollmentDate4'));
			}
			var val = o['enrollmentDate5'];
			if(val != null) {
				var t = moment(val, 'YYYY-MM-DD');
				if(t)
					val = t.format('MM/DD/YYYY');
			}
			if(vars.includes('enrollmentDate5')) {
				$('.inputSchoolEnrollment' + pk + 'EnrollmentDate5').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'EnrollmentDate5').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'EnrollmentDate5'));
			}
			var val = o['enrollmentDate6'];
			if(val != null) {
				var t = moment(val, 'YYYY-MM-DD');
				if(t)
					val = t.format('MM/DD/YYYY');
			}
			if(vars.includes('enrollmentDate6')) {
				$('.inputSchoolEnrollment' + pk + 'EnrollmentDate6').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'EnrollmentDate6').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'EnrollmentDate6'));
			}
			var val = o['enrollmentDate7'];
			if(val != null) {
				var t = moment(val, 'YYYY-MM-DD');
				if(t)
					val = t.format('MM/DD/YYYY');
			}
			if(vars.includes('enrollmentDate7')) {
				$('.inputSchoolEnrollment' + pk + 'EnrollmentDate7').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'EnrollmentDate7').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'EnrollmentDate7'));
			}
			var val = o['enrollmentDate8'];
			if(val != null) {
				var t = moment(val, 'YYYY-MM-DD');
				if(t)
					val = t.format('MM/DD/YYYY');
			}
			if(vars.includes('enrollmentDate8')) {
				$('.inputSchoolEnrollment' + pk + 'EnrollmentDate8').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'EnrollmentDate8').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'EnrollmentDate8'));
			}
			var val = o['enrollmentDate9'];
			if(val != null) {
				var t = moment(val, 'YYYY-MM-DD');
				if(t)
					val = t.format('MM/DD/YYYY');
			}
			if(vars.includes('enrollmentDate9')) {
				$('.inputSchoolEnrollment' + pk + 'EnrollmentDate9').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'EnrollmentDate9').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'EnrollmentDate9'));
			}
			var val = o['enrollmentDate10'];
			if(val != null) {
				var t = moment(val, 'YYYY-MM-DD');
				if(t)
					val = t.format('MM/DD/YYYY');
			}
			if(vars.includes('enrollmentDate10')) {
				$('.inputSchoolEnrollment' + pk + 'EnrollmentDate10').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'EnrollmentDate10').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'EnrollmentDate10'));
			}
			var val = o['childImmunizationsReceived'];
			if(vars.includes('childImmunizationsReceived')) {
				$('.inputSchoolEnrollment' + pk + 'ChildImmunizationsReceived').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'ChildImmunizationsReceived').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'ChildImmunizationsReceived'));
			}
			var val = o['childPhotosApproved'];
			if(vars.includes('childPhotosApproved')) {
				$('.inputSchoolEnrollment' + pk + 'ChildPhotosApproved').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'ChildPhotosApproved').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'ChildPhotosApproved'));
			}
			var val = o['enrollmentCompleteName'];
			if(vars.includes('enrollmentCompleteName')) {
				$('.inputSchoolEnrollment' + pk + 'EnrollmentCompleteName').each(function() {
					if(val !== $(this).val())
						$(this).val(val);
				});
				$('.varSchoolEnrollment' + pk + 'EnrollmentCompleteName').each(function() {
					if(val !== $(this).text())
						$(this).text(val);
				});
				addGlow($('.inputSchoolEnrollment' + pk + 'EnrollmentCompleteName'));
			}
		});
	}
}
