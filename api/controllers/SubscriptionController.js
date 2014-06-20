/**
 * SubscriptionController
 *
 * @description :: Server-side logic for managing Subscriptions
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

  create: function(req, res) {
    var email = req.param('email');
    Subscription.findOne({ email: email }).exec(function(err, subscription) {
      if(err) {
        sails.log.error('Error into finding subscription: ' + err);
        res.json(err, err.status);
        return;
      }
      if(!subscription) {
        Subscription.create({ name: req.param('name'), email: email }).exec(function(err, createdSub) {
          if(err) {
            sails.log.error('Error inserting new subscription: ' + err);
            res.json(err, err.status);
            return;
          }
          sails.log.silly('Inserted a new subscription!');
          res.ok(createdSub);
        });
      } else {
        // 409 Conflict
        res.json(subscription, 409);
      }
    });
  },

  update: function(req, res) {
    return res.notFound({ message: 'Operation not supported' });
  },

  destroy: function(req, res) {
    Subscription.findOne(req.param('id')).exec(function(err, subscription) {
      if(err) {
        sails.log.error('Error into finding subscription: ' + err);
        return res.json(err, err.status);
      }
      if(!subscription) {
        res.notFound({ message: 'L\'e-mail non risulta registrata presso i nostri server.' });
      } else {
        subscription.destroy(function(err) {
          if(err) {
            sails.log.error('Error deleting subscription: ' + err);
            return res.json(err, err.status);
          } else {
            sails.log.info('Deleted a subscription...');
            res.ok({ message: 'L\'e-mail &egrave; stata cancellata dai nostri server.' });
          }
        });
      }
    });
  }
	
};

