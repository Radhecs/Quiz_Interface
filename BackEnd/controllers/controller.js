import Questions from "../models/questionSchema.js";
import Results from "../models/resultSchema.js";
import questions, { answers } from "../database/new_Question.js";
/** get all questions */

export async function getQuestions(req, res) {
  // try {
  //   const q = await Questions.find();
  //   res.json(q);
  // } catch (err) {
  //   res.json({ err });
  // }
  try {
    let q = await Questions.find();
    if (q.length === 0) {
      await Questions.insertMany({ questions, answers });
      q = await Questions.find();
    }
    res.json(q);
  } catch (error) {
    res.json({ error });
  }
}

/** insert new questions */
export async function insertQuestions(req, res) {
  // try {
  //   await Questions.insertMany({ questions, answers }, function (err, data) {
  //     res.json({ msg: "Data Saved Successfully...!" });
  //   });
  // } catch (err) {
  //   res.json({ err });
  // }

  try {
    Questions.insertMany({ questions: questions, answers: answers });
    res.json("data insert sucessfully");
  } catch (error) {
    res.json({ error });
  }
}

/**Delete all Questions */

export async function deleteQuestions(req, res) {
  try {
    await Questions.deleteMany();
    res.json("Question Deleted Sucessfully..!");
  } catch (err) {
    res.json({ err });
  }
}

/**get all result */
export async function getResult(req, res) {
  try {
    const r = await Results.find();
    res.json(r);
  } catch (err) {
    res.json({ err });
  }
}

/**post all result */
export async function storeResult(req, res) {
  try {
    const { username, result, attempts, points, achived } = req.body;
    if (!username && !result) throw new Error("data not provided...!");
    // Results.create({ username, result, attempts, points, achived });
    // res.json("Result save successfully...!");
    const newResult = await Results.create({
      username,
      result,
      attempts,
      points,
      achived,
    });
    res.json({ msg: "Result Saved Successfully...!", result: newResult });
  } catch (err) {
    res.json({ err });
  }
}

/**delete all result */
export async function deleteResult(req, res) {
  try {
    await Results.deleteMany();
    res.json("Result deleted successfully");
  } catch (err) {
    res.json({ err });
  }
}
